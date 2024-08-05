const quesJSON = [
  {
    correctAnswer: 'Three ',
    options: ['Two', 'Three ', 'Four', 'Five'],
    question:
      "How many pieces of bun are in a Mcdonald's Big Mac?",
  },
  {
    correctAnswer: 'L. Frank Baum',
    options: [
      'Suzanne Collins',
      'James Fenimore Cooper',
      'L. Frank Baum',
      'Donna Leon',
    ],
    question:
      "Which author wrote 'The Wonderful Wizard of Oz'?",
  },
  {
    correctAnswer: 'Atlanta United',
    options: [
      'Atlanta United',
      'Atlanta Impact',
      'Atlanta Bulls',
      'Atlanta Stars',
    ],
    question:
      'Which of these is a soccer team based in Atlanta?',
  },
  {
    correctAnswer: 'A Nanny',
    options: [
      'A Sow',
      'A Lioness',
      'A Hen',
      'A Nanny',
    ],
    question: 'A female goat is known as what?',
  },
  {
    correctAnswer: 'P. L. Travers',
    options: [
      'J. R. R. Tolkien',
      'P. L. Travers',
      'Lewis Carroll',
      'Enid Blyton',
    ],
    question:
      "Which author wrote 'Mary Poppins'?",
  },
];

    let score=0;
    let currentQuestion=0;

//DOM Manipulation.
let questionelm=document.getElementById('question');
let optionelm=document.getElementById('options');
let scoreelm=document.getElementById('score');
let nextEl=document.getElementById('next');

// Destructing the object.
function showQuestion(){

  const{
    correctAnswer,
    options,
    question
  }=quesJSON[currentQuestion];

  questionelm.textContent=question;
  suffeledopt(options); // Calling suffeled Option function


  options.forEach(function(opt){
    let btn=document.createElement("button");
    btn.textContent=opt;
    optionelm.appendChild(btn);

    btn.addEventListener('click',function(){
      
      if(btn.textContent == correctAnswer){
        score++;
        btn.style.backgroundColor='green';
      }else{
        score-=0.25;
        btn.style.backgroundColor='red';
      }
      console.log(score);

      setTimeout(function(){
        scoreelm.textContent=`Score: ${score} / ${quesJSON.length}`;
        nextQuestion();
      },800);
    });
  });
}
showQuestion();

// For next question.
function nextQuestion() {
  optionelm.textContent=' ';
  currentQuestion++;
  if(currentQuestion>=quesJSON.length){
    questionelm.textContent='Quize Complete!';
    nextEl.remove();
  }else{
    showQuestion();
  }
}

// Next button function.
nextEl.addEventListener('click',function(){
  nextQuestion();
})



  //suffeled option.
  function suffeledopt(options) {
    for(let i=0;i<options.length;i++){
      let j=Math.floor(Math.random()*options.length);
      let temp=options[i];
      options[i]=options[j];
      options[j]=temp;
    }
  }
    