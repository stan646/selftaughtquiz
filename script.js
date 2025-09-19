document.getElementById('quizForm').addEventListener('submit', function (event) {
    event.preventDefault();

    let score = 0;
    let totalQuestions = 10;

    // ✅ Store all correct answers here
    const answers = {
        q1: "Hyper Text Markup Language",
        q2: "<h1>",
        q3: "1995",
        q4: "Cascading Style Sheets",
        q5: "function",
        q6: "console.log()",
        q7: "Bootstrap",
        q8: "== compares value, === compares value & type",
        q9: "Document Object Model",
        q10: "querySelector"
    };

    for (let i = 1; i <= totalQuestions; i++) {
        const selected = document.querySelector(`input[name="q${i}"]:checked`);
        if (selected) {
            if (selected.value === answers[`q${i}`]) {
                score++;
            }
        } else {
            console.log(`Question ${i} not answered`);
        }
    }

    alert(`Your score is: ${score}/${totalQuestions}`);
});
