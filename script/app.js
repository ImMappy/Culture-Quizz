// VARIABLE DECLARATIONS 


const form = document.querySelector('.quizz');
const questions = document.querySelectorAll('.quizz-bloc')
const divResult = document.querySelector('.results')
let result  = [];
let resultVerify = [];
const correctAnswers = ['b','a','b','b','c'];
const gifArray = [
    '../assets/homer-perfect.gif',// 5/5
    '../assets/homer-nice.gif', // 4/5
    '../assets/homer-ok.gif', // 3/5
    '../assets/homer-notbad.gif', //2/5
    '../assets/homer-bad.gif', // 1/5
    '../assets/homer-verybad.gif' // 0/5
]                                   
const gif = document.querySelector('.gif');
const comment = document.querySelector('.comment');
const note = document.querySelector('.note');



form.addEventListener('submit',(e) => {
    e.preventDefault();
    divResult.style.visibility ="visible";

    for(let i = 1; i < 6; i++){
        result.push(document.querySelector(`input[name="q${i}"]:checked`).value) // Verifying the value of the checkboxes
    }

    verification(result)
    result =[]; // reset after the function verification has been executed
})


function verification(responses){
    for(let i = 0; i <5; i ++){
        if(responses[i] === correctAnswers[i]){ 
            resultVerify.push(true); 
            
        }else{
            resultVerify.push(false);
        }
    }
    showResult(resultVerify)
    changingBackground(resultVerify)
    resultVerify = []; // reset score 
}

function showResult(result){

    const wrongAnswers = result.filter(response => response !== true).length; // filter true and false answers thanks the boolean pushed in verification
    console.log(wrongAnswers)
    switch(wrongAnswers){ 
        case 0: 
        note.innerText= '5/5';
        comment.innerText='Very good job ! Are you Einstein\'s child ?'
        gif.innerHTML=`<img src="${gifArray[0]}" alt="homer dancing with marge in a car"/>`;
        break;
        case 1:
            note.innerText= '4/5';
            comment.innerText='Good job buddy you are pretty smart but not totally !'
            gif.innerHTML=`<img src="${gifArray[1]}" alt="homer dancing with marge in a car"/>`;
        break;
        case 2:
            note.innerText= '3/5';
            comment.innerText='You are on a good way ! Try again !'
            gif.innerHTML =`<img src="${gifArray[2]}" alt="homer dancing with grand pa simpson "/>`;
        break;
        case 3:
            note.innerText= '2/5';
            comment.innerText='Well it\'s just a score... Just do it again and forget it.'
            gif.innerHTML =`<img src="${gifArray[3]}" alt="pannel alerts homer"/>`;
        break;
        case 4:
            note.innerText= '1/5';
            comment.innerText='Dude... REALLY ?!'
            gif.innerHTML =`<img src="${gifArray[4]}" alt ="homer yelling"/>`
        break;
        default:
            note.innerText= '0/5';
            comment.innerText='This test was for my dog initially... just telling.'
            gif.innerHTML =`<img src="${gifArray[5]}" alt="homer hidding in a bush"/>`;
        break;
    }
}

function changingBackground(array){
    for(let i=0; i< array.length; i++){
        if(array[i] === true){
            questions[i].style.background ="rgba(0, 158, 45,0.4)"
        }else{
            questions[i].style.background ="rgba(147, 2, 2,0.4)"
            questions[i].classList.add('wrong')

            setTimeout(() => {
                questions[i].classList.remove('wrong');
            }, 500) // remove the class after 0.5 seconds
        }
        
    }
}

questions.forEach(question =>{
    question.addEventListener('click',() => {
        question.style.background = '#fff'; // each time click on a question reset of the background in white.
    })
} )