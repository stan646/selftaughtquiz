const htmlQuestions = document.querySelectorAll('.question');
let numbers = 0;
const submitBtn = document.getElementById('submit-btn');



// show only one question
function fun(index){
    htmlQuestions.forEach(q => q.style.display = 'none');
    htmlQuestions[index].style.display = 'block';
}

// start with first question
// fun(numbers);

document.getElementById('level-1').addEventListener('click', ()=>{
    document.getElementById('container-1').style.display = 'block';
    document.getElementById('next-btn').style.display = 'block';
    document.getElementById('prev-btn').style.display = 'block';
    document.getElementById('prev-btn').disabled = true;
   
});

// when clicking Next
document.getElementById('next-btn').addEventListener('click', function(){
    if(numbers < htmlQuestions.length - 1){
        numbers++;
        fun(numbers)
    }else{
        this.style.display = 'none';
        submitBtn.style.display = 'block';
    }
    document.getElementById('prev-btn').disabled = false;
});

// when clicking Prev
document.getElementById('prev-btn').addEventListener('click', function(){
    if (numbers > 0) {
        numbers--;
        fun(numbers);
        submitBtn.style.display = 'none';
         document.getElementById('next-btn').style.display = 'block';
    } else {
        if (numbers < htmlQuestions.length - 1) {
            this.disabled = true;
        }
    }
});

//submit button

document.getElementById('quizForm').addEventListener('submit', function(event){
    const Marks = []
    let questionMarks = 2;

    event.preventDefault();//prevent web refresh

    try {
        // questions element 
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

        // 

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

        // validate user answers if is true or false

        if (question1.value === 'a') {
            Marks.push(questionMarks);
            container1.innerHTML = 
            `<div class="alert alert-success alert-dismissible w-25"> <button class="btn-close" data-bs-dismiss="alert"></button><span>Correct! ${questionMarks} Marks.</span> </div>`;
            
        }else{
            container1.innerHTML = `<div class="alert alert-danger alert-dismissible w-25"> <button class="btn-close" data-bs-dismiss="alert"></button><span>Incorrect</span> </div>`;
            
        }
        if (question2.value === 'b') {
            Marks.push(questionMarks);
            container2.innerHTML = 
            `<div class="alert alert-success alert-dismissible w-25"> <button class="btn-close" data-bs-dismiss="alert"></button><span>Correct! ${questionMarks} Marks.</span> </div>`;
            
        }else{
            container2.innerHTML = `<div class="alert alert-danger alert-dismissible w-25"> <button class="btn-close" data-bs-dismiss="alert"></button><span>Incorrect</span> </div>`;
            
        }
        if (question3.value === 'a') {
            Marks.push(questionMarks);
            container3.innerHTML = 
            `<div class="alert alert-success alert-dismissible w-25"> <button class="btn-close" data-bs-dismiss="alert"></button><span>Correct! ${questionMarks} Marks.</span> </div>`;
        }else{
           container3.innerHTML = `<div class="alert alert-danger alert-dismissible w-25"> <button class="btn-close" data-bs-dismiss="alert"></button><span>Incorrect</span> </div>`;
            
        }
        if (question4.value === 'b') {
            Marks.push(questionMarks);
            container4.innerHTML = 
            `<div class="alert alert-success alert-dismissible w-25"> <button class="btn-close" data-bs-dismiss="alert"></button><span>Correct! ${questionMarks} Marks.</span> </div>`;
            
        }else{
            container4.innerHTML = `<div class="alert alert-danger alert-dismissible w-25"> <button class="btn-close" data-bs-dismiss="alert"></button><span>Incorrect</span> </div>`;
            
        }
        if (question5.value === 'b') {
            Marks.push(questionMarks);
            container5.innerHTML = 
            `<div class="alert alert-success alert-dismissible w-25"> <button class="btn-close" data-bs-dismiss="alert"></button><span>Correct! ${questionMarks} Marks.</span> </div>`;
            
        }else{
            container5.innerHTML =`<div class="alert alert-danger alert-dismissible w-25"> <button class="btn-close" data-bs-dismiss="alert"></button><span>Incorrect</span> </div>`;
            
        }
        if (question6.value === 'a') {
            Marks.push(questionMarks);
            container6.innerHTML = 
            `<div class="alert alert-success alert-dismissible w-25"> <button class="btn-close" data-bs-dismiss="alert"></button><span>Correct! ${questionMarks} Marks.</span> </div>`;
            
        }else{
            container6.innerHTML =`<div class="alert alert-danger alert-dismissible w-25"> <button class="btn-close" data-bs-dismiss="alert"></button><span>Incorrect</span> </div>`;
            
        }
        if (question7.value === 'b') {
            Marks.push(questionMarks);
            container7.innerHTML = 
            `<div class="alert alert-success alert-dismissible w-25"> <button class="btn-close" data-bs-dismiss="alert"></button><span>Correct! ${questionMarks} Marks.</span> </div>`;
            
        }else{
            container7.innerHTML =`<div class="alert alert-danger alert-dismissible w-25"> <button class="btn-close" data-bs-dismiss="alert"></button><span>Incorrect</span> </div>`;
            
        }
        if (question8.value === 'b') {
            Marks.push(questionMarks);
            container8.innerHTML = 
            `<div class="alert alert-success alert-dismissible w-25"> <button class="btn-close" data-bs-dismiss="alert"></button><span>Correct! ${questionMarks} Marks.</span> </div>`;
            
        }else{
           container8.innerHTML =  `<div class="alert alert-danger alert-dismissible w-25"> <button class="btn-close" data-bs-dismiss="alert"></button><span>Incorrect</span> </div>`;
            
        }
        if (question9.value === 'b') {
            Marks.push(questionMarks);
            container9.innerHTML = 
            `<div class="alert alert-success alert-dismissible w-25"> <button class="btn-close" data-bs-dismiss="alert"></button><span>Correct! ${questionMarks} Marks.</span> </div>`;
            
        }else{
            container9.innerHTML = `<div class="alert alert-danger alert-dismissible w-25"> <button class="btn-close" data-bs-dismiss="alert"></button><span>Incorrect</span> </div>`;
            
        }
        if (question10.value === 'b') {
            Marks.push(questionMarks);
            container10.innerHTML = 
            `<div class="alert alert-success alert-dismissible w-25"> <button class="btn-close" data-bs-dismiss="alert"></button><span>Correct! ${questionMarks} Marks.</span> </div>`;
        }else{
           container10.innerHTML =  `<div class="alert alert-danger alert-dismissible w-25"> <button class="btn-close" data-bs-dismiss="alert"></button><span>Incorrect!</span></div>`;
            
        }

        // calclulate total mark
        const totalMark = Marks.reduce(markscalculate);
        console.log(totalMark);
        

        function markscalculate(valueA, valueB){
            return valueA + valueB;
        }

        
    } catch (error) {
        console.log('something went wrong' + error.message);
    }

})