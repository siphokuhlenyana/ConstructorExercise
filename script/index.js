// Welcome and I hope you didn't eat breakfast this morning because you are about to eat some javscript(*nom* *nom*)

// As we know things will start out easy

// 1. Change 'This is the first heading' to 'Javascript is my breakfast for today'.(set it as a variable first then change it)
let heading=document.querySelector('h1')
 heading.innerText="Javascript is my breakfast for today"

// 2. DO NOT USE QUERY SELECTOR: change the first subheading to 'Javascript is awesome and cool'
let subHeading1=document.getElementsByTagName('h4')[0]
    subHeading1.textContent="Javascript is awesome and cool"
// 3.change the second subheading to 'I enjoy coding'
let subHeading2=document.getElementsByTagName('h4')[1]
subHeading2.textContent="I enjoy coding"
// 4. DO NOT USE QUERYSELCTOR: change the third subheading to 'My subconsious mind is my partner in success'
let subHeading3=document.getElementsByTagName('h4')[2]
subHeading3.textContent="My subconsious mind is my partner in success"

// 5.DO NOT USE QUERY SELECTOR: change the forht subheading to 'My body is an amazing healing mechanism'
let subHeading4=document.getElementsByTagName('h4')[3]
subHeading4.textContent="My body is an amazing healing mechanism"

//6. Consider the following array ['banana', 'apple', 'orange', 'pear']

// use a loop(for of) to loop through the array and log the values display the information.
let fruits=['banana', 'apple', 'orange', 'pear']

for(let fruit of fruits){
    console.log(fruit)
}

// 7. Use the loop in Ques 6 to display the data into the 'foodholder' id 
//(The catch...it must appear in bullet points on the html)

let foodholder=document.querySelector('#foodHolder')
for(let fruit of fruits){
    foodholder.innerHTML += `<li>${fruit}</li>`
}


// fruits.forEach((value,index)=>{
//     console.log('${value} :${index}');
//   })

// 8.Welcome to the mini calculator that only adds+, once you see the steps you'll finish it in no time:)
// let input=document.getElementsByTagName('input')
// let btn1=document.querySelectorAll("[value='1']")[0]
// let btn2=document.querySelectorAll("[value='2']")[1]
// let btn3=document.querySelectorAll("[value='3']")[2]
// let btn4=document.querySelectorAll("[value='4']")[3]
// let btn5=document.querySelectorAll("[value='5']")[4]
// let add=document.querySelectorAll("[value='+']")[5]
// let equals=document.querySelectorAll("[value='=']")[6]
// let buttons=document.querySelectorAll('button')

// btn1.addEventListener('click',one)

// btn2.addEventListener('click',two)
// btn3.addEventListener('click',three)

// btn4.addEventListener('click',four)
// btn5.addEventListener('click',five)
// add.addEventListener('click',()=>{
//     input.value =add.value
// })
// equals.addEventListener('click',()=>{
//     addition()
// })

// function one(){
//     input.value +=btn1.value
// }
// function two(){
//     input.value +=btn2.value
// }
// function three(){
//     input.value +=btn3.value
// }
// function four(){
//     input.value +=btn4.value
// }
// function five(){
//     input.value +=btn5.value
// }
// function addition(num1,num2){
//     input.value = eval("button.value +button.value")
// }
// 8.1 make a variable for the input tag(where information will be written to)
let input=document.getElementsByTagName('input')[0]
// Now Time for some nandos

// 8.2. make a variable for the equal button(=)
let equals=document.querySelectorAll("[value='=']")[6]

// 8.3 Attach a all the buttons with values to a single variable(This is will now make it/or return an array)
// let btn1=document.querySelectorAll("[value='1']")[0]
// let btn2=document.querySelectorAll("[value='2']")[1]
// let btn3=document.querySelectorAll("[value='3']")[2]
// let btn4=document.querySelectorAll("[value='4']")[3]
// let btn5=document.querySelectorAll("[value='5']")[4]
// let add=document.querySelectorAll("[value='+']")[5]
 let button=document.querySelectorAll('[value]')
