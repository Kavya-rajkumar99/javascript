//var , let, const

// var c = "1"
// var c = "2"
// console.log(c);  // can redefine and redeclare

// let c = "1"
// var c = "2"
// console.log(c); Syntax error - Identifier c has already been declared
//let - can be redefined but not redeclared

//  const c = 1;
//  const c = 2; //Syntax error - Identifier c has already been declared
// c = 2; 
// console.log(c)// Type error - assignment to a constant variable
//const - cannot be redefined or redeclared

// function test()
// {
//     if(true)
//     {
//         const index = 1;
//         console.log(index);
//     }
//     //console.log(index);
// }
// test();
//console.log(index);

//copy by reference - objects
// const user={
//     name : "Kavya",
//     age1 : "23"
// }
// const user1 = user;
// user1.age = 24
// console.log(user)
// console.log(user1)

//Traditional way - copy by value;

// const user3 = Object.assign({grade:'A'},user)
// user3.age1 = 25;
// console.log(user)
// console.log(user3)

//Spread operator for objects - copy by value - concatenate properties of two objects
// const user1={
//     cousin : "Varnika",
//     age : "21"
// }
// const user2 = {...user,...user1,grade:"A"}
// user2.age1= 26

// console.log(user)
// console.log(user2)

//Copy by reference - arrays

// const arr = [1,2,3,4,5]
// const arr1 = arr;
// arr1.push(6);
// console.log(arr)
// console.log(arr1)

//spread operator - array - copy by value - concatenate two arrays

// const arr = [1,2,3,4,5]
// const arr2 = [10,20,30,40]
// const arr1 = [...arr,...arr2]
// arr1.push(6)
// console.log(arr)
// console.log(arr1)

// function sum(a,b)
// {
//     return a+b;
// }
// console.log(sum(10,20));
// console.log(sum(10))
// console.log(sum(10,20,30));
// console.log(sum(10,10,20,30));


//Rest parameters for functions
// function sum(...s)
// {
//     let sum =0;
//     for (var i of s)
//     {
//       sum= sum +i;
//     }
//     return sum;
// }
// console.log(sum(10,20));
// console.log(sum(10))
// console.log(sum(10,20,30));
// console.log(sum(10,10,20,30));

// function sum(s1, ...s)
// {
//     let sum =0;
//     for (var i of s)
//     {
//       sum= sum +i;
//     }
//     return sum;
// }
// console.log(sum(10,20));
// console.log(sum(10))
// console.log(sum(10,20,30));
// console.log(sum(10,10,20,30));

//Object destructure - traditional way

 const user={
    name : "Kavya",
    age1 : "23",
    grade : 'A',
    city : 'Chennai'
}
// const name = user.name;
// const age1 = user.age1;
// console.log(name,age1);

//Object destructure - ES6
// const {name,city} = user;
// console.log(name,city);

// const{name : uName,city:uCity} = user;
// console.log(uName,uCity);

//array destructure - traditional way

// const arr=[1,2,3,4,5]
// const name1 = arr[0];
// const name2 = arr[1];
// console.log(name1,name2);

//array destructure - ES6
// const arr=[1,2,3,4,5]
// const [ar1,ar2,ar3] = arr;
// console.log(ar1,ar2,ar3)

// const [ar1,ar2,ar3,ar4,ar5,ar6] = arr;
// console.log(ar1,ar2,ar3,ar4,ar5,ar6)

const student=[
    {name : "Kavya", id:1,age:23,city:"Kochi",address:{state:"Kerala",pin:'690101'}},
    {name : "Krithika", id:2,age:25,city:"Alleppey",address:{state:"Karnataka",pin:'789013'}},
    {name : "Varnika", id:3,age:26,city:"Dubai",address:{state:"UAE",pin:'743222'}}
]
// student.forEach(function(s){
//     console.log(s.name,s.city)
// })

//array of objects destructure
// student.forEach(function({name,city,address:{state,pin}}){
//     console.log(name,city,state,pin)
//    // console.log(address) - Error - address is not defined
// })

// student.forEach(function({name,city}){
//     console.log(name,city)
// })

// const[firstStudent,secondStudent]= student;
// console.log(firstStudent,secondStudent);
 //const company = "Zen";
// const hiring = "100";
// const zen ={
//     company : company,
//     hiring : hiring
// }
// console.log(zen)

//Object property shorthand
// const zen ={
//     company,
//     hiring,
// }
// console.log(zen)

//Template literals
// var comp = 'Zen'
// var arr=[1,3,4,5,7]
// var teacher={
//     name : 'Sitha'
// }
// var greetings = `Hi,
//                     Welcome to ${comp}.
//                     Get Hired in your dream company
//                     All you need is focus and dedication.
//                 Regards,
//                 ${comp}`

// console.log(greetings)
// const test = function(){
//     console.log("Hey")
// }
// test();
//Arrow functions
//syntax 1
// const test = () => {
//     console.log("Hey")
// }
// test();
//syntax2
// const test1 = () => console.log("Hey")
// test1();
// const test2 = (a) => a*a;
// console.log(test2(6));
//syntax3
// const test3 = _ => console.log("Parameterless")
// test3();
//syntax 4 - one parameter - no need of bracket
// const test4 = num => num*4;
// console.log(test4(3));

const arrayValues = [10,20,35,45,90]
arrayValues.forEach(a=>console.log(a))