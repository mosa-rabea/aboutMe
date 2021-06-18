'use strict';
let userName = prompt('hi hi hi hi hi welcome ');
alert('Welcome  (' + userName + ') - i hope you will enjoy in this page - i will ask you about my self');

let myName= prompt('my name is mousa?');
myName=myName.toLowerCase();
if(myName ==='y' || myName ==='yes')
  {
    alert('sure this is my name ^^');

  
} 
 else if(myName==='n' || myName ==='no')
{
  alert('why no look at the pic');
  
}
 else{ alert(' you should answer by y or n'); }
 
 
 
let favanime= prompt('death note is my best anime ?');
favanime=favanime.toLowerCase();
if(favanime ==='y' || favanime ==='yes')
  {
  alert('i hope you watched it ');
  
} 
else if(favanime ==='no' || favanime ==='n')
{
  alert('ooops');
  
}
else{

 alert(' you should answer by yes or no');}


let favsport= prompt('My favorite sport is football?');
favsport=favsport.toLowerCase();
if(favsport ==='yes' || favsport ==='y')
{
    alert('oops , no is not true  ');
    
    
  } 
  else if(favsport ==='no' || favsport ==='n')
  { alert('this is clearly true');  }
 else{
  alert(' you should answer by yes or no');
 }
 
  let favColor= prompt('White is My fav color?');
  favColor=favColor.toLowerCase();
  if(favColor ==='y' || favColor ==='yes')
  {
    alert('sure');
  
    
  }
  
    else if(favColor ==='no' || favColor ==='n')
  {
    alert('oops ');
    
  }
else{
  alert('you must answer just y or n');
}

  let favename= prompt('mohammed is super best name i hear?');
  favename=favename.toLowerCase();
  if(favename==='yes' || favename ==='y')
  {
    alert('عليه الصلاه والسلام ');
    
    
}

 else if(favename ==='no' || favename ==='n')
{
  alert('why no , this is the greatest one in the world ');
  
}
else{
  alert('you should answer by yes or no');
  
}


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


      let myName = prompt("my name is mousa?");
      myName=myName.toLowerCase();
      theGuessingGames(myName);

      let favanime = prompt("death note is my best anime ");
      favanime=favanime.toLowerCase();
      theGuessingGames(favanime);

      let favsport = prompt(" My favorite sport is football?");
      favsport=favsport.toLowerCase();
      theGuessingGames(favsport);

      let favColor = prompt("White is My fav color?");
      favColor=favColor.toLowerCase();
      theGuessingGames(favColor);



      let favename = prompt("  mohammed is super best name i hear?");
      favename=favename.toLowerCase();
      theGuessingGames(favename);



      
      
      break;



    }
  case false:
    {
      alert('ops !!')
    }
    theGuessingGames();

}
}
let score = 0;
let count = 0;
function myAge() {
  let myAge = Number(prompt('can you guess how old am i ? '));
  for (let i = 0; i < 4; i++) {

    if (myAge === 27) {
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
myaAge=Number(prompt('try to geusse age again'));
  }

  if (count == 4) {
    alert('Sorry, your chances are exhausted.\n The correct answer is 27 years');
  }
}


myAge();




let favaname = ['mosa', 'mohemmed', 'jameel', 'rabea', 'ana'];


function favor(favaname) {
  let theGuessingGames = prompt('Can you guess my favorite name? \n Please type a name').toLowerCase();
  outerLoop:for (let i = 0; i < 6; i++) {
    for (let j = 0; j < favaname.length; j++) {
      if (favaname[j] === theGuessingGames) {
        alert(" thats correct answer ");
        score++;
        break outerLoop ;
      }
     
    } theGuessingGames=prompt('please try again' ).toLowerCase();
  }



}

favor();
