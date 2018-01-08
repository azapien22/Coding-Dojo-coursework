# find and replace
words = "its thanksgiving day. its my birthday, too."
index = words.find("day")
switch = words.replace("day","month")
print(index)
print(switch)

# min and max
x = [2,54,-2,7,12,98]
print min(x)
print max(x)

# first and last
x = ['hello',2,54,-2,7,12,98,'world']
print x[0]
print x[7]
print x[0:7]

# new list
x = [19,2,54,-2,7,12,98,32,10,-3,6]
x.sort()
print x 
y= x[0:5]
z=x[5:10]
print y
print z
y.append(z)
print y

#NEW LIST
x = [19,2,54,-2,7,12,98,32,10,-3,6]
print x.sort() 
y= x[:len(x)/2]
z=x[len(x)/2:]
print y
print z
y.append(z)
print y
