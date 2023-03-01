//Variables
/*Variables are empty boxes used to hold data
    In JavaScript, we declare variables using var, const, let
*/
var cat; //declaared a variable named cate
cat = "Fido"; //instantiated +the variable cat by giving it a value
//console.log (cat);

const name = "Tory"; //const is immutable (cannot change)
// console.log(name);
//name = "Victoria";

let color = "red"; //let is mutable (can change)
color = "blue";
//console.log(color);

//Data Types
var number = 1; //number 
var num = "1"; //string
var sum = num + num
//console.log(sum)

var question = true || false
if (question == 8) {
    //  console.log("True")
} else {
    // console.log("false")
}

/*
= assignment operator. it is used to give a value
== loose comparison operator. It looks at data type and value to compare. if either are comparable, the statement will evaluate as true
=== strict comparison. compares values and data type. both data and value  must match for the statement to be tru
*/
var word1 = 1
var word2 = "1"

if (word1 == word2) {
    // console.log("True")
} else {
    // console.log("false")
}

if (word1 === word2) {
    //nconsole.log("True")
} else {
    //  console.log("false")
}

//Conditionals
var x = 2

if (x == 12) {
    // console.log("True")
} else {
    //  console.log("false")
}
//test for positivity
var num = -7

if (num >= 0) {
    // console.log("positive")
} else {
    //  console.log("negative")
}
age = 18
if (age >= 18) {
    // console.log("Access Granted")
} else {
    // console.log("Access Denied")
}
/*******Nested If/else********/
num = 100
if (num >= 0) {
    if (num > 100) {
      //  console.log("Number is positive and greater than 100")
    } else {
       // console.log("Number is positive but less than 100")
    }
} else {
    console.log("Number is negative")
}



score = 55

if (score > 55 ){

    if (score>=70) {

        if (score >= 80 ) {

            if (score >= 90 ) {

                console.log("A") //print F if >=90

            } else{//print F if <=89

                console.log("B")
            }

        } else{//print F if <=79
            console.log("C")
        }

    }else{//print F if <=69
        console.log("D")
    }
   
} else {//print F if <=55
    
   // console.log("F")
}
//Loops
/**
 * i=0 is the initializer
 * i<=0 is the condition
 * i++ is the iterator
 */


// for(i=6; i <=60; i++){
//     if(i%3==0){
//         console.log(i)
//     }
// }
// var tri=""
// for(i=0; i <=7; i++){
//     tri+="#"
//         console.log(tri)
// }

for(i=1; i <=20; i++){
    if(i%2==0){
       
        if(i==2){
            //console.log(i+"is prime")
        }else{
            //console.log(i+"is even")
        }
        
    }else{
        z=0
        for(y=1;y<=i;y++){
            if(i%y==0){
                z+=1
            }
        }
    }
    
}