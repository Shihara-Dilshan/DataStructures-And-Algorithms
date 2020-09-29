using System;

namespace stacks
{
    class Program
    {
        static void Main(string[] args)
        {
            StackX stacks = new StackX(5);
            stacks.push(4);
            stacks.push(5);
            stacks.push(6);

            Console.WriteLine(stacks.peek());
        }
    }

    class StackX
    {
        private int maxSize;
        private int[] stacks;
        private int head = -1;
        
        public StackX(int maxSize)
        {
            this.maxSize = maxSize;
            stacks = new int[maxSize];
        }

        public Boolean isEmpty()
        {
            return head == -1;
        }

        public void push(int data)
        {
            if (head < maxSize-1)
            {
                stacks[++head] = data;
            }
            else
            {
                Console.WriteLine("Stack is full");
            }
        }

        public int pop()
        {
            if (!isEmpty())
            {
                return stacks[head--];
            }
            else
            {
                Console.WriteLine("Stack is empty");
                return -99;
            }
        }

        public int peek()
        {
            if (!isEmpty())
            {
                return stacks[head];
            }
            else
            {
                Console.WriteLine("Stack is empty");
                return -99;
            }
        }


    }
}