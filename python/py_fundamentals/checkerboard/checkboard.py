l = [1,2,3,4,5,6,7,8,9,10,11,12]
red = "* * * *"
black = " * * * *"

for i in l:
    if i % 2 == 0:
        print red
    else:
        print black

def checkerboard():
  for i in range(0, 8):
  	if i % 2 == 0:
  		print "* " * 4
  	else:
  		print " *" * 4
checkerboard()