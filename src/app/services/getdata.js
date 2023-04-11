let answers = document.getElementsByClassName("answer");
let object = {};
object.answers=[];
object.question = document.getElementsByClassName("ebook_item_text")[0].innerText
for(var i=0; i<answers.length; i++) {
    console.log(answers[i].innerText);
    if(answers[i].innerText.toString().includes("and this is correct answer") || answers[i].innerText.toString().includes("and this is marked as correct") ) {
        object.correct = i;
    }
    object.answers[i] = answers[i].innerText.toString().replace('\nand this is correct answer', '');
    object.answers[i] = object.answers[i].replace('\nand this is marked as correct', '');
    let incorrectText = document.getElementsByClassName("correct_incorrect_txt");
    
}

console.log(object);


