//I was inspired by Berkant Kaya in the notes
//https://www.youtube.com/@bk.berkantkaya

// alert("Welcome to Web Site!")

console.log("Selamlar!") ;

// document.write("Yusuf Türlü")



// let i = 0 ;
// for(i ; i<=10 ; i=i+2) {
//     console.log("10'a kadar ikişerli sayılar : "  + i) ;
// }

// document.getElementById("text").innerHTML = "Merhabalar" //check the text on the web site




// let name = "Yusuf"
// let surname = "Türlü"
// let age = 19 

// let info = {
//     name: name,
//     surname: surname,
//     age: age
// }

// console.log(info.name) ;
// console.log(info) ;




// const func = () => {
//     console.log("Function Called") ;
// }

// func() ;




// const sum = (a,b) => {
//     return a + b ;
// }

// console.log(sum(5, 7)) ;




// function hello () {
//     console.log(this.name) ;
// }

// let obj = {
//     name: "Yusuf",
// }

// hello.call(obj) ;




// let fruits = ["banana","apple"] ;
// let vegetables = ["cucember","tomato"] ;

// console.log(fruits.concat(vegetables)) ;

// console.log(fruits.concat(vegetables).splice(1,2)) ;
// console.log(fruits.concat(vegetables).slice(1,2)) ;





// let cars = ["Fiat","Devrim","TOGG"]

// let filt = cars.filter(car => car == "TOGG") ;

// console.log(filt) ;



// let numbers = [1,2,3,4,5,6,7,8,9,10] ;

// let double = numbers.filter(double => double % 2 == 0) ;

// console.log(double) ;



// let numbers = [1,2,3,4,5,6,7,] ;

// let power = numbers.map(int => int*int) ;

// console.log(power) ;



// let numbers = [1,2,3,4,5,6,7,8,9,10] ;

// let sumWithTwo = numbers.map(int => int + 2) ;

// console.log(sumWithTwo) ;



// let numbers = [10,20,30,40,50] ;
// let sumOfArray = numbers.reduce((num1,num2) => num1 + num2 , 0);

// console.log(sumOfArray) ;
// 0 at the end of the second line its the begining value.



// var object = {
//     name: "Bülent",
//     age: 27,
//     city: "İstanbul",
//     abilities : {
//         programming: "JavaScript",
//         writing: "English",
//         speaking: "Turkish"
//     },
//     greet: function() {
//         console.log("Hello, My name is " + this.name + ". I'm " + this.age + " years old.");
//     },
// }

// console.log(object.greet) ;
// console.log(object.greet()) ;
// console.log(object.abilities) ;
// console.log(object.abilities.speaking) ;





// function Student() {
//     this.name = "Yusuf" ;
//     this.id = 345 ;
// }

// const student = new Student() ;

// console.log(student) ;
// console.log(student.id)





// function Book(bookName,Page) {
//     this.bookName = bookName;
//     this.Page = Page ;
// }

// let book1 = new Book("İçimizdeki Şeytan", 267) ;
// let book2 = new Book("Küçük Şeyler", 72) ;

// console.log(book1) ;
// console.log(book2) ;





// var defults = {
//     theme : "Dark" ,
//     fontSize : "16px" ,
// }

// var userSet = {
//     fontSize : "18px"
// }

// var userSettings = {...defults,...userSet} ;

// console.log(userSettings) ;




// var Class = {number: 2 , lesson: "Math"} ;
// for(let key in Class) {
//     console.log(key + " : " + Class[key]) ;
// }




// var Soldier = {} ;
// Object.defineProperty(Soldier,"division", {
//     value: "Infantry",
//     writable: false, // the value can't changed
//     configurable:false , // the value can't deleted and can't configurable
// }) ;

// Soldier.division = "Airborne Division" ; // this will not change the value

// console.log(Soldier.division) ; 


// var userName = {name:"Joseph"} ; 
// Object.freeze(userName) ;

// userName.name = "John" ;

// console.log(userName.name) ; // will output "Joseph" not "John"



