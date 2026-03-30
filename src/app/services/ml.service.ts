import { Injectable } from'@angular/core';
import { UtilitiesService } from'./utilities.service';


@Injectable({
  providedIn:'root'
})
export class MLService {

  constructor(
    private utilitiesService: UtilitiesService
  ) { }

  getQuestions() {
    return this.utilitiesService.randomizeQuestions([
      {
  "question": "Which statement best describes a machine learning system?",
  "answers": [
    "It follows a fixed set of human-written rules",
    "It figures out rules through trial and error",
    "It cannot learn from data",
    "It only works with perfect inputs"
  ],
  "correct": 1
},
{
  "question": "Which metric measures the proportion of actual positives that were correctly identified?",
  "answers": ["Recall", "Precision", "Accuracy", "Specificity"],
  "correct": 0
},
{
  "question": "Precision is the best metric to optimize when:",
  "answers": ["You only care about overall correctness", "False positives are very costly", "False negatives are very costly", "You have perfectly balanced classes"],
  "correct": 1
},
{
  "question": "Recall is the best metric to optimize when:",
  "answers": ["You want to avoid missing any positive cases", "Your model outputs continuous values", "You want to maximize overall accuracy", "False positives are more harmful than false negatives"],
  "correct": 0
},
{
  "question": "Which metric is the harmonic mean of precision and recall?",
  "answers": ["Specificity", "Accuracy", "F1 Score", "ROC AUC"],
  "correct": 2
},
{
  "question": "The F1 score is most useful when:",
  "answers": ["You want to balance false positives and false negatives", "You only care about ranking predictions", "Classes are balanced and accuracy is sufficient", "You have no labeled data"],
  "correct": 0
},
{
  "question": "A ROC curve plots:",
  "answers": ["Accuracy vs Error Rate", "True Positive Rate vs False Positive Rate", "Predicted labels vs Actual labels", "Precision vs Recall"],
  "correct": 1
},
{
  "question": "A model with a ROC AUC of 0.5 is best described as:",
  "answers": ["Equivalent to random guessing", "Perfect", "Better than random guessing", "Worse than random guessing"],
  "correct": 0
},
{
  "question": "Accuracy becomes a misleading metric when:",
  "answers": ["The dataset is highly imbalanced", "Classes are perfectly balanced", "You use cross-validation", "The model outputs probabilities"],
  "correct": 0
},
{
  "question": "If a model predicts 90% of samples correctly, but the positive class is only 1% of the data, which metric should you trust the most?",
  "answers": ["ROC AUC", "Accuracy", "Precision and Recall", "F1 Score"],
  "correct": 2
},
{
  "question": "Which situation calls for maximizing recall over precision?",
  "answers": ["Predicting customer lifetime value", "Medical diagnosis of a dangerous disease", "Recommending movies to users", "Email spam detection"],
  "correct": 1
},
{
  "question": "Which metric measures the proportion of predicted positives that are actually correct?",
  "answers": ["Specificity", "Precision", "Recall", "F1 Score"],
  "correct": 1
},
{
  "question": "Which metric is most sensitive to false negatives?",
  "answers": ["Accuracy", "Precision", "Recall", "ROC AUC"],
  "correct": 2
},
{
  "question": "When classes are highly imbalanced, which metric is LEAST useful?",
  "answers": [ "Precision", "Recall", "F1 Score", "Accuracy"],
  "correct": 3
},
{
  "question": "A high precision but low recall model indicates:",
  "answers": ["It rarely misses positives but often mislabels negatives", "It catches most positives but makes many false alarms", "It rarely makes false positives but misses many positives", "It performs equally well on both classes"],
  "correct": 2
},
{
  "question": "Which metric is best for evaluating ranking-based classifiers?",
  "answers": ["ROC AUC", "Accuracy", "Precision", "Specificity"],
  "correct": 0
},
{
  "question": "Which situation calls for maximizing precision over recall?",
  "answers": ["Fraud detection", "Cancer screening", "Spam filtering", "Autonomous vehicle pedestrian detection"],
  "correct": 2
},
{
  "question": "What does a point in the upper-left corner of a ROC curve represent?",
  "answers": ["High TPR and low FPR", "Low TPR and high FPR", "Random guessing", "Perfect precision but zero recall"],
  "correct": 0
},
{
  "question": "Which metric is calculated as (TP + TN) / (Total Samples)?",
  "answers": [ "Recall", "Precision", "F1 Score", "Accuracy"],
  "correct": 3
},
{
  "question": "Which metric is most appropriate when false positives and false negatives are equally important?",
  "answers": ["Precision", "Recall", "F1 Score", "Specificity"],
  "correct": 2
},
{
  "question": "A model with high recall but low precision tends to:",
  "answers": ["Miss many positive cases", "Produce many false positives", "Have perfect accuracy", "Be unsuitable for imbalanced datasets"],
  "correct": 1
},





  ]);
  }
}
