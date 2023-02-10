import { createRequire } from "module";
const require = createRequire(import.meta.url);
const data = require("../data/ccsp.json");

const fs = require('fs');

console.log(data[0]);
const destinationFile = 'data/secure-software-design.ttl';
fs.writeFile(destinationFile, "@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> . \n", {}, err => {});
const writer = fs.createWriteStream(destinationFile, {
    flags: 'a'
});
writer.write("@prefix core: <http://www.kevindornellas.me/core#> . \n");
writer.write("@prefix question: <http://www.kevindornellas.me/question#> . \n");
writer.write("@prefix answer: <http://www.kevindornellas.me/answer#> . \n");
writer.write("core:ccsp a rdfs:list; \n");
writer.write('        rdfs:label "CCSP Quiz Questions" . \n\n');
writer.write(' \n');
let questionNumber = 0;
for( const question of data) {
    questionNumber = questionNumber + 1;
    const questionString = 'q' + questionNumber;

    writeHeader(writer, questionString, question.question);
    writeAnswers(writer, questionString, question.answers, question.correct);

    writer.write(' \n');
    writer.write(' \n');
}

function writeHeader(writer, questionString, question) {
    writer.write('core:ccsp core:hasQuestion question:' + questionString + ' . \n');
    writer.write('question:' + questionString + ' \n');
    writer.write('rdfs:label "'+ question +'"; \n');
    writer.write('core:hasAnswers ');
}

function writeAnswers(writer, questionString, answers, correct) {
    let answerNum = 0;
    for( const answer of answers) {        
        writer.write('answer:' + questionString + 'a' + answerNum);
        if(answerNum != answers.length - 1) {
            writer.write(' , \n');
        } else {
            writer.write(' ; \n');
        }
        
        answerNum = answerNum + 1;
    }
    writer.write('core:hasCorrectAnswer answer:' + questionString + 'a' + correct + ' . \n\n');
    answerNum = 0;
    for( const answer of answers) {        
        writer.write('answer:' + questionString + 'a' + answerNum + ' a core:answer; \n');
        writer.write('rdfs:label "'+ answer +'" . \n');
        answerNum = answerNum + 1;
    }
}