#include <iostream>
#include "DBClient.h"

using namespace std;

void t(int& n){
  n = n + 1;
  cout << n << endl;
}

int main()
{
  int a {1};
  int* pointerA { &a };
  cout << a << endl;
  cout << pointerA << endl; 
  cout << *pointerA << endl;
  t(a);
  cout << a << endl;
  return 0;
}
