let hasRun = 0;
let questions = [];
function getQuestion() {
    let answers = document.getElementsByClassName("answer");
    let object = {};
    object.answers=[];
    object.question = document.getElementsByClassName("ebook_item_text")[0].innerText
    for(var i=0; i<126; i++) {
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

let questions1 = [];
let incrementOffset = 0;
let questionsArray = [
    1,5,7,9,11,14,16,18,19,20,25,26,27,31,35,37,43,49,53,56,61,64,65,67,69,71,73,74,75,76,80,85,86,87,89,92,95,105,107,108,113,117,121
]
for(let i=1; i<145; i++){
    let object = {};
    object.answers=[];
    let idString = "c08-ex-0";
    let iString = i +"";
    if(iString.toString().length == 2) {
        idString = idString + "0"+ i;
    } if (iString.toString().length == 1) {
        idString = idString + "00"+ i;
    } if (iString.toString().length == 3) {
        idString = idString + i;
    }
    let dataArray = document.getElementById(idString);
    console.log(dataArray);
    if(dataArray != null) {
        dataArray = dataArray.innerText.split("\n");
        
        if(dataArray.length > 5) {
            let tooMuch = dataArray.length - 5;
            let questionText = "";
            for(let k=0; k<tooMuch; k++){            
                questionText = questionText + dataArray[k];
            }
            object.question = questionText;
            for(let j=tooMuch; j<dataArray.length; j++){
                object.answers.push(dataArray[j])
            }
        } else {
            object.question = dataArray[0];
            for(let j=1; j<5; j++){
                object.answers.push(dataArray[j])
            }    
        }
        if(questionsArray.includes(i - incrementOffset)) {
            questions1.push(object);
            console.log(questions1);
        }
        
    } else {
        incrementOffset = incrementOffset + 1;
    }
}




let dataArray = document.getElementById("c01-ex-0008" )
let object = {};
object.answers=[];
if(dataArray.length > 5) {
    let tooMuch = dataArray.length - 5;
    let questionText = "";
    for(let k=0; k<tooMuch; k++){            
        questionText = questionText + dataArray[k];
    }
    object.question = questionText;
    console.log(object)
    for(let j=tooMuch; j<dataArray.length; j++){
        object.answers.push(dataArray[j])
    }
}