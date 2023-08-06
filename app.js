// Value and Variables

// 1 how to make variable

// var myName = "Hasan";
// console.log(myName)

//                              Challenge time 1

// var _myName = "hasan" ✔
// var 12dateOfBirth = 22 - 8 - 2023;
// var dateOfBirth12 = 22 - 8 - 2023; ✔
// var _fatherName$ = "ashraf"✔
// var _fatherewgehnjrjmwerName$ = "ashraf"✔

//     Challenge time 2

// string ko apas mai plus kernay say concat hojata hai


// 1
// var num = 10;
// var num1 = "10";
// console.log(num + num1)

// string ko apas mai Minus kernay say Bug ata hai javascript error

// 2
// var num = 4;
// var num1 = "10";
// console.log(num - num1)


// string ko apas mai plus kernay say concat hojata hai

// 3
// var firstName = "hasan";
// var lastName = " ashraf";
// console.log(firstName + lastName)

// string ko apas mai plus kernay say concat hojata hai
// iska 1 tariqa es6 ka ye bi hai template literals kai sath

// 4

// var firstName = "hasan";
// var lastName = "ashraf";
// console.log(`${firstName} ${lastName}`)

// string ki Value ko apas mai Minus kernay say NaN aye ga is ki value ko minus keray gay to

// 5

// var firstName = "hasan";
// var lastName = " ashraf";
// console.log(firstName - lastName)


// true represent 1 and false represent 0

// //6
// console.log(true + true); // output will be 2
// console.log(true + false); // output will be 1
// console.log(false + true); // output will be 1
// console.log(false - true); // output will be -1


//                              Challenge time 3


// console.log(NaN === NaN) //out will be (false)
// console.log(Number.NaN === NaN) //out will be (false)
// console.log(isNaN(NaN)) //out will be (true)
// console.log(isNaN(Number.NaN)) //out will be (true)
// console.log(Number.isNaN(NaN)) //out will be (true)


//                              Challenge time 4

// 1

// what will be output 3 ** 3

// Ans ==> 27 the reason is 3 * 3 * 3 = 27

// 2

// What will be output, when we add a number and a string ?

//     Ans jab bi hum in dono ko apas mai milaye gay to concat hojaye ga

// var myName = "Hasan "
// var num = 66
// console.log(myName + num)

// 3
// write a program to swap two numbers 


// give ouput  a would be 10   b would be 5 



// first time
// var a = 5;
// var b = 10;

// var c = b; //output 10
// b = a      // output 5
// a = c

// console.log(a);
// console.log(b);
// // console.log(c);


// Second time
// var a = 10;
// var b = 5;

// var c = b; //output 5
// b = a; //output 10 
// a = c   // output 5  ;

// // console.log(c)
// console.log("The value of A is " + a)
// console.log("The value of b is " + b)


// Third time

// var a = 10;
// var b = 15;

// var c = b
// b = a
// a = c
// console.log(a)
// console.log(b)
// // console.log(c)



// 4
// write a program to swap two numbers Without third variable ?
//     a = 5 ;
// b = 10;

// a = b + a
// b = a - b
// a = a - b

// console.log("The value of A is " + a)
// console.log("The value of b is " + b)



// Again practice

// a = 5
// b = 10

// a = a + b
// b = a - b
// a = a - b
// console.log(a)
// console.log(b)


//                                 Challenge Time 5

// 1

// var year = 2020

// if (year % 4 === 0) {
//     if (year % 100 === 0) {
//         if (year % 400 === 0) {

//         } else {
//             console.log("the year " + year + " was not a leap year  ");
//         }
//     } else {
//         console.log("the year " + year + " is a leap year  ");
//     }
//     // console.log("the year " + year +  " a leap year ")
// } else {
//     console.log("the year " + year + " was not a leap year  ");
// }

// 2
// score = 0
// if (score = "") {
//     console.log(" we won a match ")
// } else {
//     console.log(" we loss a  match ")
// }

// 3
// var age = 18

// if (age <= 16) {
//     console.log("you are elegible to vote")
// } else {
//     console.log("you are not elegible to vote")
// }

// var age = 18
// console.log((age >= 18) ? "you are elegible to vote" : "you are not elegible to vote")




// one more example using if and else
//     var area = "triangle"
// var pi = 3.142, l = 5, b = 4, r = 3;

