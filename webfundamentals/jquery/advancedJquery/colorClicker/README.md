Color Clicker
For this assignment, you should use the traversing methods discussed in this chapter. Instead of creating this project from scratch, copy the code at the bottom of this page and use it as a starting point. You will notice that there is a function we use in the code called event.stopPropagation() in the .click() method for the child elements of the large box. This function prevents the .click() method from propagating from the child element to the parent element because, technically, when you click the smaller boxes, you are also clicking the big box too. This function allows us to make the .click() event exclusively for the small boxes and not the big boxes. To see this in action, comment out the event.stopPropagation() functions and see what happens when you click a small box. Good luck!

Hint: The function called random_color() that is defined in the template will return a random hexadecimal value that can be used as a background coloring. Simply call that function and a value will be assigned!



Don't spend more than 5 hours trying to get this to work.