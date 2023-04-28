let hasRun = 0;
let questions = [];
function getQuestion() {
    let answers = document.getElementsByClassName("answer");
    let object = {};
    object.answers=[];
    object.question = document.getElementsByClassName("ebook_item_text")[0].innerText
    for(var i=0; i<answers.length; i++) {
        if(answers[i].innerText.toString().includes("and this is correct answer") || answers[i].innerText.toString().includes("and this is marked as correct") ) {
            object.correct = i;
        }
        object.answers[i] = answers[i].innerText.toString().replace('\nand this is correct answer', '');
        object.answers[i] = object.answers[i].replace('\nand this is marked as correct', '');
        object.answers[i] = object.answers[i].replace('\nand this is marked as incorrect', '');
    }
    questions.push(object);
    next();
}
function next() {
    let nextBtn = document.getElementById("next");    
    if(document.getElementById("btn-confirmed") == undefined) {
        nextBtn.click();
        setTimeout(getQuestion, 2000);
    }
    console.log('questions');
    console.log( questions);
}
getQuestion();