// var userName = {name : "Kaan"} ;
// Object.seal(userName) ;

// userName.name = "Yusuf" ;

// console.log(userName.name) ; // will output "Yusuf" not "Kaan"



// let famous = {branch: "math" ,person: "Cahit Arf"} ;

// console.log(Object.keys(famous)) ;

// console.log(Object.values(famous)) ;

// console.log(Object.entries(famous)) ;



// JSON.stringify() you can change a object as json
// JSON.parse() you can change a json as object

// let person = {name: "John", age: 30, city: "New York"} ;
// let personJSON = JSON.stringify(person) ;
// console.log(personJSON) ;

// let personObj = JSON.parse(personJSON) ;
// console.log(personObj) ;



// let model = "Model" ;
// let cars = {name : "Volvo" , [model] : "S60" } ;

// console.log(cars) ;



// let object = {name : "" } ;

// let hasIt = object.hasOwnProperty("name") ;

// console.log(hasIt) ; // will output true because "name" is a property of the object.



// let obj1 = {a : 1 , b : 2} ;
// let obj2 = {b : 3 , c : 4} ;

// let mergedObj = {...obj1,...obj2} ;

// console.log(mergedObj) ; // will output {a: 1, b: 3, c: 4}

// let merged = Object.assign({}, obj1,obj2) ;

// console.log(merged) ; // will output {a: 1, b: 3, c: 4}



// console.log("Birinci (First) Log") ;

// setTimeout(() => {
//     console.log("İkinci (Second) Log") ;
// }, 3000) ;

// console.log("Üçüncü (Third) Log") ;



// console.log("Birinci Log") ;

// function norm(text,callback) {
//     setTimeout(() => {
//         callback(text) ;
//     }, 3000) ;
// } ;

// let value = norm("İkinci Log", (value) => {
//     console.log(value) ;
// }) ;

// console.log("Üçüncü Log") ;



// console.log("Birinci Log") ;

// let settings = false ; //try it as true!

// const promiseFunc = (text) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if(settings) {
//                 resolve(text) ;
//             } else {
//                 reject(new Error("Settings are not enabled")) ;
//             }
//         }, 3000) ;
//     }) ;
// }
// promiseFunc("İkinci Log").then((pr) => console.log(pr)).catch((err) => console.log(err)) ;

// console.log("Üçüncü Log")




// let settings = true ;

// const promiseFunc = (text) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if(settings) {
//                 resolve(text) ;
//             } else {
//                 reject(new Error("Settings are not enabled")) ;
//             }
//         }, 2000) ;
//     }) ;
// }


// const promiseFunc2 = (text) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if(settings) {
//                 resolve(text) ;
//             } else {
//                 reject(new Error("Settings are not enabled")) ;
//             }
//         }, 2000) ;
//     }) ;
// }

// Promise.all([
//     promiseFunc("İkinci Log"),
//     promiseFunc2("Üçüncü Log")
// ])
// .then((pr) => console.log(pr))
// .catch((err) => console.log(err)) 





// const fetchData = async () => {
//     let response = await fetch("https://jsonplaceholder.typicode.com/posts/1") ;
//     let data =  await response.json() ;
//     return data ;
// }

// let value = fetchData() ;

// console.log(value) ;
// fetchData().then((data) => console.log(data)) ; //this method is the best of 3



// console.log(Math.abs(-3)) ;
// console.log(Math.ceil(4.2)) ;
// console.log(Math.floor(4.2)) ;
// console.log(Math.round(4.2)) ;
// console.log(Math.max(3,7,5)) ;
// console.log(Math.min(3,7,5)) ;
// console.log(Math.random() * 10) ;
// console.log(Math.floor(Math.random() * 10)) ;
// console.log(Math.pow(3,4)) ;
// console.log(Math.sqrt(16)) ;



// let date = new Date() ;

// console.log(date) ;
// console.log(date.getFullYear()) ;
// console.log(date.getMonth()) ;

// let date2 = new Date(2002,11,11) ;

// console.log(date - date2) ;  

