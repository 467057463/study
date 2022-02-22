type AnyObject = {
  [x: string]: any;
};

type Data = string | AnyObject | ArrayBuffer;

export type Method =
  | "GET"
  | "POST"
  | "PUT"
  | "DELETE"
  | "CONNECT"
  | "HEAD"
  | "OPTIONS"
  | "TRACE";

export type DataType = "json" | "text" | "html";

type AjaxRequestConfig = {
  baseURL?: string;
  url?: string;
  data?: Data;
  query?: AnyObject;
  params?: AnyObject;
  headers?: any;
  method?: Method;
  timeout?: number;
  dataType?: DataType;
  responseType?: ResponseType;

  validateStatus?: ((statusCode?: number) => boolean) | null;
  adapter?: (config: AjaxRequestConfig) => Promise<any>;
};

type AjaxInstance = {
  get: any;
  post: any;
  put: any;
  delete: any;
  connect: any;
  head: any;
  options: any;
  trace: any;
};

export default function Ajax(defaultConfig?: AjaxRequestConfig): AjaxInstance {
  function ajax() {}

  return ajax;
}
