#include <napi.h>
#include <string>
#include <iostream>

std::string sayHello(std::string name){
  using namespace std;
  cout << 'mmisme';
  cout << endl;
  return "Hello " + name + "!";
}