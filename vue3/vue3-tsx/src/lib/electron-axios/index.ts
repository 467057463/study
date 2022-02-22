import Ajax from "./Ajax";

import type { AjaxInstance, AjaxRequestConfig } from "./Ajax";

type AjaxStatic = AjaxInstance & {
  create(config?: AjaxRequestConfig): AjaxInstance;
};
const ajax = Ajax() as AjaxStatic;

ajax.create = function create(instanceConfig) {
  return Ajax(instanceConfig);
};

export default ajax;