// let sayi = Math.random() * 10 + -3

// if(sayi > 0) {
//     console.log(sayi)
//     console.log("Sayı pozitif") ;
// } else if (sayi < 0) {
//     console.log(sayi)
//     console.log("Sayı negatif") ;
// } else {
//     console.log(sayi)
//     console.log("Sayı sıfır") ;
// }


// let dayTime = 3 ;

// switch (dayTime) {
//     case 1:
//         console.log("Morning")
//         break;
//     case 2:
//         console.log("Noon")
//         break;
//     case 3:
//         console.log("Evening")        
//         break;
//     default:
//         console.log("Invalid day time")
//         break;
// }


// let u = 1 ;

// for(u ; u<=10 ; u++) {
//     console.log(u + ": Merhabalar") ;
// }


// let u = 1 ;
// while(u<=10) {
//     console.log(u) ;
//     u++ ;
// }

// let z = 1 ;

// for(z ; z<=10 ; z++) {
//     if (z == 7) {
//         console.log("Loop is broken") ;
//         break ;
//     }
//     console.log(z) ;
// }

// let q = 1 ;

// for(q ; q<=10 ; q++) {
//     if (q == 7) {
//         console.log("I ate the number 7") ;
//         continue ;
//     }
//     console.log(q) ;
// }


// let school = {
//     name:"Yusuf" , surname: "Türlü" , number: 345
// }

// for(let key in school) {
//     console.log(key + ": " + school[key]) ;
// }


// let ary = ["Yusuf" , "Aleyna" , "Deus"] ;

// for(let name of ary) {
//     console.log(name) ;
// }



// const soccers = new Set() ;

// soccers.add("Arda Güler") ;
// soccers.add("Nihat Kahveci") ;
// console.log(soccers) ;

// soccers.forEach(soccer => {
//     console.log(soccer) ;
// })



// const countries = new Map() ;

// countries.set("Turkey", "Ankara") ;
// countries.set("Germany", "Berlin") ;

// console.log(countries) ;

// countries.forEach((capital, country) => {
//     console.log(country + ": " + capital) ;
// }) ;

// console.log(countries.get("Turkey")) ;



function click() {
    console.log("Button clicked") ;
    document.getElementById('testButton').innerHTML = "Made with Js" ;
}

function mouseOver() {
    console.log("Mouse over button") ;
    document.getElementById('testButton').style.backgroundColor = "yellow" ;
}

function mouseOut() {
    console.log("Mouse out button") ;
    document.getElementById('testButton').style.backgroundColor = "white" ;
    document.getElementById('testButton').innerHTML = "Test Button" ;
}

document.getElementById('testButton').addEventListener('mouseover',mouseOver)

document.getElementById('testButton').addEventListener('mouseout',mouseOut)

document.getElementById('testButton').addEventListener('click', click)

const name = document.getElementById('input') ;
const p = document.getElementById('result')
name.addEventListener('input', () => {
    p.innerHTML = "Hello " + name.value ;
})


let form = document.getElementById('form') ;
document.getElementById('form').addEventListener('submit',function(event) {
    event.preventDefault() ;
    const isim = form.elements.isim.value ;

    alert("Hello " + isim)
 }) ;

 function addList() {
    let ul = document.getElementById('list') ;
    const node = document.createElement('li') ;
    const content = document.createTextNode('New Content Added')
    node.appendChild(content) ;
    ul.appendChild(node) ;
 }

document.getElementById('toggleButton').addEventListener('click' , () => {
    const list = document.getElementById('list') ;
    list.style.display = list.style.display === 'none'? 'block' : 'none' ;
    document.getElementById('toggleButton').innerText = list.style.display === 'none'? 'Show List' : 'Hide List' ;
    localStorage.setItem('listStatus', list.style.display) ;
    localStorage.setItem('toggleButtonText', document.getElementById('toggleButton').innerText) ;
    localStorage.setItem('listItems', JSON.stringify(Array.from(list.children))) ;
} )

document.getElementById('darkModeButton').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('header-dark');
});


