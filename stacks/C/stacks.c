/* implementing stacks using c language */

#include <stdio.h>
#include <stdlib.h>

//define global variables
int MAX = 4; //stack with storage upto 4 values
int stack[4];
int count = 0;

//Add an value to the stack(to end of the stack)
int push(int value)
{
    if (count > 3 || count < 0)
    {
        return -1;
    }
    else
    {
        stack[count] = value;
        count++;
        return 0;
    }
}

//Remove the last element from the stack and return the removed value
int pop()
{
    //if the stack is empty return undefined
    if (count == 0)
    {
        return -1;
    }
    else
    {
        count--;                     //resuce the size of the stack by 1
        int popValue = stack[count]; //extract the last value from the stack to a variable
        stack[count] = 0;            //set the last element of the stack to be zero
        return popValue;             //return the removed value
    }
}

//Get the size of the stack
int size()
{
    return count;
}

//Get the last element of the stack(but not remove the value)
int peek()
{
    return stack[count];
}

int main()
{
    push(1);
    push(2);
    push(3);
    push(4);
    pop();
    pop();
    printf("%d" , size());
    
    return 0;
}