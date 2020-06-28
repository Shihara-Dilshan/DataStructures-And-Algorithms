class Factorial:
    def __init__(self):
        self.factorial_Value = 0

    def FactorialFinder(self, input_value):
        if input_value == 1 or input_value == 0:
            return 1
        elif input_value < 0:
            return "Enter positive Number"
        else:
            return input_value * self.FactorialFinder(input_value - 1)


if __name__ == '__main__':
    f1 = Factorial()
    print(f1.FactorialFinder(5))
