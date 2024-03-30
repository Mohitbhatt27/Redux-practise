Redux:-
Functions: combine(), createStore(), subscribe(), dispatch(), getState()

1. combine()- a very simple utility function.
   ### Situation: We have a string, we have to do the following transformations on the string.
   ## 1. Remove all the spaces.
   ## 2. Concatenate the string with itself.
   ## 3. Make all characters uppercase.
   ## 4. Make it italics.

   In normal Maths,
   y <- f(x)
   z <- g(y)
   a <- h(z)

   Together
   1. removeSpaces (str)
   2. repeat (str)
   3. uppercase (str)
   4. italics (str)

   input - str - "abc def"

    italics(uppercase(repeat(removeSpaces (str))))