// let equals=document.querySelectorAll("[value='=']")[6]

// 8.4 Now create a function that will add the button to the input tag.
// function addition(num1,num2){
//         input.value = eval("button.value +button.value")}
        function append(btnValue){
            input.value +=btnValue
          }

// 8.5 Now use a ForEach loop to add an event lister to each button that will add the value of the button to the input tag.(make use of the function made in 8.4)
button.forEach(event =>{
    event.addEventListener('click',()=>{
        append(event.value)
})
})
// 8.6 Now attach an event listener to the equal button that will evaluate( eval ) the answer
//   equals.addEventListener('click',()=>{
//         addition()
//     })

//9. Now make each button[1, 2 and 3] alert the value of 'data-textset' value in the html. for eg when I click on button1, the alert will show...'I am button 1'.
// let button1=document.getElementsByTagName('button')[7]
// let button2=document.getElementsByTagName('button')[8]
// let button3=document.getElementsByTagName('button')[9]
// button1.addEventListener('click',()=>{
//     alert("I am button 1")
// })

//  button2.addEventListener('click',()=>{
//     alert("I am button 2 ")
//  })
//  button3.addEventListener('click',()=>{
//     alert("I am button 3")
//  })


// 9.1 Attach button1, button2, and button3 to a single variable(just like earlier it will be an array) 
let buttonAlert=document.querySelectorAll('[data-textset]')

// let buttons =["button1","button2","button3"]
// // for(button of buttons){
// //     console.log(buttons)
// for(let m=0;m<buttons.length;m++){
//     console.log(buttons[m]);
// }
// }
// 9.2 To attach an alert to multiple buttons make sure to use a for each loop

    //not done with the loop yet//
     buttonAlert.forEach(button=>{
        button.addEventListener('click',()=>{
    //         const message=this.getAttribute("message")
     alertMessage(button)
      })
      
     })

// 9.3 Write a function inside of the event listener that will alert the message...for the message you need to use .getAttribute() to attach the message from the button to the alert
// buttons.addEventListener('click',function(){
//     let message=this.getAttribute('message');
//     alert(message);


function alertMessage(button){
    //getAttribute will return any value of specified attribute ,, eg button 3
    message=button.getAttribute('data-textset')
    alert(message)
}

// })
// 10 A student got the following marks Eng 59%, afrik 40%, maths 56%, physics 71%. Calculate his average for the given marks and use a switch statement to check the answer,write the message into the corresponding tag. If the student got higher than 80%, message should be 'I'm proud of you'. If the student got higher than 50%,message should be 'Dont worry I'm still proud of you'. If the student got below than 50%,message should be 'What did you think I was going to say I'm still proud of you :), regardless'
let english =59
let afri=40
let maths=56
let physics=71
const average= (english+afri+maths+physics)/4
let displayMessage=document.querySelectorAll('p')[1]
let message
switch (true) {
    case average >80:
        message='I\'m proud of you '
        
        break;

        case average >50:
            message='Dont worry I\'m still proud of you '
            
            break;
             case average >80:
        message='I\'m proud of you'
        
        break;
    default:
        message='What did you think I was gonna say  I\'m still proud of you'
        break;
}
displayMessage.innerText=MessagePort 
// 11.Create a factory function that will create an object with name, surname, message:function. The function should log the name and surname of that object. Create 2 objects using the factory function.

// 12 Create a constructor function that is the same as no 11. Create 2 objects using the constructor function and display the message in the first paragrph tag

// Bonus1 (), 
// create a recursive function that will return the fibonacci sequence until the limit value for, 
//eg limit value = 10 output will be 1 1 2 3 5 8
//eg limit value = 22 output will be 1 1 2 3 5 8 13 21


// bonus2
// make the background of the footer tag change color to blue when clicking on the footer button

//bonus3 
//make program that will check whether a number is a prime number. For example 3, response 'yes it is a prime number', 12, no it is not a prime number. Use your discretion