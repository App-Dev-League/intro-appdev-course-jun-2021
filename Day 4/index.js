// Intro to variables

var a=10;
console.log(a)
console.log(typeof a)

var a=5;
console.log(a)

var b=3.14;
console.log(b)

var bool=true;
console.log(bool)

var string="Hello";
console.log(string);

//Concatenation

var string1="Hello";
var string2="World";
console.log(string1 + string2)

// Operators

var x=3;
var y=2;

console.log(x+y);
console.log(x-y);
console.log(x*y);
console.log(x/y);
console.log(x%y);
console.log(x**y);

// Assignment Operators

console.log(x)
x+=3;
console.log(x)
x-=3;
console.log(x)
x*=3;
console.log(x)
x/=3;
console.log(x)
x%=3;
console.log(x)
x**=3;
console.log(x)

// Comparison Operators
var x=3;
var y=2;

console.log(x==y)
console.log(x!=y)
console.log(x>y)
console.log(x<y)


// Logical Operators

console.log(x==2 && x==3) //false
console.log(x==2 || x==3) //true

var bool=true;

console.log(bool);
console.log(!bool);

// If-else statements

var x=3;
var y=2;

if(x<y){
  console.log("X is less than Y")
}
else{
  console.log("Y is less than X")
}


// Functions

function sayHello(){
  console.log("Hello")
}

sayHello();
sayHello();

function sayName(name){
  console.log("Hello " + name)
}

sayName("Bob")
sayName("Joe")
