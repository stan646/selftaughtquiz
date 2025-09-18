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
        }else{
            this.style.display = 'none';
            document.getElementById('submit-btn').style.display = 'block';
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
            document.getElementById('submit-btn').style.display = 'none';
            document.getElementById('next-btn').style.display = 'block';
        }else{
            if (totalQuestions < containerQuestions.length -1 ) {
                this.disabled = true;
                
            }
        }
    } catch (error) {
        console.log('Error occur in ' + error.message);
        
    }
    
});

// submit button

document.getElementById('quizForm').addEventListener('submit', function(event){
    event.preventDefault();//prevent browser submission
    const Marks = []
    const marks = {
        questionMarks: 2 // Each question carry 2 marks
    }

    try {
        // get each question input from html body
        const question1 = document.querySelector('input[name="q1"]:checked');
        const question2 = document.querySelector('input[name="q2"]:checked');
        const question3 = document.querySelector('input[name="q3"]:checked');
        const question4 = document.querySelector('input[name="q4"]:checked');
        const question5 = document.querySelector('input[name="q5"]:checked');
        const question6 = document.querySelector('input[name="q6"]:checked');
        const question7 = document.querySelector('input[name="q7"]:checked');
        const question8 = document.querySelector('input[name="q8"]:checked');
        const question9 = document.querySelector('input[name="q9"]:checked');
        const question10 = document.querySelector('input[name="q10"]:checked');

        // get paragraph for showing incorects and correct after user submit
        const container1 = document.getElementById('c-1');
        const container2 = document.getElementById('c-2');
        const container3 = document.getElementById('c-3');
        const container4 = document.getElementById('c-4');
        const container5 = document.getElementById('c-5');
        const container6 = document.getElementById('c-6');
        const container7 = document.getElementById('c-7');
        const container8 = document.getElementById('c-8');
        const container9 = document.getElementById('c-9');
        const container10 = document.getElementById('c-10');

        // Validate user answers if is correct or incorect
        if (question1.value === 'a') {
            Marks.push(marks.questionMarks);
            container1.innerHTML = 
            `<div class="alert alert-success alert-dismissible w-25"> <button class="btn-close" data-bs-dismiss="alert"></button><span>Correct! ${marks.questionMarks} Marks.</span> </div>`;
            
        }else{
            container1.innerHTML = `<div class="alert alert-danger alert-dismissible w-25"> <button class="btn-close" data-bs-dismiss="alert"></button><span>Incorrect</span> </div>`;
            
        }
        if (question2.value === 'b') {
            Marks.push(marks.questionMarks);
            container2.innerHTML = 
            `<div class="alert alert-success alert-dismissible w-25"> <button class="btn-close" data-bs-dismiss="alert"></button><span>Correct! ${marks.questionMarks} Marks.</span> </div>`;
            
        }else{
            container2.innerHTML = `<div class="alert alert-danger alert-dismissible w-25"> <button class="btn-close" data-bs-dismiss="alert"></button><span>Incorrect</span> </div>`;
            
        }
        if (question3.value === 'a') {
            Marks.push(marks.questionMarks);
            container3.innerHTML = 
            `<div class="alert alert-success alert-dismissible w-25"> <button class="btn-close" data-bs-dismiss="alert"></button><span>Correct! ${marks.questionMarks} Marks.</span> </div>`;
        }else{
           container3.innerHTML = `<div class="alert alert-danger alert-dismissible w-25"> <button class="btn-close" data-bs-dismiss="alert"></button><span>Incorrect</span> </div>`;
            
        }
        if (question4.value === 'b') {
            Marks.push(marks.questionMarks);
            container4.innerHTML = 
            `<div class="alert alert-success alert-dismissible w-25"> <button class="btn-close" data-bs-dismiss="alert"></button><span>Correct! ${marks.questionMarks} Marks.</span> </div>`;
            
        }else{
            container4.innerHTML = `<div class="alert alert-danger alert-dismissible w-25"> <button class="btn-close" data-bs-dismiss="alert"></button><span>Incorrect</span> </div>`;
            
        }
        if (question5.value === 'b') {
            Marks.push(marks.questionMarks);
            container5.innerHTML = 
            `<div class="alert alert-success alert-dismissible w-25"> <button class="btn-close" data-bs-dismiss="alert"></button><span>Correct! ${marks.questionMarks} Marks.</span> </div>`;
            
        }else{
            container5.innerHTML =`<div class="alert alert-danger alert-dismissible w-25"> <button class="btn-close" data-bs-dismiss="alert"></button><span>Incorrect</span> </div>`;
            
        }
        if (question6.value === 'a') {
            Marks.push(marks.questionMarks);
            container6.innerHTML = 
            `<div class="alert alert-success alert-dismissible w-25"> <button class="btn-close" data-bs-dismiss="alert"></button><span>Correct! ${marks.questionMarks} Marks.</span> </div>`;
            
        }else{
            container6.innerHTML =`<div class="alert alert-danger alert-dismissible w-25"> <button class="btn-close" data-bs-dismiss="alert"></button><span>Incorrect</span> </div>`;
            
        }
        if (question7.value === 'b') {
            Marks.push(marks.questionMarks);
            container7.innerHTML = 
            `<div class="alert alert-success alert-dismissible w-25"> <button class="btn-close" data-bs-dismiss="alert"></button><span>Correct! ${marks.questionMarks} Marks.</span> </div>`;
            
        }else{
            container7.innerHTML =`<div class="alert alert-danger alert-dismissible w-25"> <button class="btn-close" data-bs-dismiss="alert"></button><span>Incorrect</span> </div>`;
            
        }
        if (question8.value === 'b') {
            Marks.push(marks.questionMarks);
            container8.innerHTML = 
            `<div class="alert alert-success alert-dismissible w-25"> <button class="btn-close" data-bs-dismiss="alert"></button><span>Correct! ${marks.questionMarks} Marks.</span> </div>`;
            
        }else{
           container8.innerHTML =  `<div class="alert alert-danger alert-dismissible w-25"> <button class="btn-close" data-bs-dismiss="alert"></button><span>Incorrect</span> </div>`;
            
        }
        if (question9.value === 'b') {
            Marks.push(marks.questionMarks);
            container9.innerHTML = 
            `<div class="alert alert-success alert-dismissible w-25"> <button class="btn-close" data-bs-dismiss="alert"></button><span>Correct! ${marks.questionMarks} Marks.</span> </div>`;
            
        }else{
            container9.innerHTML = `<div class="alert alert-danger alert-dismissible w-25"> <button class="btn-close" data-bs-dismiss="alert"></button><span>Incorrect</span> </div>`;
            
        }
        if (question10.value === 'b') {
            Marks.push(marks.questionMarks);
            container10.innerHTML = 
            `<div class="alert alert-success alert-dismissible w-25"> <button class="btn-close" data-bs-dismiss="alert"></button><span>Correct! ${marks.questionMarks} Marks.</span> </div>`;
        }else{
           container10.innerHTML =  `<div class="alert alert-danger alert-dismissible w-25"> <button class="btn-close" data-bs-dismiss="alert"></button><span>Incorrect!</span></div>`;   
        }

        //
        let results = Marks.reduce(totalCalculate);
        console.log(results);
        
        

        // 
        function totalCalculate(ValueA, ValueB){
            return ValueA + ValueB;
        }
        

    } catch (error) {
        
    }
})
