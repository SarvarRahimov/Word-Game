let timediv = document.querySelector(".time");
let time = document.querySelector(".timeorder");
let score = document.querySelector(".sumscore");
let start = document.querySelector(".start");
let words = document.querySelector(".words");
let nextWord = document.querySelector(".nextword");
let hint=document.querySelector(".hint")
let hintBox=document.querySelector(".hintbox")
let input=document.querySelector(".input")
let wordMain=document.querySelector(".wordmain")
let letters=document.querySelector(".letters")

start.addEventListener("click", startClick);

function startClick() {
  nextWord.addEventListener("click",nextWordClick);
  hint.addEventListener("click",hintClick)
  letters.addEventListener("click",onClick)
  start.disabled="true"
  id=0;
  timediv.style.backgroundColor = "green";
  words.innerHTML=""
  timecountdown();
  createLettersquare();
  // nextWordFunction();
}
function nextWordClick(){
  if(startClick==false){

    nextWord.disabled="true"
  }
  else{

    id+=1;
    createLettersquare();
  }
  hintBox.style.opacity="0";
}
function hintClick(){
  hintBox.style.opacity="1";
  hintBox.innerHTML=findwords[id].hint
}

function timecountdown() {
  time.innerHTML = "30";
  let count = 30;
  const timer = setInterval(function () {
    count--;
    time.innerHTML = count;
    if (count === 0) {
      clearInterval(timer);
      alert("Time's up!");
      timediv.style.backgroundColor = "red";
    }
  }, 1000);
}

function createsquare() {
  let yeniDiv = document.createElement("div");
  // let yeniSpan=document.createElement("span")
  // yeniSpan.classList.add("yenispan")
  // yeniDiv.appendChild(yeniSpan)
  yeniDiv.classList.add("yenidiv")
  input.appendChild(yeniDiv);
  words.style.display="none";
}

function createLetter(){
  
  for(let i=65;i<=90;i++){
    let button=document.createElement("button")
    button.classList.add("letter");
    
    button.innerHTML= String.fromCharCode(i)
    letters.appendChild(button);
  }
}
function onClick(e){
  id=0;
  let charArray=findwords[id].word.toUpperCase().split("");
  let boxArr=document.querySelectorAll(".yenidiv");
  if(charArray.includes(e.target.innerText)) {
    charArray.forEach((char,index) =>{
      if(char === e.target.innerText){
        e.target.style.backgroundColor="green";
        boxArr[index].innerHTML=char;

              
      }
    });
  }
  else{
    e.target.style.backgroundColor="red";
    e.target.disabled="true";
  }
  


}
createLetter();

const findwords=[
  {
    id:0,
    word:`book`,
    hint:"We use for get to information"
  },
  {
    id:1,
    word:`pencil`,
    hint:"We use for write"
  },
  {
    id:2,
    word:`rul`,
    hint:"We use for get to size"
  },
  {
    id:3,
    word:`rose`,
    hint:`It is a red  `
  }
]


const createLettersquare= ()=>{
  let mainLength=findwords[id].word.length
  console.log(mainLength);
  input.innerHTML="";
  for(let i=0;i<mainLength;i++){
    createsquare();
  }

}



// let charArray=randomWord.toUppercase().split("");

// for(let i=0;i<findwords.length;i++){
//   let wordLength=findwords[i];
  
//     console.log(`Element "name" uzunluğu: ${wordLength['word'].length}`);
  
// }






// function findword(){

//   const keywords = ["book", "rule", "apple"];
//   for(let i=0;i<keywords[i].length;i++){

//   }
// }
// const keywords = ["book", "rule", "apple"];
// const keyWordlenth = [];
// var ApppedText = [];
// const WordIndex = 1;
// function findword() {
//   keywords.map((data, key) => {
//     keyWordlenth.push(data.length);
//   });
//   for (let index = 0; index < keyWordlenth[WordIndex]; index++) {
//     ApppedText.push(createsquare());
//   }
//   ApppedText.join(" ");
//   words.append(ApppedText);
//   console.log(keyWordlenth[WordIndex]);
// }

// const nextWordFunction = () => {
//   keyWordlenth.map((data, key) => {
//     console.log(data[0]);
//     for (let index = 0; index < data[WordIndex]; index++) {
//       words.innerHTML="_";
//     }
//   });
// };
