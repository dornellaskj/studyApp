let answers = document.getElementsByClassName("answer");
let object = {};
object.answers=[];
object.question = document.getElementsByClassName("ebook_item_text")[0].innerText
for(var i=0; i<answers.length; i++) {
    console.log(answers[i].innerText);
    object.answers[i] = answers[i].innerText.toString().replace('\nand this is correct answer', '');
    let incorrectText = document.getElementsByClassName("correct_incorrect_txt");
    if(incorrectText[i].innerHTML.includes("and this is correct answer") ) {
        object.correct = i;
    }    
}

console.log(object);


