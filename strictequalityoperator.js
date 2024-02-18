//identify equality operators
//Javascript includes for equality operators:
//strict equality operator (===)
//strict inequality operator(!==)
//loose equality operator (==)
//loose inequality operator(!=)

//Strict Equality allow us to compare values and determine whether they are the same.
//The strict equality operator returns true if two values are equal without performing  type conversions. Even if the values on both sides of the operator loom similar '42' === 42). the  === operator will only return true if the data types also match::
42 === 24;
// => true 

42 === "42";
// => false

true === 1;
//=> false

"0" === false;
//=> false

null === undefined;
//=> false

" " === 0;
// => false

// This is logical and accurate!
//The strict inequality operator returns  true if two values are not equal without perfrom type conversions:

900 !== 9001
//=> true

9001 != '9001'
// => true 

[] !== ''
  // => true 


 //you should prefere === and !== for comparisons.

//Loose Equality Iperator == and  Loose Inequality  Operator !=
 //The loose equality operator returns true if two values are equal:
 42 == "42";

true == 1;
//=> true 

"0" == false;
//=> true

null == undefined;
//=> true 


" " == 0:
// => true 


// The loose inequality operator is the opposite of ==. it returns  true if two values are not equal. Performing type conversions as necessary:

9000 != 9001
// => true 

9001 != '9001'
//=> false

[] != ''
// => false 
// This is confusing and inaccurate! it makes no sense that  the string '0'  is equal  to the boolean false or that null or that null and undefined -two complete ely different data types -- are equivalent.

//You should prefer === and != for  comparospms/ There are a lot  of rules that Javascript follpows when performing type coercision using the == operator, and it's  not worth keeping track of them all.


  // Compare Numbers with  Relational Operators
  //Javascript includes four relational operators:P
  //greater than (>)
  //greather than or equals(>=)
  //less than (<)
  // less than or equals(<=) 

  //The behavior of these operators is consistent with  the meaning of the corresponding  symboles in mathmatics:
  88 > 9;
// => true

88 >= 88;
//=> true

88 <9;
// => false
//However, beware of the type conversion when comparing non-numbers. For instance, when a string is compared with a number, the JavasScript  engine tries to convertthe string to a number:
88> "9";
//=> true

//if the engine can't convert the string into a number, the comparison will always return  false:
88>= "hello";
//=> false 
88 <= "hello";
//=> false

//Strings are comapred with other strings lexicographically,  meaning character-by-character from left-to-right. The following returns false because the Unicode value of 8., the first character in 88, is less than the Unicode value of 9.

"88" > "9";
// => false
//if you aren't sure what data type you ae going to be receiving , but you still need to compare them, make sure that you tell JavaScript  to convert the string to a number first and then compare.
//TopTip: Stick to comparing numerical values with the relational operators and you'll be golden.

//Conclusion
//JavaScript contains both equality and relational operators wheverver possible, and only comparing numerical values using the relational operators, and you'' avoid annoying errors that can be time consuming to troubleshoot!'

  
  