// if (area == "circle") {
//     console.log("the area of circle is " + pi * r ** 2)
// } else if (area == "triangle") {
//     console.log("the area of triangle is " + (l * b) / 2)

// } else if (area == "rectangle") {
//     console.log("the area of Rectangle is " + (l * b))

// } else {
//     console.log("Please enter a valid data  ")

// }

// var area = "triangle"
// var pi = 3.142, l = 5, b = 4, r = 3;


// switch (area) {
//     case "circle":
//         console.log("the area of circle is " + pi * r ** 2)
//         break;

//     case "rectangle":
//         console.log("the area of Rectangle is " + (l * b))
//         break;

//     case "triangle":
//         console.log("the area of triangle is " + (l * b) / 2)
//         break;

//     default:
//         console.log("Please enter a valid data")
// }




// var area = "rectangle"
// var pi = 3.142, l = 5, b = 4, r = 3;

// switch (area) {
//     case "circle":
//         console.log("The area of circle is " + pi * r ** 2)
//         break;
//     case "rectangle":
//         console.log("The area of Rectangle is " + (l * b) / 2)
//         break;

//     case "triangle":
//         console.log("The area of triangle is " + l * b)
//         break;

//     default:
//         console.log("please enter a correct number ")
// }




// /                           While Loop  









// 1
// var number = 5;
// while (number <= 15) {
//     console.log(number);
//     number++
// }

// 2
// var number = 0;
// while (number <= 10) {
//     console.log(number)
//     number++;
// }
// var maha = 0;

// 3
// while (maha <= 10) {
//     console.log(maha);
//     maha++;
// }


// 4

// var calc = 3;
// while (calc < 13) {
//     console.log(calc);
//     calc++;
// }
// /                         Do- While Loop  



// 1
// var num = 0;
// do {
//     console.log(num);
//     num++;
// } while (num < 10)


// 2
// var num = 19;
// debugger;
// do {
//     console.log(num);
//     num++;
// } while (num < 10);


//                                                  For Loop


// debugger;
// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }


//     Write a program table of(8, 9, 10) using for loop

// tableOf = prompt("Write Your Number What you want a table")
// for (let i = 1; i < 11; i++) {
//         document.write(`${tableOf} X ${i} = ${tableOf * i} </br>`)
//     }


// Functions

// 1 Traditional Function


// function sum() {
//     var num = a = 2; b = 8;
//     var total = a + b
//     console.log(total)
// };
// sum(12)


// 2 Calling function 

// function sum(x, y) {
//     var total = x * y
//     console.log(total)
// };
// console.log(sum(12, 5))



// 3 Fucntion paramater


// function subtraction(a, b) {
//     // var a = 15 ; b = 30 ;
//     var subtract = b - a;
//     console.log(subtract)
// }
// subtraction(5, 8)
// subtraction(2, 8)
// subtraction(1, 8)
// subtraction(4, 8)
// subtraction(6, 8)


// DEFAULT PARAMETERS


// var func = function (a, b = 5) {
//     return total = a + b
// }
// var sum = func(12,)
// console.log(sum)




// argurement 👍 thumsUp kai oper


 
//                                                        Function Expressions Definition
// function expression wo hota jis function ko ap banany kai bad kisi variable mai put ya store kara do funcExp kehlata hai
// var funcExp = sum(a, b)
// return a + b
// console.log(funcExp)

// sum(110, 550)

// function multiply(a, b) {
//     var multi = a * b;
//     console.log(multi)
// }

// var funcExp = multiply(12, 56);

// return key word in function mai hamsha apko function expression bana na paray ga

// function myFunc(a, b) {
//     return total = a + b
//     // console.log(total)
// }
// var sum = myFunc(12, 45);
// console.log(sum)


// function divideFunc(a, b) {
//     // var a=21, b=12;
//     return a + b
//     // var total = a + b;
//     // console.log(total)
// }

// var total = divideFunc(100, 500)
// console.log(`the sum of two number is ${total}`)


//                                             Anonymous Function
// Definition
// Anonymous Function wo function wo function hota hai jiss ka koi name nhi hota us ko hamy 1 variable mai store kerana aparta hai jis ki madad sai hum us ko call kera saktay hai.


// First time Practice
// var nameOfFunc = function (a, b) {
//     return a * b
// }
// console.log(nameOfFunc(12, 5));
    
//     Second time Practice

// var anonymousFunc = function (a, b) {
//     return a + b
// }

