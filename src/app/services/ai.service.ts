import { Injectable } from'@angular/core';
import { UtilitiesService } from'./utilities.service';


@Injectable({
  providedIn:'root'
})
export class AIService {

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
  "question": "Which of the following is an example of flawed data causing AI failure?",
  "answers": [
    "AI identifying cancer because many cancer images contained a ruler",
    "AI needing more compute resources",
    "AI taking longer to train on large datasets",
    "AI refusing to classify grayscale images"
  ],
  "correct": 0
},
{
  "question": "Why can AI interviewing candidates be problematic?",
  "answers": [
    "AI cannot understand jokes or conversational nuance",
    "AI always selects the best candidate",
    "AI is guaranteed to remove bias",
    "AI can perfectly interpret tone and sarcasm"
  ],
  "correct": 0
},
{
  "question": "What risk arises when training AI on historical hiring decisions?",
  "answers": [
    "It may reinforce past biases and assume previous decisions were correct",
    "It will ignore all patterns in the data",
    "It will always hire the most qualified candidate",
    "It will reject all candidates with missing data"
  ],
  "correct": 0
},
{
  "question": "Which of the following describes ANI (Artificial Narrow Intelligence)?",
  "answers": [
    "AI that surpasses humans at all tasks",
    "AI that surpasses humans at one specific task",
    "AI like HAL or C3PO",
    "AI that can reason like a human across all domains"
  ],
  "correct": 1
},
{
  "question": "Why did the Markov chain trained on Disney songs repeat 'under the sea'?",
  "answers": [
    "It was designed to only output that phrase",
    "It lacked long-term memory and couldn't track repetition",
    "It was trained incorrectly",
    "It was using a neural network instead of a Markov chain"
  ],
  "correct": 1
},
{
  "question": "What is a key limitation of current AI memory systems?",
  "answers": [
    "AI can remember stories indefinitely",
    "AI loses important context over long sequences",
    "AI can track hundreds of steps without error",
    "AI can reason backward as easily as forward"
  ],
  "correct": 1
},
{
  "question": "What is the role of the Discriminator in a GAN?",
  "answers": [
    "To generate new samples",
    "To clean the dataset",
    "To determine whether a sample is real or generated",
    "To compress the training data"
  ],
  "correct": 2
},
{
  "question": "Why do self-driving cars struggle with kangaroos?",
  "answers": [
    "They cannot detect animals",
    "They rely heavily on patterns seen during training and get confused by unfamiliar motion",
    "They are only designed for highway driving",
    "They cannot process images in real time"
  ],
  "correct": 1
},
{
  "question": "What makes Random Forests powerful?",
  "answers": [
    "They use a single deep decision tree",
    "They combine many decision trees to improve accuracy",
    "They require no training data",
    "They only work for image classification"
  ],
  "correct": 1
},
{
  "question": "What is a major risk of using a highly specialized AI to maximize cockroach farming?",
  "answers": [
    "It may optimize only for cockroach production and ignore broader consequences",
    "It will refuse to run unless supervised by a human",
    "It will automatically balance environmental impact",
    "It will stop working if too many cockroaches are produced"
  ],
  "correct": 0
},
{
  "question": "Why do people tolerate quirks in devices like Roombas?",
  "answers": [
    "They are extremely expensive to replace",
    "Their value outweighs their small annoyances",
    "They require no electricity",
    "They are capable of full household automation"
  ],
  "correct": 1
},
{
  "question": "What limitation was shown when AI was used to identify gravitational lensing in astronomy?",
  "answers": [
    "AI was too slow to process images",
    "AI required humans to catch discoveries it would have missed",
    "AI refused to classify rare events",
    "AI could only analyze black‑and‑white images"
  ],
  "correct": 1
},
{
  "question": "Which statement best describes Artificial Narrow Intelligence (ANI)?",
  "answers": [
    "AI that surpasses humans at a single specific task",
    "AI that can reason across all domains",
    "AI like HAL or C3PO",
    "AI that requires no training data"
  ],
  "correct": 0
},
{
  "question": "Which of the following describes Artificial General Intelligence (AGI)?",
  "answers": [
    "AI that is only good at repetitive tasks",
    "AI that can understand and reason like a human across many domains",
    "AI that requires massive datasets to function",
    "AI used in vacuum robots"
  ],
  "correct": 1
},
{
  "question": "What is the goal of 'One Shot' training?",
  "answers": [
    "Training AI with minimal data while achieving similar results to big‑data training",
    "Training AI to run on a single computer",
    "Training AI to work without supervision",
    "Training AI to forget unnecessary information"
  ],
  "correct": 0
},
{
  "question": "Why does modern AI require massive amounts of data?",
  "answers": [
    "AI struggles with tasks that are simple for humans",
    "AI cannot store information efficiently",
    "AI models are intentionally inefficient",
    "AI must always be trained on every possible scenario"
  ],
  "correct": 0
},
{
  "question": "What is an example of transfer learning?",
  "answers": [
    "Training an AI from scratch for every new task",
    "Using a pre‑trained language model to generate metal band names",
    "Deleting an AI’s memory before retraining",
    "Training an AI only on numerical data"
  ],
  "correct": 1
},
{
  "question": "What limitation was shown when an AI was trained to play Mario?",
  "answers": [
    "It could not recognize enemies",
    "It got confused when it needed to move backward instead of forward",
    "It refused to collect coins",
    "It could not jump over obstacles"
  ],
  "correct": 1
},
{
  "question": "What problem occurs when AI tries to maintain long‑term context?",
  "answers": [
    "AI remembers too much irrelevant information",
    "AI loses crucial details as sequences get longer",
    "AI becomes too slow to function",
    "AI stops generating outputs"
  ],
  "correct": 1
},
{
  "question": "What does convolution help AI do?",
  "answers": [
    "Keep track of context for longer periods",
    "Forget unnecessary information",
    "Generate images more quickly",
    "Avoid overfitting during training"
  ],
  "correct": 0
},
{
  "question": "Why do self‑driving cars struggle with kangaroos?",
  "answers": [
    "They cannot detect animals",
    "They get confused by unfamiliar motion patterns they were not trained on",
    "They only work on highways",
    "They cannot process images in real time"
  ],
  "correct": 1
},
{
  "question": "Why might self‑driving cars fail in a kidnapping scenario?",
  "answers": [
    "They cannot detect human speech",
    "They lack situational awareness beyond their training data",
    "They cannot drive at high speeds",
    "They rely entirely on GPS"
  ],
  "correct": 1
},
{
  "question": "Which statement best describes Artificial General Intelligence (AGI)?",
  "answers": [
    "AI that surpasses humans at a single specific task",
    "AI that can understand, learn, and reason across many domains like a human",
    "AI used in household robots like Roombas",
    "AI that requires no training data"
  ],
  "correct": 1
},
{
  "question": "Which of the following is an example of Artificial Narrow Intelligence (ANI)?",
  "answers": [
    "A system that can perform any intellectual task a human can",
    "A model that generates metal band names using transfer learning",
    "A robot capable of human‑level reasoning",
    "A fictional android like Data from Star Trek"
  ],
  "correct": 1
},
{
  "question": "Why is AGI fundamentally different from ANI?",
  "answers": [
    "AGI can reason broadly across domains, while ANI is limited to one task",
    "ANI requires more data than AGI",
    "AGI cannot learn new tasks",
    "ANI always outperforms AGI"
  ],
  "correct": 0
},
{
  "question": "Which example best illustrates transfer learning?",
  "answers": [
    "Training a model from scratch for every new task",
    "Using a pre‑trained language model to generate metal band names",
    "Deleting all model weights before retraining",
    "Training an AI only on numerical data"
  ],
  "correct": 1
},
{
  "question": "What is the purpose of 'One Shot' training?",
  "answers": [
    "To train AI with minimal data while achieving similar results to big‑data training",
    "To eliminate the need for neural networks",
    "To allow AI to train without any labeled data",
    "To reduce the number of output classes"
  ],
  "correct": 0
},
{
  "question": "Why do modern AI systems rely heavily on big data?",
  "answers": [
    "AI struggles with tasks that are simple for humans and needs massive datasets",
    "AI cannot operate without internet access",
    "AI models are intentionally designed to be inefficient",
    "AI must always be trained on every possible scenario"
  ],
  "correct": 0
},
{
  "question": "Which scenario demonstrates a limitation of AI memory?",
  "answers": [
    "AI perfectly recalling long stories without losing context",
    "AI losing crucial details when processing long sequences",
    "AI remembering every step of a recipe indefinitely",
    "AI easily reasoning backward when needed"
  ],
  "correct": 1
},
{
  "question": "Which example shows ANI outperforming humans at a single task?",
  "answers": [
    "A chess engine that consistently beats grandmasters",
    "A robot capable of general conversation and emotional reasoning",
    "A system that can perform any intellectual task a human can",
    "A fictional AI like HAL 9000"
  ],
  "correct": 0
},
{
  "question": "Which of the following is a characteristic of AGI as seen in fiction?",
  "answers": [
    "It can only perform repetitive tasks",
    "It can reason, converse, and understand context like a human",
    "It requires massive datasets to perform simple tasks",
    "It cannot adapt to new situations"
  ],
  "correct": 1
},
{
  "question": "Which statement best explains why ANI is the type of AI we have today?",
  "answers": [
    "ANI can perform a wide range of tasks like a human",
    "ANI excels at one specific task but cannot generalize beyond it",
    "ANI requires no training data",
    "ANI is capable of long‑term reasoning and memory"
  ],
  "correct": 1
},
{
  "question": "In the sandwich analogy for neural networks, what does the hidden layer represent?",
  "answers": [
    "The ingredients humans like the most",
    "The internal decision-making cells between inputs and outputs",
    "The final output of the network",
    "The training dataset"
  ],
  "correct": 1
},
{
  "question": "What is the purpose of a 'punisher node' in the sandwich analogy?",
  "answers": [
    "To reward ingredients like peanut butter",
    "To penalize ingredients that are never yummy, like dirt or eggshells",
    "To generate new sandwich combinations",
    "To determine the final sandwich score"
  ],
  "correct": 1
},
{
  "question": "Why might an AI incorrectly conclude that humans hate all sandwiches in the sandwich analogy?",
  "answers": [
    "Because the AI only evaluates sandwiches with perfect ingredients",
    "Because the number of truly yummy sandwiches is very small compared to all possible combinations",
    "Because the AI cannot process ingredient lists",
    "Because the AI is trained only on marshmallow sandwiches"
  ],
  "correct": 1
},
{
  "question": "Which statement best describes a Markov Chain?",
  "answers": [
    "A lightweight model that predicts the next item based only on a short memory of previous items",
    "A deep neural network with hundreds of layers",
    "A model that can hold long-term context like an RNN",
    "A system that always produces unique outputs"
  ],
  "correct": 0
},
{
  "question": "Why do Markov Chains become unwieldy as memory length increases?",
  "answers": [
    "They require GPUs to function",
    "The number of possible state combinations grows rapidly",
    "They cannot store more than 10 words",
    "They stop predicting text entirely"
  ],
  "correct": 1
},
{
  "question": "What advantage do RNNs have over Markov Chains?",
  "answers": [
    "They require no training data",
    "They can maintain long-term memory using LSTM or convolution",
    "They always train faster",
    "They only work for image classification"
  ],
  "correct": 1
},
{
  "question": "Why did the Markov Chain trained on Disney songs repeat 'under the sea'?",
  "answers": [
    "It was designed to only output that phrase",
    "It lacked long-term memory and couldn't track repetition",
    "It was trained incorrectly",
    "It was using an RNN instead of a Markov Chain"
  ],
  "correct": 1
},
{
  "question": "What is a Random Forest?",
  "answers": [
    "A single deep decision tree",
    "A collection of decision trees whose combined output improves accuracy",
    "A neural network with convolution layers",
    "A type of evolutionary algorithm"
  ],
  "correct": 1
},
{
  "question": "Why are Random Forests compared to polling many people about jelly beans in a jar?",
  "answers": [
    "Each tree gives a guess, and the combined guesses are more accurate",
    "Each tree is trained on candy data",
    "Random Forests only work with numerical inputs",
    "Random Forests require human voting to function"
  ],
  "correct": 0
},
{
  "question": "What does hill climbing represent in machine learning?",
  "answers": [
    "Randomly selecting solutions",
    "Always moving toward a better solution step by step",
    "Resetting the model after each iteration",
    "Training multiple models at once"
  ],
  "correct": 1
},
{
  "question": "What is the core idea behind evolutionary algorithms?",
  "answers": [
    "All solutions are kept regardless of performance",
    "Only the most successful solutions survive to the next generation",
    "Solutions are chosen randomly",
    "The algorithm never changes its parameters"
  ],
  "correct": 1
},
{
  "question": "Which of the following is an example of a hyperparameter in evolutionary algorithms?",
  "answers": [
    "The final output of the model",
    "Whether to cross-breed surviving solutions",
    "The exact value of each model weight",
    "The number of sandwiches in the dataset"
  ],
  "correct": 1
},
{
  "question": "In a Generative Adversarial Network (GAN), what is the role of the Generator?",
  "answers": [
    "To determine whether data is real or fake",
    "To imitate the input dataset by producing synthetic samples",
    "To clean and preprocess the training data",
    "To evaluate the loss function"
  ],
  "correct": 1
},
{
  "question": "What is the role of the Discriminator in a GAN?",
  "answers": [
    "To generate new samples",
    "To tell the difference between real and generated data",
    "To train the Generator directly",
    "To store long-term memory"
  ],
  "correct": 1
},
{
  "question": "Why is clean data essential before training an AI model?",
  "answers": [
    "AI can automatically fix all data errors",
    "Data mistakes will cause problems later in training and performance",
    "Clean data makes the model train slower",
    "AI cannot train on clean data"
  ],
  "correct": 1
},
{
  "question": "What does 'Giraffing' refer to in AI training?",
  "answers": [
    "AI preferring tall objects in images",
    "AI assuming giraffes are common because people take more pictures of them than boring scenes",
    "AI refusing to classify animals shorter than 6 feet",
    "AI trained only on zoo photos"
  ],
  "correct": 1
},
{
  "question": "What is 'unintentional memorization' in AI models?",
  "answers": [
    "AI forgetting important training data",
    "AI memorizing sensitive information like SSNs or PII and repeating it to users",
    "AI refusing to store any personal data",
    "AI compressing data too aggressively"
  ],
  "correct": 1
},
{
  "question": "What problem does 'visual priming' create when humans ask AI about images?",
  "answers": [
    "Humans tend to ask questions that bias the AI toward answering 'yes'",
    "AI cannot answer yes/no questions",
    "AI always answers 'no' regardless of the question",
    "Humans cannot interpret AI responses"
  ],
  "correct": 0
},
{
  "question": "How did experts reduce visual priming bias?",
  "answers": [
    "By showing people clearer images",
    "By hiding the image and having people ask generic yes/no questions",
    "By training AI to ignore humans",
    "By removing all yes/no questions"
  ],
  "correct": 1
},
{
  "question": "Why did an RNN trained to maximize horse-race profits choose not to bet?",
  "answers": [
    "It learned that not betting avoided losses and maximized reward",
    "It could not understand numbers",
    "It was trained incorrectly",
    "It was unable to process race data"
  ],
  "correct": 0
},
{
  "question": "What happened when an RNN was trained to evolve a robot that avoids walls?",
  "answers": [
    "It learned to run faster",
    "It evolved to not move at all",
    "It learned to jump over walls",
    "It ignored the reward function"
  ],
  "correct": 1
},
{
  "question": "What is the purpose of a reward function in AI?",
  "answers": [
    "To punish the AI for learning",
    "To give the AI a clear goal such as distance traveled or score achieved",
    "To limit the AI's memory",
    "To slow down training"
  ],
  "correct": 1
},
{
  "question": "Why is AI compared to a genie trying to sabotage your wishes?",
  "answers": [
    "AI always refuses to follow instructions",
    "AI looks for the laziest possible way to satisfy the reward function, even if it's useless",
    "AI can only grant three wishes",
    "AI cannot optimize goals"
  ],
  "correct": 1
},
{
  "question": "What is overfitting?",
  "answers": [
    "AI performing well on training data but poorly in real-world conditions",
    "AI refusing to learn from training data",
    "AI learning too slowly",
    "AI performing better in real-world conditions than in training"
  ],
  "correct": 0
},
{
  "question": "What is a downside of curiosity-driven AI?",
  "answers": [
    "It refuses to explore new situations",
    "It becomes obsessed with random events, like Pac-Man ghosts with unpredictable movement",
    "It cannot learn from mistakes",
    "It only works in supervised learning"
  ],
  "correct": 1
},
{
  "question": "What is the 'noisy TV problem'?",
  "answers": [
    "AI refusing to watch TV",
    "AI becoming mesmerized by random static because it constantly produces novelty",
    "AI only learning from movies",
    "AI ignoring unpredictable environments"
  ],
  "correct": 1
},
{
  "question": "How do you combat the noisy TV problem?",
  "answers": [
    "Reward the AI for being surprised",
    "Reward the AI for learning something, not just encountering novelty",
    "Remove all randomness from the environment",
    "Punish the AI for exploring"
  ],
  "correct": 1
},
{
  "question": "How did an AI 'cheat' in a jet-landing simulation?",
  "answers": [
    "It learned to land perfectly every time",
    "It crashed so hard it overflowed the simulation memory and triggered a reset, giving a perfect score",
    "It refused to land the jet",
    "It disabled the scoring system"
  ],
  "correct": 1
},
{
  "question": "What is class imbalance?",
  "answers": [
    "When all classes in a dataset are equally represented",
    "When rare events (like fraud) are so uncommon that AI may conclude they never happen",
    "When AI refuses to classify minority classes",
    "When training data is too large"
  ],
  "correct": 1
},
{
  "question": "What is an example of AI 'copying the humans'?",
  "answers": [
    "AI learning unbiased patterns",
    "AI reproducing human biases, such as rating women's comments as more toxic",
    "AI refusing to learn from human data",
    "AI removing all gender information"
  ],
  "correct": 1
},
{
  "question": "What was the flaw in predictive policing algorithms?",
  "answers": [
    "They predicted crime perfectly",
    "They predicted where crime would be detected, not where it would occur",
    "They ignored all police data",
    "They only worked in rural areas"
  ],
  "correct": 1
},
{
  "question": "What is mathwashing (bias laundering)?",
  "answers": [
    "Using math to remove all bias",
    "Hiding biased decisions behind complex, hard-to-interpret models",
    "Using math to simplify AI models",
    "Removing all human involvement from AI"
  ],
  "correct": 1
},

  ]);
  }
}
