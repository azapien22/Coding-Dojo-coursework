mesh_list = ['magical unicorns',22,'hello',100.99,'world']
integer_list = [2,4,6,8,10]
string_list = ["blunt", "L", "Chronic"]

def type_list(lst):
    new_string = ''
    total = 0

    for value in lst:
        if isinstance(value, int) or isinstance(value, float):
            total += value
        elif isinstance(value, str):
            new_string += value

    if new_string and total:
        print "The array you entered is of mixed type"
        print "String:", new_string
        print "Total:", total

    elif new_string:
        print "The array you entered is of string type"
        print "String:",new_string

    else:
        print "The array you entered is of number(float or int) type"
        print "Total:", total

print type_list(mesh_list)
print type_list(integer_list)
print type_list(string_list)