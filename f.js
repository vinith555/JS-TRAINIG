// window.alert("my web");
// this is used to alert when reloaded the web
document.getElementById("h").textContent = `WORLD`;
// this is used to access a element by id
let x=10;
let y=5;
console.log(x+y);

console.log(`you are ${x+y} years old`);
// to display a value inside a stirng
console.log(typeof x);
//used to display the type of the variable

//accepting user input
let v;
document.getElementById("b").onclick = function(){
    v =document.getElementById("t").value;
    document.getElementById("hi").textContent = `Hello ${v}`;
    
}
// console.log(v);
// type conversion
let num;
document.getElementById("b1").onclick = function(){
    num = document.getElementById("t1").value;
    num=Number(num);
    console.log(num,typeof num);
}
// const key word
const pi=3.14;
let radius;
let cir;
// pi=3.34567; ----> if you try to access the const element it will show error
radius =100;
cir = 2*pi*radius;
console.log(`this is the cir  ${cir}`);
// Math functions
console.log(Math.PI);// gives the pi value
console.log(Math.E);// gives the e value
let vi=3.14;
vi=Math.round(vi);
console.log(vi);
console.log(Math.random());//it is function that return a random number between 0 to 1
let n=5;
let m=3;
m=Math.pow(n,m);
console.log(Math.sqrt(n));
console.log(m);
//random generator
console.log(Math.floor(Math.random()*6));// RETURN A RANDOM NUMBER BETWEEN 0 TO 5
document.getElementById("b2").onclick = function(){
    document.getElementById("random").textContent = `This a random number generator ${Math.floor(Math.random()*100)+1}`;
}
// condition statements
let age =20;
if(age>=18){
    console.log('you are an adult');
}// same as c and java
// chack boxes and radio buttons
const c=document.getElementById("in1");
const ra1 =document.getElementById("ra1");
const ra2 =document.getElementById("ra2");
const ra3 =document.getElementById("ra3");
const ch =document.getElementById("ch");

document.getElementById("submitcheck").onclick = function(){
    if(c.checked){
        ch.textContent = 'You are subscribed';
        if(ra1.checked){
            ch.textContent+=' to ra1';
        }else if(ra2.checked){
            ch.textContent+=' to ra2';
        }else if(ra3.checked){
            ch.textContent+=' to ra3';
        }
    }else{
        ch.textContent = 'You are not subscribed'; // checked is used to check whether it is checked or not
    }
}
// ternary operator
age = 10;
let msg = age >= 18 ? `you are a adult`:`you are not adult`;
console.log(msg);
//switch  same as a c
let day =4;
switch(day){
    case 1:
        console.log(`monday`);
        break;
    case 2:
        console.log(`tuesday`);
        break;
    case 3:
        console.log(`wednesday`);
        break;
    case 4:
        console.log(`thursday`);
        break;
    case 5:
        console.log(`friday`);
        break;
    case 6:
        console.log(`saturday`);
        break;
    default:
        console.log('sunday');
}
// String method mostly same as java
let user = `vinith`;
console.log(user.charAt(1));
console.log(user.indexOf(`i`));//returns the first occurance of the character
console.log(user.lastIndexOf(`i`));
user.trim();//used to trim the white spaces
console.log(user.toLocaleLowerCase());
console.log(user.toLocaleUpperCase());
console.log(user.startsWith(`v`));//returns boolean value based on whether the letter is present first or not
let ph = `123-345-567-789`;
console.log(ph.replaceAll("-","/"));
let fullname = 'vinith don';
console.log(fullname.slice(7,10));
let firstname = fullname.slice(0,fullname.indexOf(' '));
console.log(firstname);
let lastname = fullname.slice(fullname.indexOf(' ')+1,fullname.length);
console.log(lastname);
//method chaining
let username = `  vinith`;
username = username.trim().charAt(0).toLocaleUpperCase() + username.trim().slice(1).toLocaleLowerCase();
console.log(username);
//logical operator
// &&(and) ||(or) !(not)

//strict equally
//=== compares values and datatypes

//while loops
while(0){

}// same as c also it has do while also

//for loop
for(let i=0;i<10;i++){
    console.log(i);
}//same as c


// functions 
function happy(name){
    console.log(`Happy Birthday ${name}`);
}
happy(`vinith`);
function add (ri,le){
    let add = ri+le;
    return add;
}
let p = add(10,20);
console.log(p);

// variable scope
// any variable inside a function has a local scope
// variable declared outside a function has a global scope