// console.log(anonymousFunc(500, 120));
    
//     Third time Practice

// var functionEx = function (a, b) {
//     return a - b
// }
// var sum = functionEx(50, 25);
// // console.log(fun(50-25));
// console.log(sum);


// Fourth time Practice

// var func = function (a, b) {
//     return a - b
// }

// var sum = func(41, 25)
// console.log(sum)

// var x = "muhammad hasaan"
// console.log(x)

// function myNaem(hasan) {
//     x = "hasan"
//     console.log(x)
//     x = "ashraf"
//     console.log(x)
// }
// myNaem("ahsan")


// function calc(a, b) {
//     var total = a + b;
//     console.log(total)
// }
// calc(12, 45)

// const calc = function (a, b) {
//     return a + b
// }
// var sum = calc(12, 21)
// console.log(sum)

// const calc = function (a, b) {
//     return a + b
// }
// var sum = calc(12, 21)
// console.log()
// console.log(sum)

// funcExp = function (a, b) {
//     return a + b
// }
// const functionExp = funcExp(12, 78)
// const functionExp1 = funcExp(1212, 78)
// const functionExp2 = funcExp(12, 898)
// const functionExp3 = funcExp(12, 78)
// var sum = functionExp + functionExp1 + functionExp2 + functionExp3;
// console.log(`the sum of four number is ${sum}`)




//                  what is EcmaScript Es6 EcmaScript ka 6 edition in 2015


// let VS const var

// var ka function scope rehta hai yani global  var humay kahi bi easy li mil jaye ga function kai andar ya kahi kisi console mai
// Example

// var firstName = " Muhammad Hasan"
// console.log(firstName);

// function bioData() {
//     if (true) {
//         var lastName = " muhammad ashraf"
//         console.log(" inner " + firstName);
//         console.log(" inner " + lastName);

//     }
//     console.log(" outer " + lastName);
// }
// bioData()

// console.log(num)     //output  // undefined 
// var num = 12
// console.log(num)  // output // 12

// func = function (a, b) { // in parameter (a,b) this is parameter 
//     console.log(num)
// }
// func() //in Arguement func(1,2) this is Arguement// 


// let and const ka scope block scope hota hai ye apko kurli braces se bahar nhi milay ga
// Example

// --------------------LET


// let firstName = " Muhammad Hasan"
// console.log(firstName);

// function bioData() {
//     if (true) {
//         let lastName = " muhammad ashraf"
//         console.log(" inner " + firstName);
//         console.log(" inner " + lastName);

//     }
//     console.log(" outer " + lastName);
// }
// bioData()

// let num = 1123131
// func = function (a, b) {
//     if (num === 1123131) {

//         console.log(num) // output // 12
//     }
// }
// func()

// console.log(num) // output Num is not defined

// num = 25;
// console.log(num) // output //25



// ------------------------------------------------------CONST

// const ka function ka block scope hota hai ye bhi kyrli braces sai bahr nhi milta and const ko aap reinitiliaze nhi ker saktay
// Example

// let firstName = " Muhammad Hasan"
// console.log(firstName);

// function bioData() {
//     if (true) {
//         let lastName = " muhammad ashraf"
//         console.log(" inner " + firstName);
//         console.log(" inner " + lastName);

//     }
//     console.log(" outer " + lastName);
// }
// bioData()

// func = function (a, b) {
//     const num = 1123131
//     if (num === 1123131) {

//         console.log(num) // output // 12
//     }
// }
// // console.log(num) // output //25
// func()

// console.log(num) // output Num is not defined

// num = 25;

// TEMPLATE LITERALS

// write a program a to print table for given numbers[8, 9, 10] using template literals and for loop

// var tableOf = 8;
// for (let i = 1; i < 11; i++) {
//     console.log(`${tableOf} X ${i} = ${tableOf * i} `);
// }

//                     FAT ARROW FUNCTION

// const myFunction = (a, b = 6) => {
//     return ` thhe multiplication of two number ${a * b}`
// }
// var multi = myFunction(125, 1254)
// console.log(multi)


// TRADITIONAL FUNCTION

// function multiplication(a, b = 25) {
//     var a = 12; b = 25;
//     var total = a * b;
//     console.log(total)
// }
// multiplication(12, 35)

// MORE SHORTER CODE IN ARROW FUNCTION

// const sum = (a, b = 25) => `The Sum of 2 number is  ${a + b}`

