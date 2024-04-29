const quizContainer = document.getElementById('quiz-container');
const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const submitBtn = document.getElementById('submit');
const resultEl = document.getElementById('result');
const progressBar = document.getElementById('progress-bar');

const questions = [
  {
    question: "What does HTML stand for?",
    options: [" HyperText and links Markup Language",
    "HyperTool Markup Language",
     "HyperText Markup Language",
    "HighText Machine Language"],
    answer: "HyperText Markup Language"
  },
  {
    question: "Which tag is used to display a picture in a HTML page?",
    options: ["<picture>","<image>","<img>","<src>"],
    answer: "<img>"
  },
  {
    question: "Who painted the Mona Lisa?",
    options: ["Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso", "Michelangelo"],
    answer: "Leonardo da Vinci"
  },
  {
    question: "What property is used to change the text color of an element?",
    options: ["font-color", "text-color", "color", "background color"],
    answer: "color"
  },
  {
    question: "Which country is known as the Land of the Rising Sun?",
    options: ["China", "India", "Japan", "South Korea"],
    answer: "Japan"
  },
  { 
    question: "Which attribute is used in HTML to decorate a text as bold?",
    options: ["<bg>", "<bold>", "<b>", "<strong>"],
    answer:"<b>"
  },
  { 
    question: "Which of the following is a JavaScript data type?",
    options: ["Element", "Function", "Tag", "Object"],
    answer: "Object"
  },
  { 
    question: "Who is the HOD of CSE Department?",
    options: ["Dr. M L Sharma", "Dr. Pooja Gupta", "Dr. Namita Gupta", "Dr. Vinay Kumar Saini"],
    answer: "Dr. Namita Gupta"
  },
  { 
    question: "Who is the Placement Officer of MAIT?",
    options: ["Dr. M L Sharma", "Dr. Pooja Gupta", "Dr. Namita Goyal", "Amit Gautam"],
    answer: "Amit Gautam"
  },
  { 
    question: "Which of these is a self-closing tag?",
    options: ["<div>", "<img>", "<p>", "<h1>"],
    answer: "<img>"
  },
];

const totalQuestions = questions.length;
let currentQuestion = 0;
let score = 0;

function loadQuestion() {
  const question = questions[currentQuestion];
  questionEl.textContent = question.question;

  optionsEl.innerHTML = '';
  question.options.forEach(option => {
    const optionBtn = document.createElement('button');
    optionBtn.textContent = option;
    optionBtn.classList.add('option');
    optionBtn.addEventListener('click', () => checkAnswer(option));
    optionsEl.appendChild(optionBtn);
  });

  // Update progress bar
  const progress = ((currentQuestion + 1) / totalQuestions) * 100;
  progressBar.style.width = progress + '%';
}

function checkAnswer(selectedOption) {
  const correctAnswer = questions[currentQuestion].answer;
  if (selectedOption === correctAnswer) {
    score++;
    resultEl.textContent = "HURRAY!! CORRECT🥳";
    resultEl.style.color="rgb(67, 64, 231)";
    

  } else {
    resultEl.textContent = "BETTER LUCK NEXT TIME!!😞";
  }
  currentQuestion++;
  if (currentQuestion < totalQuestions) {
    loadQuestion();
  } else {
    quizContainer.style.display = 'none';
    if(score>6){
        resultEl.textContent = `Quiz completed! Congrats 🙌 Your final score is ${score}/${totalQuestions}`;
     }
     else{
    resultEl.textContent = `Quiz completed! Nice Try 👍 Your final score is ${score}/${totalQuestions}`;
        
     }
  }
}

loadQuestion();

submitBtn.addEventListener('click', () => {

});