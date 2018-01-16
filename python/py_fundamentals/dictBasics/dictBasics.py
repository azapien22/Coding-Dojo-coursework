my_dict = {
    "name": "Amaury",
    "age": "32",
    "country of birth": "United States",
    "favorite language": "Python"}


def about_me():
    for a,b in my_dict.iteritems():
        print "My {} is {}" .format(a, b)

about_me()