// var funcInVar = sum(12);
// console.log(funcInVar)



// ------------------------------------------------6 ARRAYS IN JAVASCRIPT

// How to make array
//     in array hum multiple types ka values stores kersakty hain jaisy kai boolean, falsy values, and string, number and Etc.

//         Example:

// var arr = ["ahsan", 12, true, undefined];

// first index ya element ko[lower index]/ [lower boundary] kehtay hai 
// Last index ya element ko[Upper index]/ [upper boundary] kehtay hai 

// index no hamesha 0 sai start hota hai.


//                        TRAVERSAL OF AN ARRAY:

// var arr = ["ahsan", 12, true, undefined, "ahsan", 12, true, undefined, "ahsan", 12, true, undefined, "ahsan", 12, true, undefined, "ahsan", 12, true, undefined, "ahsan", 12, true, undefined, "ahsan", 12, true, undefined, "ahsan", 12, true, undefined, "ahsan", 12, true, "MAHA",];
// console.log(arr.length - 1)



// using for loop 

// var arr = ["ahsan", 12, true, undefined, "ahsan", 12, true, undefined, "ahsan", 12, true, undefined, "ahsan", 12, true,];
// // console.log(arr.length - 1 )

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }

// ----------------------- _________________________________ For IN loop

// for inloop hamesha hamay index no return kerta hai only index no
// EXAMPLE:
// var arr = ["ahsan", 12, true, undefined, "ahsan", 12, true, undefined, "ahsan", 12, true, undefined, "ahsan", 12, true,];

// for (let elements in arr) {
//     console.log(elements)
// }


// ----------------------- _________________________________ For of loop

// for ofloop hamesha hamay elements ya data return kerta hai.only elements

// EXAMPLE:
// var arr = ["ahsan", "hassan", "mukhtar", "ashraf"];

// for (let elements of arr) {
//     console.log(elements)
// }
    


//     ======================================================== ForEach()
//     ye jab start hota hai to poora end tak hi chalta hai matlab apna kaam pora kerta hai

// for each loop mai humay ye teno cheezain milti hai
// 1. elements
// 2. index
// 3. array

// var arr = ["ahsan", "hassan", "mukhtar", "ashraf"];

// arr.forEach(function (element, index, array) {
//     console.log(` The whole array name is == ${element}, the whole array index no is == ${index} and the whole array is === ${array}`)
// })
        
//         AGAIN PRACTICE for Each loop
        
//          var arr = ["ahsan", "hassan", "mukhtar", "ashraf"];
// arr.forEach(function (element, index, array) {
//     console.log(element, index, array)
// }
// );

// for each with Fat arrow function 
            
//              var arr = ["ahsan", "hassan", "mukhtar", "ashraf"];
// arr.forEach((elements, index, array) => {
//     console.log(elements, index, array)
// });

//                 Again practice

// var arr = ["ahsan", "hassan", "mukhtar", "ashraf"];
// arr.forEach((elements, index, array) => {
//     console.log(elements)
// })

// for Each with TRAditional function 

//    var arr = ["ahsan", "hassan", "mukhtar", "ashraf"];
// arr.forEach(function (element, index, array) {
    //     console.log(element)
// })


//                                              Array Methods
//              1 indexOf()

// indexOf Method hamesha number bata ta hai [ye hamesha search forward chalta hai] 

// var arr = ["ahsan", "hassan", "mukhtar", "ashraf"];
//    console.log(arr.indexOf("mukhtar"))

   //              2 lastIndexOf()

   // laIndexOf Method hamesha number bata ta hai [ye hamesha search backward chalta hai] 
   
   //    var arr = ["ahsan", "hassan", "mukhtar", "ashraf"];
   //    console.log(arr.lastIndexOf("mukhtar"))


   //              3 includes()
   
   //   includes Method hamesha boolean return kerta hai [true or False] 

//    var arr = ["ahsan", "hassan", "mukhtar", "ashraf"];
//    console.log(arr.includes("mukhtar"))


//    //              4 find()
   

//    var arr = ["ahsan", "hassan", "mukhtar", "ashraf"];
//    console.log(arr.find("hassan"))


   //              4 findIndex()
   

//    var arr = ["ahsan", "hassan", "mukhtar", "ashraf"];
//    console.log(arr.findIndex("hassan"))

// const ages = [3, 10, 18, 20];

// function checkAge(age) {
//   return age > 18;
// }