// arrays

let fruit = ["apple","orange","banana"];
console.log(fruit[0]);
fruit[0] = "cocunut";// change the content
console.log(fruit[0]);

fruit.push("strwberi");// push element to the end
fruit.pop();//remove the last element
fruit.unshift("mango");//to add element at the begining
fruit.shift();//to remove the element at the begining
fruit.length;//returns the length of the arrary
fruit.sort();//sort the array
let arr = [];//creates an empty array
let arr1 = [10];//creates an empty array of size 10

// two d arrays
let twod = [[1,2,3],[4,5,6],[7,8,9]];
console.log(twod);

//spread operator
arr.push(1);
arr.push(2);
arr.push(3);
arr.push(4);
arr.push(5);
arr.push(6);
let m1 = Math.max(...arr);// ... sperates the element one by one
console.log(m1);

let veg = ["carrot","brinjal","potato","onion"];
let food = [...veg];//coping the array;
console.log(food);
let food1 = [...veg,...fruit];//add two arrays in one array
console.log(food1);

// rest parameters
function fridge(...files){// to accept multiple arguments
    console.log(files);
}
let file1 = "vfv";
let file2 = "sdvhb";
let file3 = "skhbihv";
let file4 = "wdkhdbwu";
fridge(file1,file2,file3,file4);

function sum(...numbers){
    let res =0;
    for(let numb of numbers){//---->iterates till the last value of the array numbers and same for string the num returns each element in the array
        res+=numb;
    }
    return res;
}
let tot = sum(10,20,30,40,50,60,70,80);
console.log(tot);
document.getElementById("d5").innerHTML = `This is innerhtml method`;// used the change the inner html content

//pasword generator;
let len = 5;
let smallchar = "abcdefghijklmnopqrstuvwxyz";
let bigchar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let nmm = "1234567890";
let special = "@#$%^&*!";
function randomPass(len,smallchar,bigchar,nmm,special){
    let allow = "";
    let password = "";
    allow += smallchar;
    allow += bigchar;
    allow += nmm;
    allow += special;
    for(let i=0;i<len;i++){
        let vg = Math.floor(Math.random()*allow.length);
        password+=allow[vg];
    }
    return password;
}
let res = randomPass(len,smallchar,bigchar,nmm,special);
console.log(res);
//call back functions
function hello (callback){
    console.log(`hello`);
    callback(); //executes good() only after executing the hello function
}
function good(){
    console.log(`good bye`);
}
hello(good);//passing function as a argument 

//for each method

let mi = [1,2,3,4,5,6,7,8];
mi.forEach(double); 
mi.forEach(display); // iterate to the element one by one
function display(mi){
    console.log(mi);
}
function double(ele,index,mi){ // it can take three arguments element ,current index and array
    mi[index] = ele *2;
}

//map method
 
let m2 = [1,2,3,4,5,6,7,8,9];
let m3 = m2.map(square); // same as foreach but it returns the m0dified array also and the callback function map need to return otherwise it is undrfined

function square(ele,inde,li){ 
    li[inde] = ele*ele;
    return li[inde];
}
console.log(m3);

//filter method
let fg = [1,2,3,4,5,6,7,8,9];
let fg1 = fg.filter(even); //filter the array based on the conditon provided in the callback function
function even(element){
    return element % 2 == 0; // it should return true or false to filter it
}

// reduce method

const price = [10,20,30,40,50,60,70,80,90];
const maxsum = price.reduce(maxele);

function maxele(accumelator,element){
    return Math.max(accumelator,element); // accumelator is the previos element and element is the next element 
}
console.log(maxsum);

//function expressions
setTimeout(function(){
    console.log(`time`); // to pass a entire function as a argument
},3000);

//arrow functions is a easy way to write a function expression that you use only one time
const kick = (name) => console.log(name); // it needs only argument and can be used in map,reduce,filter,for each as callback
kick(`vinith`);


//object = a collection of related properties and methods 

const person ={
    gg:'hello',
    junck:23456,
    hij:true,
    go:()=>{
        console.log(`hello world`);
    },
    lifi:function(){
        console.log(`junk ${this.junck}`);
    }
}
console.log(person.gg);
console.log(person.junck);
console.log(person.hij);
person.go();
person.lifi();

// this keyword
// it is used to acces the properties inside the object;
// this keyword cannot be used in arrow functions

// constructor

