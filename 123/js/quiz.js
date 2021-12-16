var myQuestions = [
  {
    title: "Question 1 ",
    question: "My Anniversity date is ?",
    answers: {
      a: "10-07-1996",
      b: "10-09-1958",
      c: "10-07-2021",
      d: "10-10-2000",
    },
    correctAnswer: "10-07-2021",
    correctAnswerText: "My Anniversity date is 10-07-2021",
    falseAnswerText: "That's not correct. The Correct Answer is 10-07-2021",
    AnswerText: "The Correct Answer is 10-07-2021",
  },
  {
    title: "Question 2",
    question: "The nickName your boyfriend called you.",
    answers: {
      a: "Darling",
      b: "My Love",
      c: "Baby",
      d: "Kalay",
    },
    correctAnswer: "Baby",
    correctAnswerText: "The nickName your boyfriend called you => Baby",
    falseAnswerText: "That's not correct. The Correct Answer is Baby",
    AnswerText: "The Correct Answer is Baby",
  },
    {
    title: "Question 3",
    question: "Your Boyfreind favourite person is",
    answers: {
      a: "Jang NaRa",
      b: "Lisa",
      c: "You",
      d: "Rose",
    },
    correctAnswer: "You",
    correctAnswerText: "Your Boyfreind favourite color is You",
    falseAnswerText: "That's not correct. The Correct Answer is You",
    AnswerText: "The Correct Answer is You",
  },
];

var question_count = 0;
var score = 0;
var mistake = 0;
var skip = 0;

loadQuestion();

// QUIZ LOAD
function loadQuestion() {
	var questions = document.getElementById('questions');
	var quz_title = myQuestions[question_count].title;
	var myquz = myQuestions[question_count].question;
	var ans = myQuestions[question_count].answers;
  if (questions) {
  	 questions.innerHTML = 
  				`<h2>${quz_title}</h2>
  				<h3>${myquz}</h3>
          <label for="a" id="a"><input type='radio' name='ans' value='${ans.a}' id='${ans.a}'/>${ans.a}</label>
          <label for="b" id="b"><input type='radio' name='ans' value='${ans.b}' id='${ans.b}'/>${ans.b}</label>
          <label for="c" id="c"><input type='radio' name='ans' value='${ans.c}' id='${ans.c}'/>${ans.c}</label>
          <label for="d" id="d"><input type='radio' name='ans' value='${ans.d}' id='${ans.d}'/>${ans.d}</label>
          `;

  }

}

// QUIZ SKIP
// function skipped() {
//   	skip++
//    	question_count++

//    if(question_count < myQuestions.length) {
//        loadQuestion();
//    } else {
//   		finalpage();
//    }

// }

// SHOW ANSWER
function showResult(){
  var ans = document.querySelector('input[name=ans]:checked');

    if(ans) {
          var user_answer = ans.value;
          if(user_answer === myQuestions[question_count].correctAnswer) {
          var result = myQuestions[question_count].correctAnswerText;
          alert(result);
          score++
       }else{
          var result = myQuestions[question_count].falseAnswerText;
          alert(result);
          mistake++
       }

    }else{
      var result = myQuestions[question_count].AnswerText;
        alert(result);
        mistake++
    }
        question_count++

       if(question_count < myQuestions.length) {
           loadQuestion();
       } else {
            finalpage();
       }

}

// NEXT BUTTON 
function next(){
	var ans = document.querySelector('input[name=ans]:checked');

    if(ans) {
    	 var user_answer = ans.value;
       if(user_answer === myQuestions[question_count].correctAnswer) {
           score++
       }else{
          mistake++
       }
       question_count++

       if(question_count < myQuestions.length) {
           loadQuestion();
       } else {
          finalpage();
       }
    } else{
      	alert('Please Check the Answer. If you don"t skip the button.');
    }
}

// GO TO FINAL PAGE
function finalpage() 
{
  localStorage.setItem("score", score);
  localStorage.setItem("skip", skip);
  localStorage.setItem("mistake", mistake);
  location.href = "birth.html";
}