// function myFunction() {
//  ages.find(checkAge);
// }
// console.log(checkAge(19))

// const age = [12,15,18,20]

// function checkages(age){

// // if(age > 11)
// return age > 11; 
// age.find(checkages)
// }
// console.log( checkages(18))


// const age = [12,15,18,20]

// function checkages(age){

// // if(age > 11)
// return age > 11; 
// age.findIndex(checkages)
// }
// console.log( checkages(18))


// 🏹 wrong


// find , findIndex and sort ko kerna hai and practice kerni hai



   //                        4 Push()
   
   //          Push Method hamesha add kerta hai back sai  

   // var arr = ["ahsan", "hassan", "mukhtar", "ashraf"];
   // console.log(arr.push("mukhtar"))
   // console.log(arr)


   //                         5 Pop()
   
   //          pop Method hamesha remove kerta hai back sai [

   // var arr = ["ahsan", "hassan", "mukhtar", "ashraf"];
   // console.log(arr.pop())
   // console.log(arr)
   
   //                        6 unshift()
   
   //              unshift Method hamesha add kerta hai front sai  

   // var arr = ["ahsan", "hassan", "mukhtar", "ashraf"];
   // console.log(arr.unshift("hafiz"))
   // console.log(arr)


   //                        7 shift()
   
   //              shift Method hamesha remove kerta hai front sai  

   // var arr = ["ahsan", "hassan", "mukhtar", "ashraf"];
   // console.log(arr.shift())
   // console.log(arr)


   //                        8 shift()
   
   //              shift Method hamesha remove kerta hai front sai  

   // var arr = ["ahsan", "hassan", "mukhtar", "ashraf"];
   // console.log(arr.shift())
   // console.log(arr)


   //---------------------------------- Challenge Time 8

   //             // Question 1 ✔

   // const months = ["jan","feb","mar"]

   // console.log(months.push("Dec"))
   // console.log(months)
   
   
 //                // Question 2 ✔

 // 12 Splice();
// ye minus kerta hai 
//  const months = ["jan","feb","mar"]

//    console.log(months.splice(months.lenght ,1, 2,))
//    console.log(months)


 // 12 Splice();
// ye Replace bi kerta hai

//  const months = ["jan","feb","mar"]

//    console.log(months.splice(2,1,"March"))
//    console.log(months)


// 12 Splice();
// ye Replace bi kerta hai

//  const months = ["jan","feb","mar"]

//    console.log(months.splice(2,1,"March"))
//    console.log(months)




//                      map (),filter(),reduce() ----------methods

//       map practice
// let arr = [8,15,25,35];

// const newArr = arr.map((curElem, )=> {
   // return curElem > 10
   // })
   // console.log(arr)
// console.log(newArr)


//      again map practice
// let arr1 = [8,15,25,35];

// const newArr2 = arr1.map((curElement,index,array)=> {
   // return `index No = ${index} and the value ${curElement} belong to ${array}`
   // })
   // // console.log(arr1)
   // console.log(newArr2)
   
   
   
   //      again map practice
   // let array = [12,1,25,35,]
   
   // const allArray = array.map((curElement,index,array)=> {
      //    return `the index of ${index} value is ${curElement} belonged to this array ${array}`
      // })
      // // console.log(array)
// console.log(allArray)



//           for Each Dont return New Array if you can do this thing so you see the result : undefined

// let arr1 = [8,15,25,35];

// const newArr2 = arr1.forEach((curElement,index,array)=> {
// return `index No = ${index} and the value ${curElement} belong to ${array}`
// })
// // console.log(arr1)
// console.log(newArr2)

 


//                                      Challenge Time_9


// Question 1

// Find The Square root of each elements in array ?

// const squareRootNum =  [9,25,36,49,64,81,100]

// const squareRoot = squareRootNum.map((curElem)=>{
   //     return  Math.sqrt(curElem)
// })
// console.log(squareRoot)
// console.log(squareRootNum)


// Question 2

// multiply Each element by 2 and return only those elements which are greater than 10

// practice question no 2 ------------Challenge time--------- 9

// let arr = [2, 5 , 8, 6,7]

// const multArr =  arr.map((curElem)=>{
//    return curElem*2
// }).filter((curElem)=>{
//   return curElem > 10
// })
// console.log(arr)
// console.log(multArr)


// again practice question no 2 ------------Challenge time--------- 9

