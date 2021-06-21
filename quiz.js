(function(){
        const Questions=[
            {
                question: "Name the Indian State banned 12 brands of pan masala for a period of 1 year?",
                answers:{
                a:"Uttar Pradesh",
                b:"Bihar",
                c:"Gujarat",
                },
                correctAnswer:"b"
            },

            {
                question:"Entomology is the science that studies:",
                answers:{
                    a:"Insects",
                    b:"The formation of rocks",
                    c:"Behavior of human beings",
                },
                correctAnswer:"a"
            },
            {
                question:" Who is the RBI Governor of India?",
                answers:{
                    a:"Urjit Ravindra Patel",
                    b:"Nirmala Sitharam",
                    c:"Shaktikanta Das",
                },
                correctAnswer:"c"
            },
            {
                question:"Who is the President of India (as of 2021)?",
                answers:{
                    a:"Ram Nath Kovind",
                    b:"Pranab Mukherjee",
                    c:"Pratibha Patil",
                },
                correctAnswer:"a"
            },        
            {
                question:"First woman President of India:",
                answers:{
                    a:"Pratibha Patil",
                    b:"Indira Gandhi",
                    c:"Sonia Gandhi",
                },
                correctAnswer:"a"
            },
        ];

        function buildQuiz(){
            const output=[];

            Questions.forEach((currentQuestion, questionNo) => {
                const answers= [];

                for(letter in currentQuestion.answers)(
                    answers.push(
                        `<label id="${questionNo}${letter}" href="#">
                            <input type="radio" name="question${questionNo}" value="${letter}" id="${question}"></input>               
                            ${letter} :
                            ${currentQuestion.answer[letter]}
                        </label>`
                    );
                }

                output.push(
                    `<div class="slide">
                        <div class="question">${currentQuestion.question} </div>
                        <div class="answers">${answers.join("")} </div>
                    </div>`
                );    
            
            });

            container.innerHTML=output.join("");   
        }

        function showResults(){
            const answerContainers = container.querySelectorAll(".answers");
            let numCorrect=0;
            
            Questions.forEach((currentQuestion, questionNo) => {
                const answerContainer =answerContainers[questionNo];
                const selector = `label input[name=question${questionNo}]:checked`;
                const userAnswer= (answerContainer.querySelector(selector) || {}).value;
                const answerID= (answerContainer.querySelector(selector) || {}).id;
                const selector1= `label[id="${answerID}"]`;
                var answerElem = answerContainer.querySelector(selector1);
                const selector2 = `label[id="${questionNo}${currentQuestion.correctAnswer}"]`;
                var answerElem1 = answerContainer.querySelector(selector2);

                if(userAnswer === currentQuestion.correctAnswer){
                    numCorrect++;

                    answerElem.style.color = "green";
                    answerElem.style.fontWeight = "800";
                }

                else{
                    answerElem1.style.color="red";
                    answerElem1.style.fontWeight = "800" ;
                }

            });

            resultsconatiner.innerHTML=`${numCorrect} / ${Questions.length}`;
        }

        function showSlide(n){
            slides[currentSlide].classList.remove("active-slide");
            slides[n].classList.add("active-slide");
            currentSlide=n;

            if(currentSlide === 0){
                previousButton.style.display="none";
            }
            
            else{
                previousButton.style.display="inline-block";
            }

            if(currentSlide === slides.length-1){
                nextbutton.style.display="none";
                submitbutton.style.display="inline-block";
            }

            else{
                nextButton.style.display="inline-block";
                submitbutton.style.display="none";
            }
        }

        function showNextSlide(){
            showNextSlide(currentSlide + 1);
        }

        function showPreviousSlide(){
            showNextSlide(currentSlide-1);
        }

        const container= document.getElementById("quiz");
        const resultscontainer = document.getElementById("results");
        const submitbutton= document.getElementById("submit");

        buildQuiz();

        const previousButton = document.getElementById("previous");
        const nextButton = document.getElementById("next");
        const slides= document.getElementById("next");
        let currentSlide= 0;

        showSlide(0);

        submitbutton.addEventListener("click", showResults);
        previousButton.addEventListener("click", showPreviousSlide);
        nextButton.addEventListener("click", showNextSlide);
    })();