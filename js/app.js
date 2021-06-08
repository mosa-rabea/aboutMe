'use strict';

let userName = prompt('hi hi hi hi hi welcome ');
alert('Welcome  (' + userName + ') - i hope you will enjoy in this page - i will ask you about my self');

let myName = prompt('my name is mousa?').toLowerCase();
if (myName === 'yes' || myName === 'y') {
  alert('sure this is my name ^^');

  // console.log('T');
}
else if (myName === 'n' || myName === 'no') {
  alert('why no look at the pic');

}
else { alert(' you should answer by y or n'); }



let favanime = prompt('death note is my best anime ?').toLowerCase();
if (favanime === 'y' || favanime === 'yes') {
  alert('i hope you watched it ');

}
else if (favanime === 'no' || favanime === 'n') {
  alert('ooops');

}


// console.log(' T');

else { alert(' you should answer by yes or no'); }


let favsport = prompt('My favorite sport is football?').toLowerCase();
if (favsport === 'yes' || favsport === 'y') {
  alert('oops , no is not true  ');


}
else if (favsport === 'no' || favsport === 'n') {
  alert('this is clearly true');
}
else {
  alert('you must answer just y or n');
}
// console.log('T');

let favColor = prompt('White is My fav color?').toLowerCase();
if (favColor === 'y' || favColor === 'yes') {
  alert('sure');
}
//  console.log(' T');
else if (favColor === 'no' || favColor === 'n') {
  alert('oops ');
}
else {
  alert('you must answer just y or n');
}

let favName = prompt('mohammed is super best name i hear?').toLowerCase();
if (favName === 'yes' || favName === 'y') {
  alert('عليه الصلاه والسلام ');
}
// console.log('T');
else if (favName === 'no' || favName === 'n') {
  alert('why no , this is the greatest one in the world ');

}
else {
  alert('you should answer by yes or no');
}


for (let i = 0; i < 4; i++) {
  let age = Number(prompt('how old are me ?'));
  if (age > 27) {
    alert('oops too high,Try to guess again');
  } else if (age < 27) {
    alert('no no too low,Try to guess again');


  } else {
    alert('ya man this is my age ^-^');
    score++;
    break;
  }
  if (i == 3) { alert('you could not guess my age , I am 27 years old'); }
}



for (let x = 0; x < 6; x++) {
  let Richone = ['Jeff Bezos', 'Elon Musk', 'Bill Gates', 'Mark Zuckerberg', 'Larry Page'];
  let guessrich = prompt('Can you guess richone in my life ? \n give me name please').toLowerCase();

  if (guessrich === Richone[0] || guessrich === Richone[1] || guessrich === Richone[2] || guessrich == Richone[3] || guessrich == Richone[4]) {
    alert('sure ');
    alert('i will come a rich one from this name [Jeff Bezos, Elon Musk , Bill Gates ,Mark Zuckerberg, Larry Page]');
    console.log(' true');
    score++;
    break;
  }

  else {
    alert(' please try again')


  }

  if (x == 5) { alert('the richone is [Jeff Bezos, Elon Musk , Bill Gates ,Mark Zuckerberg, Larry Page]') };

}


alert(`Thank you ${userName} Your score is = ${score}/7 `)
console.log('your score =', score)






