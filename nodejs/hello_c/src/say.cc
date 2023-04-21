#include <napi.h>
#include <string>
#include <iostream>

std::string sayHello(std::string name){
  using namespace std;
  cout << 1;
  cout << endl;
  return "Hello " + name + "!!!!!";
}