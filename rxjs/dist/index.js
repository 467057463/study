(function () {
  'use strict';

  /******************************************************************************
  Copyright (c) Microsoft Corporation.

  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.

  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** */
  /* global Reflect, Promise, SuppressedError, Symbol, Iterator */

  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
  };

  function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  }

  var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
  };

  function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
  }

  function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
  }

  function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
  }

  typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
  };

  function isFunction(value) {
      return typeof value === 'function';
  }

  function hasLift(source) {
      return isFunction(source === null || source === void 0 ? void 0 : source.lift);
  }
  function operate(init) {
      return function (source) {
          if (hasLift(source)) {
              return source.lift(function (liftedSource) {
                  try {
                      return init(liftedSource, this);
                  }
                  catch (err) {
                      this.error(err);
                  }
              });
          }
          throw new TypeError('Unable to lift unknown Observable type');
      };
  }

  function createErrorClass(createImpl) {
      var _super = function (instance) {
          Error.call(instance);
          instance.stack = new Error().stack;
      };
      var ctorFunc = createImpl(_super);
      ctorFunc.prototype = Object.create(Error.prototype);
      ctorFunc.prototype.constructor = ctorFunc;
      return ctorFunc;
  }

  var UnsubscriptionError = createErrorClass(function (_super) {
      return function UnsubscriptionErrorImpl(errors) {
          _super(this);
          this.message = errors
              ? errors.length + " errors occurred during unsubscription:\n" + errors.map(function (err, i) { return i + 1 + ") " + err.toString(); }).join('\n  ')
              : '';
          this.name = 'UnsubscriptionError';
          this.errors = errors;
      };
  });

  function arrRemove(arr, item) {
      if (arr) {
          var index = arr.indexOf(item);
          0 <= index && arr.splice(index, 1);
      }
  }

  var Subscription = (function () {
      function Subscription(initialTeardown) {
          this.initialTeardown = initialTeardown;
          this.closed = false;
          this._parentage = null;
          this._finalizers = null;
      }
      Subscription.prototype.unsubscribe = function () {
          var e_1, _a, e_2, _b;
          var errors;
          if (!this.closed) {
              this.closed = true;
              var _parentage = this._parentage;
              if (_parentage) {
                  this._parentage = null;
                  if (Array.isArray(_parentage)) {
                      try {
                          for (var _parentage_1 = __values(_parentage), _parentage_1_1 = _parentage_1.next(); !_parentage_1_1.done; _parentage_1_1 = _parentage_1.next()) {
                              var parent_1 = _parentage_1_1.value;
                              parent_1.remove(this);
                          }
                      }
                      catch (e_1_1) { e_1 = { error: e_1_1 }; }
                      finally {
                          try {
                              if (_parentage_1_1 && !_parentage_1_1.done && (_a = _parentage_1.return)) _a.call(_parentage_1);
                          }
                          finally { if (e_1) throw e_1.error; }
                      }
                  }
                  else {
                      _parentage.remove(this);
                  }
              }
              var initialFinalizer = this.initialTeardown;
              if (isFunction(initialFinalizer)) {
                  try {
                      initialFinalizer();
                  }
                  catch (e) {
                      errors = e instanceof UnsubscriptionError ? e.errors : [e];
                  }
              }
              var _finalizers = this._finalizers;
              if (_finalizers) {
                  this._finalizers = null;
                  try {
                      for (var _finalizers_1 = __values(_finalizers), _finalizers_1_1 = _finalizers_1.next(); !_finalizers_1_1.done; _finalizers_1_1 = _finalizers_1.next()) {
                          var finalizer = _finalizers_1_1.value;
                          try {
                              execFinalizer(finalizer);
                          }
                          catch (err) {
                              errors = errors !== null && errors !== void 0 ? errors : [];
                              if (err instanceof UnsubscriptionError) {
                                  errors = __spreadArray(__spreadArray([], __read(errors)), __read(err.errors));
                              }
                              else {
                                  errors.push(err);
                              }
                          }
                      }
                  }
                  catch (e_2_1) { e_2 = { error: e_2_1 }; }
                  finally {
                      try {
                          if (_finalizers_1_1 && !_finalizers_1_1.done && (_b = _finalizers_1.return)) _b.call(_finalizers_1);
                      }
                      finally { if (e_2) throw e_2.error; }
                  }
              }
              if (errors) {
                  throw new UnsubscriptionError(errors);
              }
          }
      };
      Subscription.prototype.add = function (teardown) {
          var _a;
          if (teardown && teardown !== this) {
              if (this.closed) {
                  execFinalizer(teardown);
              }
              else {
                  if (teardown instanceof Subscription) {
                      if (teardown.closed || teardown._hasParent(this)) {
                          return;
                      }
                      teardown._addParent(this);
                  }
                  (this._finalizers = (_a = this._finalizers) !== null && _a !== void 0 ? _a : []).push(teardown);
              }
          }
      };
      Subscription.prototype._hasParent = function (parent) {
          var _parentage = this._parentage;
          return _parentage === parent || (Array.isArray(_parentage) && _parentage.includes(parent));
      };
      Subscription.prototype._addParent = function (parent) {
          var _parentage = this._parentage;
          this._parentage = Array.isArray(_parentage) ? (_parentage.push(parent), _parentage) : _parentage ? [_parentage, parent] : parent;
      };
      Subscription.prototype._removeParent = function (parent) {
          var _parentage = this._parentage;
          if (_parentage === parent) {
              this._parentage = null;
          }
          else if (Array.isArray(_parentage)) {
              arrRemove(_parentage, parent);
          }
      };
      Subscription.prototype.remove = function (teardown) {
          var _finalizers = this._finalizers;
          _finalizers && arrRemove(_finalizers, teardown);
          if (teardown instanceof Subscription) {
              teardown._removeParent(this);
          }
      };
      Subscription.EMPTY = (function () {
          var empty = new Subscription();
          empty.closed = true;
          return empty;
      })();
      return Subscription;
  }());
  Subscription.EMPTY;
  function isSubscription(value) {
      return (value instanceof Subscription ||
          (value && 'closed' in value && isFunction(value.remove) && isFunction(value.add) && isFunction(value.unsubscribe)));
  }
  function execFinalizer(finalizer) {
      if (isFunction(finalizer)) {
          finalizer();
      }
      else {
          finalizer.unsubscribe();
      }
  }

  var config = {
      onUnhandledError: null,
      onStoppedNotification: null,
      Promise: undefined,
      useDeprecatedSynchronousErrorHandling: false,
      useDeprecatedNextContext: false,
  };

  var timeoutProvider = {
      setTimeout: function (handler, timeout) {
          var args = [];
          for (var _i = 2; _i < arguments.length; _i++) {
              args[_i - 2] = arguments[_i];
          }
          return setTimeout.apply(void 0, __spreadArray([handler, timeout], __read(args)));
      },
      clearTimeout: function (handle) {
          var delegate = timeoutProvider.delegate;
          return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearTimeout) || clearTimeout)(handle);
      },
      delegate: undefined,
  };

  function reportUnhandledError(err) {
      timeoutProvider.setTimeout(function () {
          {
              throw err;
          }
      });
  }

  function noop() { }

  function errorContext(cb) {
      {
          cb();
      }
  }

  var Subscriber = (function (_super) {
      __extends(Subscriber, _super);
      function Subscriber(destination) {
          var _this = _super.call(this) || this;
          _this.isStopped = false;
          if (destination) {
              _this.destination = destination;
              if (isSubscription(destination)) {
                  destination.add(_this);
              }
          }
          else {
              _this.destination = EMPTY_OBSERVER;
          }
          return _this;
      }
      Subscriber.create = function (next, error, complete) {
          return new SafeSubscriber(next, error, complete);
      };
      Subscriber.prototype.next = function (value) {
          if (this.isStopped) ;
          else {
              this._next(value);
          }
      };
      Subscriber.prototype.error = function (err) {
          if (this.isStopped) ;
          else {
              this.isStopped = true;
              this._error(err);
          }
      };
      Subscriber.prototype.complete = function () {
          if (this.isStopped) ;
          else {
              this.isStopped = true;
              this._complete();
          }
      };
      Subscriber.prototype.unsubscribe = function () {
          if (!this.closed) {
              this.isStopped = true;
              _super.prototype.unsubscribe.call(this);
              this.destination = null;
          }
      };
      Subscriber.prototype._next = function (value) {
          this.destination.next(value);
      };
      Subscriber.prototype._error = function (err) {
          try {
              this.destination.error(err);
          }
          finally {
              this.unsubscribe();
          }
      };
      Subscriber.prototype._complete = function () {
          try {
              this.destination.complete();
          }
          finally {
              this.unsubscribe();
          }
      };
      return Subscriber;
  }(Subscription));
  var _bind = Function.prototype.bind;
  function bind(fn, thisArg) {
      return _bind.call(fn, thisArg);
  }
  var ConsumerObserver = (function () {
      function ConsumerObserver(partialObserver) {
          this.partialObserver = partialObserver;
      }
      ConsumerObserver.prototype.next = function (value) {
          var partialObserver = this.partialObserver;
          if (partialObserver.next) {
              try {
                  partialObserver.next(value);
              }
              catch (error) {
                  handleUnhandledError(error);
              }
          }
      };
      ConsumerObserver.prototype.error = function (err) {
          var partialObserver = this.partialObserver;
          if (partialObserver.error) {
              try {
                  partialObserver.error(err);
              }
              catch (error) {
                  handleUnhandledError(error);
              }
          }
          else {
              handleUnhandledError(err);
          }
      };
      ConsumerObserver.prototype.complete = function () {
          var partialObserver = this.partialObserver;
          if (partialObserver.complete) {
              try {
                  partialObserver.complete();
              }
              catch (error) {
                  handleUnhandledError(error);
              }
          }
      };
      return ConsumerObserver;
  }());
  var SafeSubscriber = (function (_super) {
      __extends(SafeSubscriber, _super);
      function SafeSubscriber(observerOrNext, error, complete) {
          var _this = _super.call(this) || this;
          var partialObserver;
          if (isFunction(observerOrNext) || !observerOrNext) {
              partialObserver = {
                  next: (observerOrNext !== null && observerOrNext !== void 0 ? observerOrNext : undefined),
                  error: error !== null && error !== void 0 ? error : undefined,
                  complete: complete !== null && complete !== void 0 ? complete : undefined,
              };
          }
          else {
              var context_1;
              if (_this && config.useDeprecatedNextContext) {
                  context_1 = Object.create(observerOrNext);
                  context_1.unsubscribe = function () { return _this.unsubscribe(); };
                  partialObserver = {
                      next: observerOrNext.next && bind(observerOrNext.next, context_1),
                      error: observerOrNext.error && bind(observerOrNext.error, context_1),
                      complete: observerOrNext.complete && bind(observerOrNext.complete, context_1),
                  };
              }
              else {
                  partialObserver = observerOrNext;
              }
          }
          _this.destination = new ConsumerObserver(partialObserver);
          return _this;
      }
      return SafeSubscriber;
  }(Subscriber));
  function handleUnhandledError(error) {
      {
          reportUnhandledError(error);
      }
  }
  function defaultErrorHandler(err) {
      throw err;
  }
  var EMPTY_OBSERVER = {
      closed: true,
      next: noop,
      error: defaultErrorHandler,
      complete: noop,
  };

  function createOperatorSubscriber(destination, onNext, onComplete, onError, onFinalize) {
      return new OperatorSubscriber(destination, onNext, onComplete, onError, onFinalize);
  }
  var OperatorSubscriber = (function (_super) {
      __extends(OperatorSubscriber, _super);
      function OperatorSubscriber(destination, onNext, onComplete, onError, onFinalize, shouldUnsubscribe) {
          var _this = _super.call(this, destination) || this;
          _this.onFinalize = onFinalize;
          _this.shouldUnsubscribe = shouldUnsubscribe;
          _this._next = onNext
              ? function (value) {
                  try {
                      onNext(value);
                  }
                  catch (err) {
                      destination.error(err);
                  }
              }
              : _super.prototype._next;
          _this._error = onError
              ? function (err) {
                  try {
                      onError(err);
                  }
                  catch (err) {
                      destination.error(err);
                  }
                  finally {
                      this.unsubscribe();
                  }
              }
              : _super.prototype._error;
          _this._complete = onComplete
              ? function () {
                  try {
                      onComplete();
                  }
                  catch (err) {
                      destination.error(err);
                  }
                  finally {
                      this.unsubscribe();
                  }
              }
              : _super.prototype._complete;
          return _this;
      }
      OperatorSubscriber.prototype.unsubscribe = function () {
          var _a;
          if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
              var closed_1 = this.closed;
              _super.prototype.unsubscribe.call(this);
              !closed_1 && ((_a = this.onFinalize) === null || _a === void 0 ? void 0 : _a.call(this));
          }
      };
      return OperatorSubscriber;
  }(Subscriber));

  function map(project, thisArg) {
      return operate(function (source, subscriber) {
          var index = 0;
          source.subscribe(createOperatorSubscriber(subscriber, function (value) {
              subscriber.next(project.call(thisArg, value, index++));
          }));
      });
  }

  var observable = (function () { return (typeof Symbol === 'function' && Symbol.observable) || '@@observable'; })();

  function identity(x) {
      return x;
  }

  function pipeFromArray(fns) {
      if (fns.length === 0) {
          return identity;
      }
      if (fns.length === 1) {
          return fns[0];
      }
      return function piped(input) {
          return fns.reduce(function (prev, fn) { return fn(prev); }, input);
      };
  }

  var Observable = (function () {
      function Observable(subscribe) {
          if (subscribe) {
              this._subscribe = subscribe;
          }
      }
      Observable.prototype.lift = function (operator) {
          var observable = new Observable();
          observable.source = this;
          observable.operator = operator;
          return observable;
      };
      Observable.prototype.subscribe = function (observerOrNext, error, complete) {
          var _this = this;
          var subscriber = isSubscriber(observerOrNext) ? observerOrNext : new SafeSubscriber(observerOrNext, error, complete);
          errorContext(function () {
              var _a = _this, operator = _a.operator, source = _a.source;
              subscriber.add(operator
                  ?
                      operator.call(subscriber, source)
                  : source
                      ?
                          _this._subscribe(subscriber)
                      :
                          _this._trySubscribe(subscriber));
          });
          return subscriber;
      };
      Observable.prototype._trySubscribe = function (sink) {
          try {
              return this._subscribe(sink);
          }
          catch (err) {
              sink.error(err);
          }
      };
      Observable.prototype.forEach = function (next, promiseCtor) {
          var _this = this;
          promiseCtor = getPromiseCtor(promiseCtor);
          return new promiseCtor(function (resolve, reject) {
              var subscriber = new SafeSubscriber({
                  next: function (value) {
                      try {
                          next(value);
                      }
                      catch (err) {
                          reject(err);
                          subscriber.unsubscribe();
                      }
                  },
                  error: reject,
                  complete: resolve,
              });
              _this.subscribe(subscriber);
          });
      };
      Observable.prototype._subscribe = function (subscriber) {
          var _a;
          return (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber);
      };
      Observable.prototype[observable] = function () {
          return this;
      };
      Observable.prototype.pipe = function () {
          var operations = [];
          for (var _i = 0; _i < arguments.length; _i++) {
              operations[_i] = arguments[_i];
          }
          return pipeFromArray(operations)(this);
      };
      Observable.prototype.toPromise = function (promiseCtor) {
          var _this = this;
          promiseCtor = getPromiseCtor(promiseCtor);
          return new promiseCtor(function (resolve, reject) {
              var value;
              _this.subscribe(function (x) { return (value = x); }, function (err) { return reject(err); }, function () { return resolve(value); });
          });
      };
      Observable.create = function (subscribe) {
          return new Observable(subscribe);
      };
      return Observable;
  }());
  function getPromiseCtor(promiseCtor) {
      var _a;
      return (_a = promiseCtor !== null && promiseCtor !== void 0 ? promiseCtor : config.Promise) !== null && _a !== void 0 ? _a : Promise;
  }
  function isObserver(value) {
      return value && isFunction(value.next) && isFunction(value.error) && isFunction(value.complete);
  }
  function isSubscriber(value) {
      return (value && value instanceof Subscriber) || (isObserver(value) && isSubscription(value));
  }

  function getXHRResponse(xhr) {
      switch (xhr.responseType) {
          case 'json': {
              if ('response' in xhr) {
                  return xhr.response;
              }
              else {
                  var ieXHR = xhr;
                  return JSON.parse(ieXHR.responseText);
              }
          }
          case 'document':
              return xhr.responseXML;
          case 'text':
          default: {
              if ('response' in xhr) {
                  return xhr.response;
              }
              else {
                  var ieXHR = xhr;
                  return ieXHR.responseText;
              }
          }
      }
  }

  var AjaxResponse = (function () {
      function AjaxResponse(originalEvent, xhr, request, type) {
          if (type === void 0) { type = 'download_load'; }
          this.originalEvent = originalEvent;
          this.xhr = xhr;
          this.request = request;
          this.type = type;
          var status = xhr.status, responseType = xhr.responseType;
          this.status = status !== null && status !== void 0 ? status : 0;
          this.responseType = responseType !== null && responseType !== void 0 ? responseType : '';
          var allHeaders = xhr.getAllResponseHeaders();
          this.responseHeaders = allHeaders
              ?
                  allHeaders.split('\n').reduce(function (headers, line) {
                      var index = line.indexOf(': ');
                      headers[line.slice(0, index)] = line.slice(index + 2);
                      return headers;
                  }, {})
              : {};
          this.response = getXHRResponse(xhr);
          var loaded = originalEvent.loaded, total = originalEvent.total;
          this.loaded = loaded;
          this.total = total;
      }
      return AjaxResponse;
  }());

  var AjaxError = createErrorClass(function (_super) {
      return function AjaxErrorImpl(message, xhr, request) {
          this.message = message;
          this.name = 'AjaxError';
          this.xhr = xhr;
          this.request = request;
          this.status = xhr.status;
          this.responseType = xhr.responseType;
          var response;
          try {
              response = getXHRResponse(xhr);
          }
          catch (err) {
              response = xhr.responseText;
          }
          this.response = response;
      };
  });
  var AjaxTimeoutError = (function () {
      function AjaxTimeoutErrorImpl(xhr, request) {
          AjaxError.call(this, 'ajax timeout', xhr, request);
          this.name = 'AjaxTimeoutError';
          return this;
      }
      AjaxTimeoutErrorImpl.prototype = Object.create(AjaxError.prototype);
      return AjaxTimeoutErrorImpl;
  })();

  function ajaxGet(url, headers) {
      return ajax({ method: 'GET', url: url, headers: headers });
  }
  function ajaxPost(url, body, headers) {
      return ajax({ method: 'POST', url: url, body: body, headers: headers });
  }
  function ajaxDelete(url, headers) {
      return ajax({ method: 'DELETE', url: url, headers: headers });
  }
  function ajaxPut(url, body, headers) {
      return ajax({ method: 'PUT', url: url, body: body, headers: headers });
  }
  function ajaxPatch(url, body, headers) {
      return ajax({ method: 'PATCH', url: url, body: body, headers: headers });
  }
  var mapResponse = map(function (x) { return x.response; });
  function ajaxGetJSON(url, headers) {
      return mapResponse(ajax({
          method: 'GET',
          url: url,
          headers: headers,
      }));
  }
  var ajax = (function () {
      var create = function (urlOrConfig) {
          var config = typeof urlOrConfig === 'string'
              ? {
                  url: urlOrConfig,
              }
              : urlOrConfig;
          return fromAjax(config);
      };
      create.get = ajaxGet;
      create.post = ajaxPost;
      create.delete = ajaxDelete;
      create.put = ajaxPut;
      create.patch = ajaxPatch;
      create.getJSON = ajaxGetJSON;
      return create;
  })();
  var UPLOAD = 'upload';
  var DOWNLOAD = 'download';
  var LOADSTART = 'loadstart';
  var PROGRESS = 'progress';
  var LOAD = 'load';
  function fromAjax(init) {
      return new Observable(function (destination) {
          var _a, _b;
          var config = __assign({ async: true, crossDomain: false, withCredentials: false, method: 'GET', timeout: 0, responseType: 'json' }, init);
          var queryParams = config.queryParams, configuredBody = config.body, configuredHeaders = config.headers;
          var url = config.url;
          if (!url) {
              throw new TypeError('url is required');
          }
          if (queryParams) {
              var searchParams_1;
              if (url.includes('?')) {
                  var parts = url.split('?');
                  if (2 < parts.length) {
                      throw new TypeError('invalid url');
                  }
                  searchParams_1 = new URLSearchParams(parts[1]);
                  new URLSearchParams(queryParams).forEach(function (value, key) { return searchParams_1.set(key, value); });
                  url = parts[0] + '?' + searchParams_1;
              }
              else {
                  searchParams_1 = new URLSearchParams(queryParams);
                  url = url + '?' + searchParams_1;
              }
          }
          var headers = {};
          if (configuredHeaders) {
              for (var key in configuredHeaders) {
                  if (configuredHeaders.hasOwnProperty(key)) {
                      headers[key.toLowerCase()] = configuredHeaders[key];
                  }
              }
          }
          var crossDomain = config.crossDomain;
          if (!crossDomain && !('x-requested-with' in headers)) {
              headers['x-requested-with'] = 'XMLHttpRequest';
          }
          var withCredentials = config.withCredentials, xsrfCookieName = config.xsrfCookieName, xsrfHeaderName = config.xsrfHeaderName;
          if ((withCredentials || !crossDomain) && xsrfCookieName && xsrfHeaderName) {
              var xsrfCookie = (_b = (_a = document === null || document === void 0 ? void 0 : document.cookie.match(new RegExp("(^|;\\s*)(" + xsrfCookieName + ")=([^;]*)"))) === null || _a === void 0 ? void 0 : _a.pop()) !== null && _b !== void 0 ? _b : '';
              if (xsrfCookie) {
                  headers[xsrfHeaderName] = xsrfCookie;
              }
          }
          var body = extractContentTypeAndMaybeSerializeBody(configuredBody, headers);
          var _request = __assign(__assign({}, config), { url: url,
              headers: headers,
              body: body });
          var xhr;
          xhr = init.createXHR ? init.createXHR() : new XMLHttpRequest();
          {
              var progressSubscriber_1 = init.progressSubscriber, _c = init.includeDownloadProgress, includeDownloadProgress = _c === void 0 ? false : _c, _d = init.includeUploadProgress, includeUploadProgress = _d === void 0 ? false : _d;
              var addErrorEvent = function (type, errorFactory) {
                  xhr.addEventListener(type, function () {
                      var _a;
                      var error = errorFactory();
                      (_a = progressSubscriber_1 === null || progressSubscriber_1 === void 0 ? void 0 : progressSubscriber_1.error) === null || _a === void 0 ? void 0 : _a.call(progressSubscriber_1, error);
                      destination.error(error);
                  });
              };
              addErrorEvent('timeout', function () { return new AjaxTimeoutError(xhr, _request); });
              addErrorEvent('abort', function () { return new AjaxError('aborted', xhr, _request); });
              var createResponse_1 = function (direction, event) {
                  return new AjaxResponse(event, xhr, _request, direction + "_" + event.type);
              };
              var addProgressEvent_1 = function (target, type, direction) {
                  target.addEventListener(type, function (event) {
                      destination.next(createResponse_1(direction, event));
                  });
              };
              if (includeUploadProgress) {
                  [LOADSTART, PROGRESS, LOAD].forEach(function (type) { return addProgressEvent_1(xhr.upload, type, UPLOAD); });
              }
              if (progressSubscriber_1) {
                  [LOADSTART, PROGRESS].forEach(function (type) { return xhr.upload.addEventListener(type, function (e) { var _a; return (_a = progressSubscriber_1 === null || progressSubscriber_1 === void 0 ? void 0 : progressSubscriber_1.next) === null || _a === void 0 ? void 0 : _a.call(progressSubscriber_1, e); }); });
              }
              if (includeDownloadProgress) {
                  [LOADSTART, PROGRESS].forEach(function (type) { return addProgressEvent_1(xhr, type, DOWNLOAD); });
              }
              var emitError_1 = function (status) {
                  var msg = 'ajax error' + (status ? ' ' + status : '');
                  destination.error(new AjaxError(msg, xhr, _request));
              };
              xhr.addEventListener('error', function (e) {
                  var _a;
                  (_a = progressSubscriber_1 === null || progressSubscriber_1 === void 0 ? void 0 : progressSubscriber_1.error) === null || _a === void 0 ? void 0 : _a.call(progressSubscriber_1, e);
                  emitError_1();
              });
              xhr.addEventListener(LOAD, function (event) {
                  var _a, _b;
                  var status = xhr.status;
                  if (status < 400) {
                      (_a = progressSubscriber_1 === null || progressSubscriber_1 === void 0 ? void 0 : progressSubscriber_1.complete) === null || _a === void 0 ? void 0 : _a.call(progressSubscriber_1);
                      var response = void 0;
                      try {
                          response = createResponse_1(DOWNLOAD, event);
                      }
                      catch (err) {
                          destination.error(err);
                          return;
                      }
                      destination.next(response);
                      destination.complete();
                  }
                  else {
                      (_b = progressSubscriber_1 === null || progressSubscriber_1 === void 0 ? void 0 : progressSubscriber_1.error) === null || _b === void 0 ? void 0 : _b.call(progressSubscriber_1, event);
                      emitError_1(status);
                  }
              });
          }
          var user = _request.user, method = _request.method, async = _request.async;
          if (user) {
              xhr.open(method, url, async, user, _request.password);
          }
          else {
              xhr.open(method, url, async);
          }
          if (async) {
              xhr.timeout = _request.timeout;
              xhr.responseType = _request.responseType;
          }
          if ('withCredentials' in xhr) {
              xhr.withCredentials = _request.withCredentials;
          }
          for (var key in headers) {
              if (headers.hasOwnProperty(key)) {
                  xhr.setRequestHeader(key, headers[key]);
              }
          }
          if (body) {
              xhr.send(body);
          }
          else {
              xhr.send();
          }
          return function () {
              if (xhr && xhr.readyState !== 4) {
                  xhr.abort();
              }
          };
      });
  }
  function extractContentTypeAndMaybeSerializeBody(body, headers) {
      var _a;
      if (!body ||
          typeof body === 'string' ||
          isFormData(body) ||
          isURLSearchParams(body) ||
          isArrayBuffer(body) ||
          isFile(body) ||
          isBlob(body) ||
          isReadableStream(body)) {
          return body;
      }
      if (isArrayBufferView(body)) {
          return body.buffer;
      }
      if (typeof body === 'object') {
          headers['content-type'] = (_a = headers['content-type']) !== null && _a !== void 0 ? _a : 'application/json;charset=utf-8';
          return JSON.stringify(body);
      }
      throw new TypeError('Unknown body type');
  }
  var _toString = Object.prototype.toString;
  function toStringCheck(obj, name) {
      return _toString.call(obj) === "[object " + name + "]";
  }
  function isArrayBuffer(body) {
      return toStringCheck(body, 'ArrayBuffer');
  }
  function isFile(body) {
      return toStringCheck(body, 'File');
  }
  function isBlob(body) {
      return toStringCheck(body, 'Blob');
  }
  function isArrayBufferView(body) {
      return typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView(body);
  }
  function isFormData(body) {
      return typeof FormData !== 'undefined' && body instanceof FormData;
  }
  function isURLSearchParams(body) {
      return typeof URLSearchParams !== 'undefined' && body instanceof URLSearchParams;
  }
  function isReadableStream(body) {
      return typeof ReadableStream !== 'undefined' && body instanceof ReadableStream;
  }

  const obs$ = ajax('https://api.github.com/users?per_page=5')
  .pipe(map(res => res));

  obs$.subscribe({
    next: value => console.log(value),
    error: err => console.log(err)
  });



  // import { ajax } from 'rxjs/ajax'
  // import { map } from 'rxjs'

  // ajax({
  //   url: 'https://httpbin.org/delay/2',
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: 'Hello, World!',
  // })
  //   .pipe(map(res => res.response.data))
  //   .subscribe(console.log) // Hello World!

})();
