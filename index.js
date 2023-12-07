 const setofWords = ["Space, often referred to as outer space or simply  is the vast, seemingly infinite expanse that exists beyond Earth's atmosphere and between celestial bodies. ",
 "It is a realm that encompasses everything, from stars, planets, and galaxies to asteroids, comets, and interstellar gas. While space is largely empty, it is not devoid of matter. It is characterized by a near-vacuum, with extremely low densities of particles and electromagnetic radiation.s curiosity about space has driven significant advancements in our understanding of the universe.",
"Galaxies: A galaxy is a vast collection of stars, gas, dust, and other celestial objects bound together by gravity. The universe contains billions of galaxies, and our own galaxy is called the Milky Way. Galaxies come in various shapes and sizes, ranging from spiral and elliptical galaxies to irregular ones."];

const msg = document.getElementById('msg');
const typewords = document.getElementById('mywords');
const btn = document.getElementById('btn');
let startTime,endTime;
// this function will run after clicking the btn start
let temp = 0;
const playgame = ()=>{
    let random_number = Math.floor(Math.random()*setofWords.length);
    // console.log(random_number);
    msg.innerText = setofWords[random_number];
    // we  used here Date functionalities so that we can know the time when the user hit the start button
    let date = new Date();
    startTime = date.getTime();
    btn.innerText = "Done";
    temp = random_number
}

const endPlay = ()=>{
    let date   = new Date();
    endTime = date.getTime();
    let totalTime = ((endTime - startTime)/1000)
    console.log(totalTime);  
    let totalStr = typewords.value; 
    
    let wordcount = wordCounter(totalStr);
  
 let speed = Math.round((wordcount/totalTime)*60);
 let finalMsg = "Your typing speed is "+speed+" words per minute";

 // below function will compare text entered by user and the text we provided to the user for typing

 finalMsg += compareWords(msg.innerText,totalStr)

 msg.innerText = finalMsg; 

// compareWords(setofWords[temp],totalStr)

}
// compare function will compare the text entered by user and the text provided to the user
const compareWords = (str1,str2)=>{
  
    let words1 = str1.split(" ");
  
    let words2 = str2.split(" ");

    // console.log("words2"+words2)
    // count variable has been made to keep the count in the index
    let cnt = 0;
    // 
    words1.forEach(function (item,index){

        if(item == words2[index]){
           

            cnt++;
        }
        
    })
    console.log("value of count_"+ cnt)

    let errorWords  = (words1.length - cnt);
    return (cnt + "correct out of " + words1.length + " words and the total number of errors are " + errorWords + ". ")

    
}

// this will return the count of the words entered by user
const wordCounter = (str) =>{
    let no_of_words = str.split(" ").length;
    return no_of_words; 
}


btn.addEventListener('click',function(){
    if(this.innerText == 'Start'){
        typewords.disabled = false;
        playgame();
    }else if (this.innerText == "Done"){
        typewords.disabled = true;
        btn.innerText = "Start";
        endPlay();
    }
   
})