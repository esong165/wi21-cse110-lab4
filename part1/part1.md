1) 3 will be printed, as i is a var, so i will persist past the for block. After the for, i is equal to prices.length.
2) 150 will be printed, as vars persist past for blocks. This was the value it was last set to.
3) 150 will be printed, as this is the value that finalPrice was last set to before exiting the for loop. As well, it will last through the for block because it was declared outside of the loop (and is a var declaration).
4) [50, 100, 150]. In each iteration i of the loop, we push the rounded discounted price of the item at position i to our returned array. In this case, the discount is .5 (or 50%), so we return an array of all of the discounted prices, in their original order.
5) Line 11 would cause an error because i is not present in the scope of the print statement, as it would get garbage collected at the end of the for loop.
6) Line 12 would cause an error because discountedPrice is declared in the for loop, so it is not in the scope of the print statement and would get garbage collected at the end of each for loop iteration. Thus, it would be undefined when we call the print.
7) 150 will be printed, as this is the value finalPrice was last set to before exiting the loop. Since it was declared outside of the loop, it would persist in the scope of the print statement (and not be garbage collected).
8) Assuming no errors from the prints, it returns [50, 100, 150]. In each iteration i of the loop, we push the rounded discounted prices of the item at position i to our discounted array, and since it is declared outside of the loop, it is in the scope of the return statement and would not get garbage collected. Thus, we will return the array of all of the discounted prices, in their original order. (The math logic is identical to question 4).
9) The constant finalPrice being reassigned should cause an error, which means execution would never reach this line. If we assume this error does not occur, then an error is thrown at line 11 because i is not defined in this scope (it gets garbage collected at the end of the for loop).
10) The constant finalPrice being reassigned should cause an error, which means execution would never reach this line. If we assume this error does not occur, then an error is thrown at line 12 because discountedPrice is not defined in this scope (it gets garbage collected at the end of each for loop iteration).
11) The constant finalPrice being reassigned should cause an error, which means execution would never reach this line. If we assume this error does not occur, then it would print 0 because constants cannot be altered once initialized.
12) The constant finalPrice being reassigned should cause an error, which means execution would never reach this line. If we assume this error does not occur, then it would return [0, 0, 0] because we push finalPrice each time, which (if we assume the error does not occur) would never be reassigned from 0.
13A) student.name
13B) student["Grad Year"]
13C) student.greeting()
13D) student["Favorite Teacher"].name
13E) student.courseLoad[0]  
14A) Outputs '32', as this is string concatenation.
14B) Outputs 1, as '3' is converted to an integer in mathematical expressions.
14C) Outputs 3, as null is converted to 0 in mathematical expressions.
14D) Outputs '3null', as this is string concatenation and null is converted to "null" when treated as a string.
14E) Outputs 4, as true is converted to 1 in mathematical expressions.
14F) Outputs 0, as both false and null are converted to 0 in mathematical expressions.
14G) Outputs '3undefined', as undefined is converted to "undefined" in string concatenation.
14H) Outputs NaN, as "3" is converted to 3 and undefined is converted to NaN in mathematical expressions, and 3 - NaN = NaN.
15A) Outputs true, because '2' is converted to a number and 2 is greater than 1.
15B) Outputs false, as in string comparison, 2 has a higher ASCII/unicode value than 1, which means '2' would be seen as the "greater" string when compared to '12'.
15C) Outputs true, because '2' is converted to a number and 2 is equal to 2.
15D) Outputs false, as these are different types, which makes this expression output false.
15E) Outputs false, as true is converted to 1 when treated as a number and 1 is not equal to 2.
15F) Outputs true, as Boolean(2) = true because 2 is not "intuitively empty" (is not 0, null, NaN, etc).
16) == checks the equality of two items and converts them both to numbers if they are of different types (so they can be different types and be equal). === checks the equality of two items without doing this conversion (i.e. they must be the same type to be equal). As well, null and undefined are a special case; null == undefined is true (which are the only things that null/undefined can equal with ==) and null === undefined is false.
17) 'How are you?' gets printed. 2 == true is false, because true would be converted to 1 when converted to a number, and 2 does not equal 1. When converting 2 as a boolean (Boolean(2)), since 2 is not "intuitively empty", it would be converted to true, so the else if statement is true and gets printed. Then, the else is not printed.
19) For each iteration i of the loop, we push doSomething(array[i], function(x) { return x * 2;}), which returns function(array[i] + 2), which returns (array[i] + 2) * 2, to newArr. Thus, we are pushing (1 + 2) * 2, (2 + 2) * 2, and (3 + 2) * 2 to newArr, which means newArr will be [6, 8, 10].
21) In this code block,
1
4
3
2
will be printed. This is because the callbacks in the setTimeout() functions occur after the main block is executed, so the console.log(1) and console.log(4) will execute before the callbacks occur. Next, console.log(3) prints before console.log(2) because the delay is shorter.