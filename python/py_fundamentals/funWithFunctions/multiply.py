def multiply(arr, num):
    for x in range(0, len(arr)):
        arr[x] *= num
    return arr

numbers_array = [5,10,15,20,25,30]

print multiply(numbers_array, 5)