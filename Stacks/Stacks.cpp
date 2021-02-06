#include <iostream>
using namespace std;

class Stacks{
    private:
        int stackSize;
        int stackArr[stackSize];
        int head;

    public:
        Stacks(int stackSize){
            this->stackSize = stackSize;
            this->stackArr = {};
            this->head = -1;
        }

};

int main(){
    Stacks stackss;
    return 0;
}