// let numbers = [1,2,3,4,5,6,7,8,9];

// const  resultNum  = numbers.map((curElem)=>{
   //       return curElem * 2
   // }).filter((curElem)=>{
      //       return curElem > 10
      // })
      // console.log(resultNum);



// again practice in shorter Way question no 2 ------------Challenge time--------- 9

// let numbers = [1,5,6,8,9];

// const  resultNum  = numbers.map((curElem)=> curElem * 2).filter((curElem)=> curElem > 10).reduce((accumulator,curElem)=> accumulator += curElem)
   
//       console.log(resultNum);
      
      
      // let numbers = [1,5,6,8,9];

      // const allNumbers = numbers.reduce((accumulator, curElement)=>{ return accumulator += curElement})
      
      // console.log(allNumbers)

      // let num = [1,5,6,8,9,]

      // const result = num.map((curElem)=> {
      //    return curElem*2 
      // }).filter((curElem)=>{
      //    return curElem > 10
      // }).reduce((accumulator,curElem)=>{
      //    return accumulator += curElem
      // })
      // console.log(result)


      //                                             Array in Array 


      // let arrayInArr = [
      //    ['zone_1','zone_2'],
      //    ['zone_3','zone_4'],
      //    ['zone_5','zone_6'],
      //    ['zone_7',['kjsflkvjlksf'],'zone_8']
      // ] 
      // const result =  arrayInArr.reduce((accumulator,curElem)=>{
      //    return accumulator.concat(curElem)
      // })
      // console.log(result)
      // // console.log(arrayInArr)


      //                       ___________________ STRINGS IN JAVASCRIPT ____________________


      // TOPIC IS CLEARED BY ME
      // 1 BACKSLASH ESCAPE CHARACTER 

      // CODE                       RESULT                              DESCRIPTION 
      // \''                          ''                               SINGLE QUOTE            
      // \""                          ""                               DOUBLE QUOTE            
      // \                            \                                BACKSLASH           



      //QUESSTION:
      //  HOW I GENERATE STRING WITH STRING CONSTRUCTOR ?

      // // RESULT :

      // with single quote
      // let str =new String  ('Hasan')
      // console.log(typeof typeof (str))


      // with double quote string

      // let str ="Hasan"
      // console.log(typeof  (str))
      
      // -----------------------------FINDING A STRING IN A STRING   =======================
      
      
      //                                              with indexOf() method 
      // let str ="My name is Hasan"
      // console.log(str.indexOf('Hasan'))
      
      //                                              with lastIndexOf() method 
      // let str ="My name is Hasan"
      // // console.log(str.lastIndexOf('Hasan')) 
      
      
      // -----------------------------  SEARCHING FOR A STRING IN A STRING    =======================
      
      //                                              with search() method 


      // let str ="My name is Hasan"
      // const newS = str.search("Hasan")
      // console.log(newS) 


      //  -----------------------------  EXTRACTING STRING PARTS   =======================

      // 1                                          WITH SLICE ( START,END ) METHOD


   // let nameOfFruits = "apple, banana,mango"; 
   // let strFruits = nameOfFruits.slice(6,13)
   // console.log(strFruits)


   // let nameOfFruits = "apple, banana, KIWI, mango"; 
   // let strFruits = nameOfFruits.slice(7,-2)
   // console.log(strFruits);
   

      //                                          Chalenge Time___10

      // let para = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci pariatur aliquam inventore quis recusandae nesciunt et placeat rerum cupiditate quo expedita iste consectetur velit quos sunt, similique laborum asperiores ea sed in ratione labore debitis. Saepe necessitatibus similique quisquam blanditiis sequi asperiores sapiente quae sunt fugit facilis unde nobis dicta magnam quos laboriosam aspernatur ab nisi quis neque repudiandae tenetur voluptate, a excepturi laudantium. Esse aperiam amet perferendis deserunt omnis dignissimos dolores quo fugiat, debitis officia quia ipsum nemo doloribus commodi veniam blanditiis! Voluptates, dolorum itaque, nam quos minima eaque nisi laborum, quisquam praesentium animi quibusdam placeat. Quia quo ad ullam voluptatibus explicabo illum dignissimos perspiciatis dolore iste consequuntur, quidem aspernatur labore delectus et itaque nemo aperiam hic quos rerum. Atque, voluptas dolore! Ab exercitationem mollitia doloribus id minima autem dolorum? Cum ad, nobis consequuntur ipsa consequatur, eos iste modi, nam nemo placeat dolorum. Quae adipisci fugiat possimus blanditiis id quaerat laborum, nisi deleniti odit consequuntur eveniet illum culpa odio quisquam quo voluptates ducimus doloribus nobis aperiam temporibus est, necessitatibus ipsum ex distinctio! Ad tenetur quod, ex incidunt modi omnis id consequuntur delectus molestiae nostrum, beatae a harum provident! Perferendis quod exercitationem delectus ipsam ab perspiciatis eligendi sit velit corporis illo quis iusto rerum et, amet laboriosam, alias iste voluptate aliquam porro animi eum dolorum fugiat. Nihil dolores explicabo, corporis facilis natus nam fugit soluta laborum ut doloribus pariatur fugiat laudantium dolorem odit. Non sed sequi soluta quam saepe fugiat minima, laborum, numquam eveniet praesentium beatae doloribus officia? Tempora voluptates exercitationem consectetur similique, alias nobis pariatur illo, ipsum quisquam optio natus qui possimus, dolor aliquam animi beatae atque commodi autem debitis. Unde, non error tenetur maiores fugit laborum debitis modi repudiandae quasi quaerat labore suscipit doloremque corrupti laudantium, in totam doloribus rerum optio a aliquid, harum velit? Magni, perferendis laudantium."

      // const paraInStr = para.slice(0,280)
      // console.log(paraInStr.length)
      // console.log(paraInStr)
   
   //2                                          WITH SUBSTRING ( START,END ) METHOD       
   // ye negative values nhi leta
   
   
   // let nameOfFruits = "apple, banana,mango"; 
   // let strFruits = nameOfFruits.substring(0,7)
   // console.log(strFruits)
   
   
   
   // 3                                          WITH SUBSTR ( START,LENGHT ) METHOD              
   
   // ye negative values nhi leta
   // back sai bhi chala sakty hai 
   
   //    let nameOfFruits = "apple, banana,mango"; 
   // let res = nameOfFruits.substr(0,4)
   // console.log(res)



   //    let nameOfFruits = "apple, banana,mango"; 
   // let res = nameOfFruits.substr(-10)
   // console.log(res)


   /// Replace() Method

