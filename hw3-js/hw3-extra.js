/*Computers are playing an increasing role in education. Write a program that will help an elementary school student learn multiplication. Use Math.random to produce two one-digit integers (NO DECIMALS) from 0 to 9. It should then display a question such as:

How much is 6 times 7?

The student then types the answer into an input box. Your program checks the student's answer. If it is correct, display the message "Very good!" in a text area or another part of the page, and then prompt (ask) the user to see whether they wish to continue by using the confirm or prompt statement. If true, then generate a new question. If not, then exit the script and do not present another question - you can present a "goodbye and thanks" message.

If the answer to the multiplication question is wrong, display the message "No. Please try again." directly on the page in a textarea or another part of the page, and let the student try the same question again repeatedly until the student finally gets it right.

A separate function should be used to generate each new question. This function should be called once when the script begins execution and each time the user answers the question correctly. Note that whether the answer is correct or not, you should clear the answer box after the question is answered.


*/
//function getNums(){
  num1 = Math.floor(Math.random() * 11)
  console.log(num1)
