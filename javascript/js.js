                (function() {
                  const myQuestions = [
                    {
                      question: "O livro diário é um livro contabil de preenchmento opcional, onde são lançadas as operações diárias de uma empresa. Neste livro são registrados os fatos \n\
                                 contabeis em partidas dobrqadas?",
                      answers: {
                        a: "Verdadeiro",
                        b: "Falso"
                      },
                      correctAnswer: "a"
                    },
                    {
                      question: "Não é conta patrimonial:",
                      answers: {
                        a: "Salários a pagar",
                        b: "Clientes",
                        c: "Adiantamento de clientes",
                        d: "Encargos de depreciação"
                      },
                      correctAnswer: "d"
                    },
                    {
                      question: "Os bens que a empresa possui são representados por contas de:",
                      answers: {
                        a: "Receita",
                        b: "Despesa",
                        c: "Ativo",
                        d: "Passivo",
                        d: "Compensação",
                      },
                      correctAnswer: "c"
                    },
                    {
                      question: "Segundo o Código Civil, dentre os chamados livros comerciais, aquele considerado obrigatório, na sociedade empresária, é o livro:",
                      answers: {
                        a: "Razão",
                        b: "Caixa",
                        c: "Lalur",
                        d: "Contas-Correntes",
                        d: "Diário",
                      },
                      correctAnswer: "e"
                    },
                    {
                      question: "A receita líquida pode ser obtida mediante qual relação?",
                      answers: {
                        a: "Lucro operacional bruto - deduções das vendas",
                        b: "Receita bruta - deduções das vendas",
                        c: "Lucro operacional bruto - despesas operacionais",
                        d: "Receita bruta - despesas operacionais",
                        d: " Receita bruta - custos das mercadorias vendidas (cmv)",
                      },
                      correctAnswer: "b"  
                    }
                    
                  ];

                  function buildQuiz() {
                    // we'll need a place to store the HTML output
                    const output = [];

                    // for each question...
                    myQuestions.forEach((currentQuestion, questionNumber) => {
                      // we'll want to store the list of answer choices
                      const answers = [];

                      // and for each available answer...
                      for (letter in currentQuestion.answers) {
                        // ...add an HTML radio button
                        answers.push(
                          `<label>
                             <input type="radio" name="question${questionNumber}" value="${letter}">
                              ${letter} :
                              ${currentQuestion.answers[letter]}
                           </label>`
                        );
                      }

                      // add this question and its answers to the output
                      output.push(
                        `<div class="slide">
                           <div class="question"> ${currentQuestion.question} </div>
                           <div class="answers"> ${answers.join("")} </div>
                         </div>`
                      );
                    });
                    // finally combine our output list into one string of HTML and put it on the page
                    quizContainer.innerHTML = output.join("");
                  }

                  function showResults() {
                    // gather answer containers from our quiz
                    const answerContainers = quizContainer.querySelectorAll(".answers");

                    // keep track of user's answers
                    let numCorrect = 0;

                    // for each question...
                    myQuestions.forEach((currentQuestion, questionNumber) => {
                      // find selected answer
                      const answerContainer = answerContainers[questionNumber];
                      const selector = `input[name=question${questionNumber}]:checked`;
                      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

                      // if answer is correct
                      if (userAnswer === currentQuestion.correctAnswer) {
                        // add to the number of correct answers
                        numCorrect++;

                        // color the answers green
                        answerContainers[questionNumber].style.color = "lightgreen";
                      } else {
                        // if answer is wrong or blank
                        // color the answers red
                        answerContainers[questionNumber].style.color = "red";
                      }
                    });

                    // show number of correct answers out of total
                    resultsContainer.innerHTML = 'Você acertou '+numCorrect+' das '+ myQuestions.length+ ' questões <br><input type="submit" value="Reiniciar" onclick"reiniciar()">';
                  }

                  function showSlide(n) {
                    slides[currentSlide].classList.remove("active-slide");
                    slides[n].classList.add("active-slide");
                    currentSlide = n;

                    if (currentSlide === 0) {
                      previousButton.style.display = "none";
                    } else {
                      previousButton.style.display = "inline-block";
                    }

                    if (currentSlide === slides.length - 1) {
                      nextButton.style.display = "none";
                      submitButton.style.display = "inline-block";
                    } else {
                      nextButton.style.display = "inline-block";
                      submitButton.style.display = "none";
                    }
                  }

                  function showNextSlide() {
                    showSlide(currentSlide + 1);
                  }

                  function showPreviousSlide() {
                    showSlide(currentSlide - 1);
                  }

                  const quizContainer = document.getElementById("quiz");
                  const resultsContainer = document.getElementById("results");
                  const submitButton = document.getElementById("submit");

                  // display quiz right away
                  buildQuiz();

                  const previousButton = document.getElementById("previous");
                  const nextButton = document.getElementById("next");
                  const slides = document.querySelectorAll(".slide");
                  let currentSlide = 0;

                  showSlide(0);

                  // on submit, show results
                  submitButton.addEventListener("click", showResults);
                  previousButton.addEventListener("click", showPreviousSlide);
                  nextButton.addEventListener("click", showNextSlide);
                })();             
                
                
function reiniciar() {
    alert(1);
    document.submit;
}                



/*$(function(){
    var loading = $('#loadbar').hide();
    $(document)
    .ajaxStart(function () {
        loading.show();
    }).ajaxStop(function () {
    	loading.hide();
    });
    
    $("label.btn").on('click',function () {
    	var choice = $(this).find('input:radio').val();
//    	$('#loadbar').show();
//    	$('#quiz').fadeOut();
    	setTimeout(function(){
           $( "#answer" ).html(  $(this).checking(choice) );      
//            $('#quiz').show();
//            $('#loadbar').fadeOut();
           /* something else */
    	/*
         * descomentar auieee
         * }, 1500);
    });

    $ans = 3;

    $.fn.checking = function(ck) {
        if (ck != $ans){
            return 'INCORRECT';
        }
        else {
            return 'CORRECT';
        }
    }; 
});	
*/