function car(engine,type,color,price){
    this.engine = engine,
    this.type = type,
    this.color = color,    //it is also known as constructor function
    this.price = price;
}

const car1 = new car("h1","ji","red",1234);  // used create mutiple objects
const car2 = new car("h2","ij","yellow",4321);
console.log(car1);

// class
// classes provides a more structured way to work with objects compared to tradional constructor functions

class product{
    constructor(name,price){
        this.name = name;
        this.price = price;
    }
    
    displayProduct (){
        console.log(`this is ${this.name}`);   // no need to mention function keyword
        console.log(`its price is ${this.price}`);
    }
}

const new1 = new product(`pant`,123); // morely same as the java
new1.displayProduct();

// static keyword

class math {
    static pl = 3.14159;
}

console.log(math.pl);// we can access the static key word by without creating object;

//inheritance
class Animals{
    constructor(na){
        this.na = na;
    }
    alive = true;
    eat(){
        console.log(`the ${this.na} is eating`);
    }
    sleep(){
        confirm.log(`the ${this.na} is sleeping`);
    }
}
class rabbit extends Animals{
    
    constructor(na){
        super(na);
        this.na = na;
    }
    
}
class dog extends Animals{
    constructor(na){
        super(na);                // parent child relation ship and same as java  parent reference and child object
        this.na = na;
    }
    run(){
        console.log(`the ${this.na} can run`);
        super.eat(); //super is also used to access the members and methods of the class
    }
}

const rab = new rabbit('rabbit');
const dogi = new dog('dog');
console.log(rab.na);
console.log(dogi.run());

// super keyword is used in classes to call the constructor or access the properties and methods of a parent
//          this = this object
//          super = the parent

// getters and setters

class rectangle{
    constructor(width,height){
        this.width = width;
        this.height = height;
    }

    set width(newwidth){
        if(newwidth>0){                  //set are used to set the limit for the input and get are used to get it
            this._width = newwidth;
        }
    }
    set height(newheigth){
        if(newheigth>0){
            this._height = newheigth; // the _is a prive property
        }
    }

    get width(){
        return this._width;
    }
    get height(){                   
        return this._height;
    }
}

const rct = new rectangle(20,30);
console.log(rct.height);

// destructing extract values from array and objects and then assign them to variable in a conveient way

let vo = 2;
let vp = 3;
[vo,vp] = [vp,vo]; // used to swap the values
console.log(vp);
let colors = ["red","gree","blue","whilte"];
[colors[0],colors[3]] = [colors[3],colors[0]]; //used to swap the array values;
[...extra] = colors;// used to coppy the array;
console.log(extra);

const per1 = {
    name:"vintih",
    job: "work",
    life : "student"
}
const {nu1,jo1,li1} = per1; // need to use const for object destructring
// copyin the properties of the object

// nested objects
const ob1 = {
    fullname: "vinith m s",
    time : 124,
    newobj : {
        he: "ghjk",
        kk : "fghjk",
        jj : 23456
    },
    ar3 : ["hell0","dcfvghj","dfghjk","ybhj"]
}
console.log(ob1.newobj.jj);
console.log(ob1.ar3[2]);

for(let property in ob1.newobj){
    console.log(ob1.newobj[property]); // iterating through the properties if we does not use [] for properties the js takes property as member so we can not access other properties
}

// nested object using class
class per3{
    constructor(name ,gender,...addrr){
        this.name = name;
        this.gender = gender;
        this.addrr = new add4(...addrr);
    }
}

class add4{
    constructor(street,hous,location){
        this.street = street;
        this.location = location;
        this.hous = hous;
    }
}

const itops = new per3("vinith","male","poocha","sankari",123);
console.log(itops.addrr);// objects inside the objects
console.log(itops.addrr.hous);

// Array of objects

const arr6 = [{ne:"apple",color:"red",type:"fruit"},
    {ne:"orange",color:"yellow",type:"fruit"},
    {ne:"brinjal",color:"voilet",type:"veg"},
    {ne:"potato",color:"gray",type:"veg"}];

console.log(arr6[1].ne);

arr6.push({ne:"ale",color:"ed",type:"fruit"});// to push an object

// arr6.pop(); pop the object
// arr6.slice(1,2); slice the objects

arr6.forEach((fruit) => console.log(fruit));

// all the methods of the arrays can be used

// sort method of an array;

const pp = [1,66,498,34,76,90,123,8,2,3,6,76];
pp.sort((a,b) => a-b);//by default sort in ascending order for number we need to provid function because by default it sorts the string
console.log(pp);// if it is b-a it sorts in desending order

