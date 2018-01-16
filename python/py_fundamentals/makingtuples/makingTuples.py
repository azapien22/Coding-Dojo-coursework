my_dict = {
  "Speros": "(555) 555-5555",
  "Michael": "(999) 999-9999",
  "Jay": "(777) 777-7777"}

new_list = []

# here, a and b will parse each tuple of key,value pairs returned by .iteritems()

def makeTuples():
    for a,b in my_dict.iteritems():
        new_list.append((a,b))
    print new_list
    
makeTuples()