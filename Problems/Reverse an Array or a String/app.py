my_string = "shihara"
tempStack = [] #act as an stack 
reserved_string = ""

#itarate through the string and put into a stack 
for i in my_string:
   tempStack.append(i)

#pop item from the stack and create a newstring 
while(len(tempStack) > 0):
    reserved_string = reserved_string + tempStack.pop()

print(f"original string : {my_string} && reserved string : {reserved_string}")