// let message = `i LOve You`
// let love = message.replace('LOve','Hate')
// console.log(love) 



// let message = `i Am hasan my name hasan`
// let correct = message.replace('hasan','Hasan')
// console.log(message) ;
// console.log(correct) ;



/// replaceAll() Method

// let message = `i Am hasan my name hasan`
// let correct = message.replaceAll('hasan','Hasan')
// console.log(correct) ;
// console.log(message) ;


//                                         Extracting String Character 

// There Are three methods for extracting string chracters :

//1 charAt()
//2 charCodeAt(Position)
//3 Property Access [ ]



//                                              charAt() Method


// let myName = `My Name is Muhammad Hasan`
// console.log(myName.charAt(20))


//                                              charCodeAt() Method


// let myName = `My Name is Muhammad Hasan`
// console.log(myName.charCodeAt(24))



// Challenge Time___11
 //   it gives 0 to 65535 between integer  

//  let myName = `My Name is Muhammad Hasan`
//  let Str = myName.length -1;
// console.log(Str);
// console.log(myName.charCodeAt(Str));


// Again practice challenge time 11

// let bio = `hasan`;
// const tLength = bio.length -1
// console.log(tLength)
// console.log(bio.charCodeAt(tLength))


//                                          Property Access 

// let str = "Hello World"
// console.log(str[4])



//                                       Other useful Methods
//1 toUpperCase Method
//2 tolowerCase Method
//3 concat Method
//4 trim Method
//5 Split Method



//                                         toUpperCase Method

// let name= `hasan`
// console.log(name.toUpperCase())

//                                        tolowerCase Method

// let name= `HASAN`
// console.log(name.toLowerCase())

//                                          concat Method

// let name= `HASAN`
// lName =` ashraf `
// console.log(name.concat(lName))



//                                            trim Method

// let message= "  Hello World ! "
// // console.log(message)
// console.log(message.trim())


//                                            Split Method    

//  split  hamesha  strig ko split kernay ka baad array form mai return kery ga 

// let message= "Hello!"
// // console.log(message)
// console.log(message.split(""))


