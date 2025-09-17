// get question from html page (elements in a form of query selector)
const containerQuestions = document.querySelectorAll('.question');

// get total number of questions from the containerQuestions by using next and prev
let totalQuestions = 0;

// function that allow each question to be visible when it called
function loopQuestion(Index){
    containerQuestions.forEach(question => question.style.display = 'none'); //hide all questions
    containerQuestions[Index].style.display = 'block'; //show each question from array
}

// show first question


// call the button to show the first question from the beginner level
document.getElementById('level-1').addEventListener('click', function(){
    //if the total number 
    try {
        loopQuestion(totalQuestions);
        document.getElementById('next-btn').style.display = 'block';
        document.getElementById('prev-btn').style.display = 'block';
        document.getElementById('prev-btn').disabled = true;
        this.disabled = true;
    } catch (error) {
        console.log('Something is not okay !' + error.message);
    }
});

// next button
document.getElementById('next-btn').addEventListener('click', function(){
    try {
        // if totalNumber of question is less than 1 increase quection.
        if (totalQuestions < containerQuestions.length -1) {
            totalQuestions++; //increase question by 1
            loopQuestion(totalQuestions);//show the current question
        }

        document.getElementById('prev-btn').disabled = false;
    } catch (error) {
        console.log('Error occur in ' + error.message);
        
    }
    
});

// prev button
document.getElementById('prev-btn').addEventListener('click', function(){
    try {
        // if totalNumber of question is great than 1 increase quection.
        if (totalQuestions > 0) {
            totalQuestions--; //decrease question by 1
            loopQuestion(totalQuestions);//show the current question
        }else{
            if (totalQuestions < containerQuestions.length -1 ) {
                this.disabled = true;
            }
        }
    } catch (error) {
        console.log('Error occur in ' + error.message);
        
    }
    
});
