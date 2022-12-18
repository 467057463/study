#include <napi.h> 
#include <string>
#include "greeting.h"


using namespace Napi;

Napi::String Hello(const Napi::CallbackInfo& info) { 
  // Napi::Env env = info.Env(); 
  std::string result = sayHello(info[0].ToString());
  return Napi::String::New(info.Env(), result); 
} 
 
Napi::Object Init(Napi::Env env, Napi::Object exports) { 
  exports.Set(
    "hello", 
    Napi::Function::New(env, Hello)
  ); 
  return exports; 
} 

NODE_API_MODULE(hello, Init) 