#include <iostream>

using namespace std;

class Stack{
    private:
        int *stackArr;
        int top;
        int size;
    public:
        Stack(int size);
        ~Stack();

        void push(int value);
        int pop();
        int peek();
        int sizeOf();
        bool isEmpty();
        bool isFull();
};

Stack::Stack(int size){
    this->stackArr = new int[size];
    this->size = size;
    this->top = -1;
}

Stack::~Stack(){
    delete[] this->stackArr;
}

void Stack::push(int value){
    if(this->isFull()){
        cout << "Stack is full" << endl;
        return;
    }else{
        this->stackArr[++(this->top)] = value;
    }
}

int Stack::pop(){
    if(this->isEmpty()){
        cout << "Stack is empty" << endl;
        return -1;
    }else{
        return this->stackArr[(this->top)--];
    }
}

int Stack::peek(){
    if(this->isEmpty()){
        cout << "Stack is empty" << endl;
        return -1;
    }else{
        return this->stackArr[this->top];
    }
}

int Stack::sizeOf(){
    return this->top + 1;
}

bool Stack::isEmpty(){
    return this->top == -1;
}

bool Stack::isFull(){
    return this->top == this->size - 1;
}

int main(int argc, char** argv){
    Stack stack(13);
 
    stack.push(31);
    stack.push(22); 
    stack.pop();
    stack.push(122);
    stack.pop();
    stack.push(333);

    return 0;
}