arr6.sort((a,b)=> a.color.localeCompare(b.color));// localecompare is used to compare the string
console.log(arr6);// sort based on the color

// date objects
const date = new Date();

//  to dispaly the dates
console.log(date);

// closure function inside another function
 
function createcounter(){
    let cu = 0;
    function increasecount(){
        cu++;
        return cu;
    }
    function decreasecount(){
        cu--;
        return cu;
    }
    return {increasecount,decreasecount};// returning the object reference
}

const game = createcounter();
console.log(game.increasecount());
console.log(game.increasecount());
console.log(game.increasecount());

// formate currency

let number123 = 12345678900000;
number123 = number123.toLocaleString("hi-IN"); // to display the number in indian formate
console.log(number123);

// error handling

try{
    console.log(ghj);
}
catch(error){
    console.log(error);
}
finally{// it alsways execute regardless of the catch and try block
    // close files
    // close connections
    // release resources
    console.log('this is finally block');
}

//DOM
// Document object model object that represent the page you see in the web browser
//  and provides you with an api to interact with it
//  web brousers construct the dom when it loads the html document adn structure all the elments in a tree like representation java script can access the dom dinamically
// change the content and style of the web page

// Element selectors
const jg = document.getElementsByClassName("gg");
console.log(jg);
for(let hh of jg){
    hh.style.backgroundColor = "red";
}

const kar = document.getElementsByTagName("h3");

Array.from(kar).forEach((kar)=>{kar.style.backgroundColor = "yellow"}) // we canot directly access the html collections we need make them as array and then use it

document.querySelector(".gg"); // selecting the first element thst contains the class name
document.querySelector("h3"); //selecting the first element that contains the tag name

document.querySelectorAll("h3");  //select all the element that contains the tag name it is node list
// queryselectorall has a built in forech method we dont need to create the array for that

// dom navigation
// .firstElementChild

const fr = document.getElementById("fruits");
fr.firstElementChild.style.backgroundColor = "green";  // gets the first child of the unordered list
// .lastelementchild
fr.lastElementChild.style.backgroundColor = "gray";  // gets the child

// .nextelementsibling returns the next element that we have selected
// .previoselementsibling returns the previous element that we have selected

// .parenelement

const rr = document.getElementById("jk");
// rr.parentElement.style; returns the parent of the jk

const chi = fr.children;// returns the children of the unordered list
// it is also collection it does not have built in foreach method

// add and change html element

const cre = document.createElement("h1");
cre.textContent = "Hello this how we create new element";
// after creating we need to append it some where
document.body.append(cre);
// we can also remove the created html element

// mouse event
// .addeventlistner
const eve = document.getElementById("d10");
function chagecolor(event){
    event.target.style.backgroundColor = "red"; // the event argument is default provided by the brouser
}
eve.addEventListener("click",chagecolor); // the event listener has two argument event and the call back function


// key events
// keydown and keyup when hold on a element the keydown works and if we remove the key down works
// it also has arrow up and arrowdown and arrow right and arrowleft

// nodelist is a static collection of events and can be created by using queryselectorall() similar to an array

const ft = document.querySelectorAll(".ik");

ft.forEach((ft) => {
    ft.addEventListener("click",(event) =>{
        event.target.style.backgroundColor = "red";
        event.target.textContent = "NO";
    })
})

// class list is used to interact with list of classes

const cls = document.getElementById("cl");

cls.classList.add("enable"); //adding a class to the element and we can use remove method to remove the class from the element
console.log(cls);

// toggle is to add and remove the class
// replace(oldclass,newclass);
// contains() to check if the class is present or not


// call back hell

// call back functions inside the callback function is called the callback hell
// it also executes the function asynchronos manner
function task1(callback){
    setTimeout(() =>{console.log("task1 completed");
        callback();
    },2000);
    
}
function task2(callback){
    setTimeout(() =>{console.log("task2 completed") 
        callback();
    },2000);
    
}
function task3(callback){
    setTimeout(() =>{console.log("task3 completed")
        callback();
    },2000);
  
}
function task4(callback){
    setTimeout(() =>{console.log("task4 completed")
        callback();
    },2000);
    
}
task1(() =>{
    task2(()=>{
        task3(()=>{
            task4(()=>{
                console.log("all the task completed"); // this will mathe function execute one by one
            })
        })
    })
});
