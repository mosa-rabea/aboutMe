'use strict';
let userName = prompt('hi hi hi hi hi welcome ');
alert('Welcome  (' + userName + ') - i hope you will enjoy in this page - i will ask you about my self');

let myName= prompt('my name is mousa?');
if(myName.toLowerCase() ==='y' || myName.toLowerCase() ==='yes')
  {
    alert('sure this is my name ^^');
  console.log('T');
  
} 
 else if(myName.toLowerCase() ==='n' || myName.toLowerCase() ==='no')
{
  alert('why no look at the pic');
  
}
 else{ alert(' you should answer by y or n'); }
 
 
 
let favanime= prompt('death note is my best anime ?');
if(favanime.toLowerCase() ==='y' || favanime.toLowerCase() ==='yes')
  {
  alert('i hope you watched it ');
  
} 
else if(favanime.toLowerCase() ==='no' || favanime.toLowerCase() ==='n')
{
  alert('ooops');
  
}
{

console.log(' T');}

{ alert(' you should answer by yes or no');}

 
let favsport= prompt('My favorite sport is football?');
if(favsport.toLowerCase() ==='yes' || favsport.toLowerCase() ==='y')
{
    alert('oops , no is not true  ');
    
    
  } 
  else if(favsport.toLowerCase() ==='no' || favsport.toLowerCase() ==='n')
  { alert('this is clearly true');  }
  console.log('T');
 
  let favColor= prompt('White is My fav color?');
  if(favColor.toLowerCase() ==='y' || favColor.toLowerCase() ==='yes')
  {
    alert('sure');
  
    
  }
   console.log(' T');
    if(favColor.toLowerCase() ==='no' || favColor.toLowerCase() ==='n')
  {
    alert('oops ');
    
  }
else{
  alert('you must answer just y or n');
}

  let favename= prompt('mohammed is super best name i hear?');
  if(favename.toLowerCase() ==='yes' || favename.toLowerCase() ==='y')
  {
    alert('عليه الصلاه والسلام ');
    
    
}
console.log('T');
  if(favename.toLowerCase() ==='no' || favename.toLowerCase() ==='n')
{
  alert('why no , this is the greatest one in the world ');
  
}
else{
  alert('you should answer by yes or no');
  
}
alert('nice to meet you ^_^ ${userName}' ); 
/*
function theGuessingGames(answer) {
  if (answer === 'yes' || answer === 'y') {

    alert('correct answer ');
    score++;
  }
  else if (answer === 'no' || answer === 'n') {
    alert('Wrong answer ');
  }
  else {
    alert('invalid answer please type, yes , y , no , n ');
  }

let conf1;
switch (conf1) {
  case true:
    {
      let conf2 = confirm(" please use answer with Just yes or no ");


      let myName = prompt("my name is mousa?").toLowerCase();
      theGuessingGames(myName);

      let favanime = prompt("death note is my best anime ").toLowerCase();
      theGuessingGames(favanime);

      let favsport = prompt(" My favorite sport is football?").toLowerCase();
      theGuessingGames(favsport);

      let favColor = prompt("White is My fav color?").toLowerCase();

      theGuessingGames(favColor);



      let favename = prompt("  mohammed is super best name i hear?").toLowerCase();

      theGuessingGames(favename);



      console.log(yesCount);
      console.log(noCount);
      break;



    }
  case false:
    {
      alert('ops !!')
    }


}*/

let score = 0;
let count = 0;
function myAge() {
  for (let i = 0; i < 4; i++) {
    let myAge = prompt('can you guess how old am i ? ');

    if (myAge == 27) {
      alert("You are incredible , thats correct answer ");
      score++;
      break;

    }
    else if (myAge < 27) {
      alert("your answer(" + myAge + ') its less than correct answer');
      count++
    }
    else {
      alert("your answer(" + myAge + ') its more than correct answer');
      count++;
    }

  }

  if (count == 4) {
    alert('Sorry, your chances are exhausted.\n The correct answer is 27 years');
  }
}


myAge();




let favaname = ['mosa', 'mohemmed', 'jameel', 'rabea', 'ana'];
let status;

function favor(ri) {
  for (let i = 0; i < 6; i++) {
    let theGuessingGames = prompt('Can you guess my favorite name? \n Please type a name').toLowerCase();

    for (let j = 0; j < ri.length; j++) {
      if (ri[j] === theGuessingGames.toLocaleLowerCase()) {
        alert(" thats correct answer ");
        score++;
        status = true;
        break;

      }
    }
  }

  return ri;
}
//alert('my favorite name is  \n' + favor(favename));