//                                           Section 8  Date and Time   
// What we will See
// 1 Date Methods (Get and Set )
// 2 Time Methods (Get and Set )


// There are 4 way to create Date method

//                                                 new Date()

// const getDate = new Date();
// console.log(getDate)


//                                                   toLocaleStrng
// const getDate = new Date();
// console.log(new Date().toLocaleString());

//                                                        Forms
// let date = new Date()
// console.log(date)
// console.log(date.toString())
// console.log(date.toLocaleString())
// console.log(date.toLocaleDateString())
// console.log(date.toLocaleTimeString())

//                                                     Date > NOw
// let d = Date.now( )
//    console.log(d)

// var d = new Date(2023,7,22,6,30,22,0)
// console.log(d) // same Result Aya ga ✔
// console.log(d.toString()) // in dono ka
// console.log(d.toLocaleString())
// console.log(d.toLocaleTimeString())
// console.log(d.toLocaleDateString())



// var d = new Date(2021,0,5)
// console.log(d) // same Result Aya ga ✔
// console.log(d.toString()) // in dono ka
// console.log(d.toLocaleString())
// console.log(d.toLocaleTimeString())
// console.log(d.toLocaleDateString())



// isko agar sirf year hum dengay to ye apna 1 jan 1970 ka date and time la kay dega
//Example

// var d = new Date(2021)
// console.log(d) // same Result Aya ga ✔
// console.log(d.toString()) // in dono ka
// console.log(d.toLocaleString())
// console.log(d.toLocaleTimeString())
// console.log(d.toLocaleDateString())

//                                                     Date Methods
// let d = new Date ()
// console.log(d) 
// console.log(d.toLocaleString()) 
// console.log(d.getFullYear()) 
// console.log(d.getMonth()) 
// console.log(d.getDate()) 
// console.log(d.getDay()) 


// How To Set the individual value of Date Methods

// let d = new Date ()
// console.log(d.setFullYear(2023,5,1))
// console.log(d.setMonth(7))
// console.log(d.setDate(2))
// console.log(d.toLocaleString())



//                                                     Time Methods


// let d = new Date ()
// console.log(d) 
// console.log(d.toLocaleString()) 
// console.log(d.getTime()) 
// console.log(d.getHours()) 
// console.log(d.getMinutes()) 
// console.log(d.getSeconds()) 


// How To Set the individual value of Time Methods

// let d = new Date ()
// console.log(d.setTime(3))
// console.log(d.setHours(3))
// console.log(d.setMinutes(2))
// console.log(d.setSeconds(12))



//                                                  Practice


// setTime = () =>{
//    let d = new Date ().toLocaleTimeString()
//    const head = document.querySelector("#click")
//    head.innerHTML= d
//    // console.log(d)

// }




// (function setTime(){
//  setInterval(()=>{
//    Time.innerHTML = d
//     console.log(new Date().toLocaleTimeString())
//  }, 1000)
// })();

//                                                 Section 9 JAVASCRIPT MATH OBJECTS 

// more than 10 method are here 
//1 Math.PI

// console.log(Math.PI)

//2 Math.round

// let has = 31.63;
// console.log(Math.round(has))

//3 Math.pow

// let a = 3;
// console.log(Math.pow(2,3))
// console.log(2**3)

//4 Math.Sqrt

// console.log(Math.sqrt(25));
// console.log(Math.sqrt(36));
// console.log(Math.sqrt(49));
// console.log(Math.sqrt(64));
// console.log(Math.sqrt(81));
// console.log(Math.sqrt(100));

// 5 Math.Abs

// console.log((-25));
// console.log(Math.abs(-25));

// // 6 Math.ceil

// console.log(Math.ceil(245.36));

// 7 Math.floor

// let num = 246.5
// console.log(Math.floor(num));


// 8 Math.min

// let num = "246,12,25,-250"
// console.log(Math.min(246,12,25,-250,5));


// 9 Math.max

// console.log(Math.max(246,12,25,-250,5));


// 10 Math.random

// console.log(Math.floor(Math.random()));
// console.log(Math.ceil(Math.random()));


// 11 Math.trunc

// console.log(12.256);
// console.log(Math.trunc(-12.256));


//                                     Section 10 Dom In JavaScript


// Dom means Document Object Model
// Bom means Browser Object Model
// const goBack = () =>{
// // window.location.href="https://www.youtube.com/";
// window.history.back(());
// }



//                                               Dom  Navigation

