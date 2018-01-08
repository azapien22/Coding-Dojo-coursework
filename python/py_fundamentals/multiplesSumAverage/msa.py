# multiples
''' part 1 '''
oddNum = 0
for oddNum in range(1, 1000):
    if oddNum % 2 != 0:
      print oddNum

''' part 2 '''
five = 0
for five in range(5,1000000):
    if five % 5 == 0:
       print five

       
# sum list
a = [1, 2, 5, 10, 255, 3]
sum = 0
for i in range(len(a)):
    sum += a[i]
    print sum

# Average list
a = [1, 2, 5, 10, 255, 3]
print reduce(lambda x, y: x + y, a) / len(a)
