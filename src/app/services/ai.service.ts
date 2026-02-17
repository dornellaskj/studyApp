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

  {
    "question": "What is catastrophic forgetting?",
    "answers": [
      "When an AI forgets earlier tasks as it learns new ones",
      "When an AI loses weights due to hardware failure",
      "When an AI mixes labels from unrelated datasets",
      "When an AI refuses to learn tasks outside its domain"
    ],
    "correct": 0
  },
  {
    "question": "What defines an adversarial attack?",
    "answers": [
      "Training an AI with contradictory labels",
      "Adding subtle noise to trick an AI into misclassifying",
      "Overloading an AI with too many tasks",
      "Using reinforcement learning to confuse the model"
    ],
    "correct": 1
  },
  {
    "question": "What does the bag‑of‑features model suggest?",
    "answers": [
      "An AI ignores small details in images",
      "An AI groups images into bags based on similarity",
      "An AI can identify an object from scattered parts",
      "An AI stores all features in a single vector"
    ],
    "correct": 2
  },
  {
    "question": "What is a key trait of pseudo‑AI or hybrid AI?",
    "answers": [
      "It learns entirely without human involvement",
      "It requires human supervision for edge cases",
      "It uses only symbolic logic",
      "It can generalize across any domain"
    ],
    "correct": 1
  },
  {
    "question": "Why does training‑data origin matter when evaluating AI?",
    "answers": [
      "It determines how many layers the model can have",
      "It determines whether the AI needs human supervision",
      "It determines the AI’s maximum memory capacity",
      "It determines whether the AI will face data similar to its training environment"
    ],
    "correct": 3
  },
  {
    "question": "Why do AIs struggle with memory‑heavy tasks?",
    "answers": [
      "They forget all tasks when memory is full",
      "They perform best when they don’t need to remember much",
      "They require symbolic logic for long‑term memory",
      "They cannot store numerical information reliably"
    ],
    "correct": 1
  },
  {
    "question": "What risk was demonstrated by Microsoft Tay?",
    "answers": [
      "It reverted to earlier training data",
      "It became unable to update its internal weights",
      "It quickly learned harmful behavior from user interactions",
      "It stopped responding to new inputs"
    ],
    "correct": 2
  },
  {
    "question": "What is mode collapse?",
    "answers": [
      "An AI forgetting all but one training example",
      "An AI producing repetitive or garbled outputs",
      "An AI switching between tasks unpredictably",
      "An AI refusing to generate images with certain features"
    ],
    "correct": 1
  },
  {
    "question": "What does latent space represent?",
    "answers": [
      "A conceptual space where features blend between categories",
      "A hidden buffer for long‑term memory",
      "A backup model used for safety",
      "A region of training data the AI cannot access"
    ],
    "correct": 0
  },
  {
    "question": "Why ask how broad a problem is when evaluating AI claims?",
    "answers": [
      "Broad problems reduce the risk of bias",
      "AI excels at narrow, well‑defined tasks",
      "Broad problems require less training data",
      "Narrow problems require symbolic reasoning"
    ],
    "correct": 1
  },
  {
  "question": "Which perspective of AI focuses on taking the most logical action to achieve goals?",
  "answers": [
    "Thinking Humanly",
    "Acting Rationally",
    "Acting Humanly",
    "Thinking Rationally"
  ],
  "correct": 1
},
{
  "question": "What is an agent in the context of AI?",
  "answers": [
    "A system that acts or performs tasks in an environment",
    "A model trained on labeled data",
    "A neural network with multiple layers",
    "A rule-based system that cannot adapt"
  ],
  "correct": 0
},
{
  "question": "Which example best represents the 'Thinking Rationally' approach?",
  "answers": [
    "Using introspection to understand human thought",
    "Following formal logic such as 'All men are mortal; Socrates is a man; therefore Socrates is mortal'",
    "Passing the Turing Test",
    "Learning from large datasets"
  ],
  "correct": 1
},
{
  "question": "What is a major limitation of the 'Thinking Rationally' approach?",
  "answers": [
    "It cannot use neural networks",
    "It requires oversimplifying complex real-world problems",
    "It only works with reinforcement learning",
    "It focuses too much on human behavior"
  ],
  "correct": 1
},
{
  "question": "Which method is associated with the 'Thinking Humanly' perspective?",
  "answers": [
    "Brain imaging and psychological experiments",
    "Logical deduction",
    "Outcome-based evaluation",
    "Semantic triples"
  ],
  "correct": 0
},
{
  "question": "Which perspective is evaluated using the Turing Test?",
  "answers": [
    "Acting Humanly",
    "Thinking Rationally",
    "Acting Rationally",
    "Thinking Humanly"
  ],
  "correct": 0
},
{
  "question": "Which description best fits Narrow (Weak) AI?",
  "answers": [
    "AI capable of performing across many domains",
    "AI designed for a few specific tasks",
    "AI that continuously retrains itself",
    "AI that explains its reasoning transparently"
  ],
  "correct": 1
},
{
  "question": "What distinguishes General (Strong) AI?",
  "answers": [
    "It is designed for a single task",
    "It can perform well across a wide range of tasks",
    "It requires no data to learn",
    "It is always rule-based"
  ],
  "correct": 1
},
{
  "question": "What defines Assistive AI?",
  "answers": [
    "It operates with no human involvement",
    "It is designed to support humans and improve efficiency",
    "It is capable of general intelligence",
    "It is always explainable"
  ],
  "correct": 1
},
{
  "question": "What defines Autonomous AI?",
  "answers": [
    "It requires human oversight",
    "It follows explicit rules only",
    "It operates without human involvement",
    "It is always a black-box model"
  ],
  "correct": 2
},
{
  "question": "Which characteristic describes rule-based AI?",
  "answers": [
    "It learns from experience",
    "It follows explicit instructions and struggles with unexpected cases",
    "It requires large datasets",
    "It uses neural networks"
  ],
  "correct": 1
},
{
  "question": "Which characteristic describes learning-based AI?",
  "answers": [
    "It cannot adapt to new data",
    "It follows predefined rules",
    "It learns from experience and data",
    "It is always explainable"
  ],
  "correct": 2
},
{
  "question": "Why are learning-based systems often considered 'black boxes'?",
  "answers": [
    "Their internal decision-making is difficult to interpret",
    "They use only rule-based logic",
    "They cannot handle large datasets",
    "They require no training data"
  ],
  "correct": 0
},
{
  "question": "What is a key drawback of static learning systems?",
  "answers": [
    "They retrain themselves automatically",
    "They require periodic manual updates and retraining",
    "They always use reinforcement learning",
    "They cannot be deployed in production"
  ],
  "correct": 1
},
{
  "question": "What distinguishes continuous learning systems?",
  "answers": [
    "They never update their models",
    "They use only rule-based logic",
    "They update through feedback loops and evolve over time",
    "They require no data"
  ],
  "correct": 2
},
{
  "question": "Which pair represents an AI identifying characteristic?",
  "answers": [
    "Neural vs Symbolic",
    "Narrow vs General",
    "Static vs Hardware-based",
    "Cognitive vs Reactive"
  ],
  "correct": 1
},
{
  "question": "What is the definition of machine learning?",
  "answers": [
    "A system that follows explicit rules",
    "Allowing a computer to learn from data",
    "A subset of deep learning",
    "A method for performing symbolic reasoning"
  ],
  "correct": 1
},
{
  "question": "What are features in a dataset?",
  "answers": [
    "The values the model predicts",
    "The variables or attributes used as inputs",
    "The reward signals in reinforcement learning",
    "The learned parameters of a model"
  ],
  "correct": 1
},
{
  "question": "What are labels in supervised learning?",
  "answers": [
    "The input variables",
    "The output values the model is trained to predict",
    "The hidden layers of a neural network",
    "The reward signals used in reinforcement learning"
  ],
  "correct": 1
},
{
  "question": "Which statement best describes a model in machine learning?",
  "answers": [
    "A learned system that maps inputs to outputs",
    "A dataset used for training",
    "A rule-based engine",
    "A type of reinforcement signal"
  ],
  "correct": 0
},
{
  "question": "Which learning type uses labeled data?",
  "answers": [
    "Unsupervised learning",
    "Reinforcement learning",
    "Supervised learning",
    "Continuous learning"
  ],
  "correct": 2
},
{
  "question": "Which learning type is best for grouping or clustering data?",
  "answers": [
    "Supervised learning",
    "Unsupervised learning",
    "Reinforcement learning",
    "Rule-based learning"
  ],
  "correct": 1
},
{
  "question": "Which learning type relies on trial and error?",
  "answers": [
    "Supervised learning",
    "Unsupervised learning",
    "Reinforcement learning",
    "Static learning"
  ],
  "correct": 2
},
{
  "question": "How does machine learning relate to artificial intelligence?",
  "answers": [
    "ML is a subset of AI",
    "AI is a subset of ML",
    "They are unrelated fields",
    "ML only applies to rule-based systems"
  ],
  "correct": 0
},
{
  "question": "How does deep learning relate to machine learning?",
  "answers": [
    "Deep learning is a subset of ML that uses neural networks",
    "Deep learning is broader than ML",
    "Deep learning refers only to reinforcement learning",
    "Deep learning is unrelated to AI"
  ],
  "correct": 0
},
{
  "question": "What distinguishes Narrow AI from General AI?",
  "answers": [
    "Narrow AI is designed for specific tasks, while General AI can perform well across many domains",
    "Narrow AI learns continuously, while General AI is static",
    "Narrow AI is always rule-based, while General AI is always learning-based",
    "Narrow AI is explainable, while General AI is a black box"
  ],
  "correct": 0
},
{
  "question": "What does it mean for an AI system to be a 'black box'?",
  "answers": [
    "Its internal decision-making process is difficult to interpret",
    "It cannot be deployed in production",
    "It only uses rule-based logic",
    "It requires no training data"
  ],
  "correct": 0
},
{
  "question": "Which statement best describes Assistive AI?",
  "answers": [
    "AI that operates with no human involvement",
    "AI that supports humans and improves efficiency while still requiring human participation",
    "AI that can perform across many domains",
    "AI that explains its reasoning transparently"
  ],
  "correct": 1
},
{
  "question": "What distinguishes rule-based AI from learning-based AI?",
  "answers": [
    "Rule-based AI follows explicit instructions and struggles with unexpected cases, while learning-based AI adapts from data",
    "Rule-based AI uses neural networks, while learning-based AI uses symbolic logic",
    "Rule-based AI requires large datasets, while learning-based AI does not",
    "Rule-based AI is always autonomous, while learning-based AI is always assistive"
  ],
  "correct": 0
},
{
  "question": "What is the key difference between static and continuous learning systems?",
  "answers": [
    "Static systems retrain automatically, while continuous systems require manual updates",
    "Static systems use reinforcement learning, while continuous systems use supervised learning",
    "Static systems require periodic manual retraining, while continuous systems update through feedback loops",
    "Static systems are always rule-based, while continuous systems are always learning-based"
  ],
  "correct": 2
},

  {
    "question": "What is the role of features in a machine learning model?",
    "answers": [
      "They represent the output the model predicts",
      "They are the input variables used to make predictions",
      "They are the errors the model tries to minimize",
      "They are the labels assigned after training"
    ],
    "correct": 1
  },
  {
    "question": "Which best describes supervised learning?",
    "answers": [
      "Learning from unlabeled data by grouping similar items",
      "Learning through trial, error, and rewards",
      "Learning from labeled data to predict categories or numbers",
      "Learning by manually coding rules into the system"
    ],
    "correct": 2
  },
  {
    "question": "Which algorithm is most appropriate for predicting a continuous value?",
    "answers": [
      "Decision Trees",
      "Random Forests",
      "K-Nearest Neighbors",
      "Linear Regression"
    ],
    "correct": 3
  },
  {
    "question": "What is the main purpose of a decision tree?",
    "answers": [
      "To draw the best straight line through data",
      "To break decisions into a series of yes/no questions",
      "To cluster unlabeled data into groups",
      "To simulate neuron-like structures for deep learning"
    ],
    "correct": 1
  },
  {
    "question": "What is the advantage of a random forest over a single decision tree?",
    "answers": [
      "It always produces a linear model",
      "It reduces overfitting by combining multiple trees",
      "It requires no training data",
      "It only works for regression tasks"
    ],
    "correct": 1
  },
  {
    "question": "What does k-NN primarily rely on to make predictions?",
    "answers": [
      "The distance to similar data points",
      "A series of yes/no decision splits",
      "A straight-line fit through the data",
      "Reward and punishment signals"
    ],
    "correct": 0
  },
  {
    "question": "Which statement best describes neural networks?",
    "answers": [
      "They group unlabeled data into clusters",
      "They pass data through layers of neurons specialized in different tasks",
      "They rely on a single decision boundary",
      "They always outperform simpler models"
    ],
    "correct": 1
  },
  {
    "question": "What is the primary goal of statistics compared to machine learning?",
    "answers": [
      "Prediction accuracy",
      "Inference and explanation",
      "Continuous learning",
      "Reward maximization"
    ],
    "correct": 1
  },
  {
    "question": "What does precision measure?",
    "answers": [
      "How many predicted positives were actually positive",
      "How many true positives the model found",
      "How many false negatives the model avoided",
      "How many total predictions the model made"
    ],
    "correct": 0
  },
  {
    "question": "Which step of the ML lifecycle involves transforming raw data into useful inputs?",
    "answers": [
      "Model training",
      "Feature engineering",
      "Deployment",
      "Monitoring"
    ],
    "correct": 1
  },
  {
    "question": "What are features in a machine learning dataset?",
    "answers": [
      "The values the model is trying to predict",
      "The input variables used to make predictions",
      "The errors produced during training",
      "The categories assigned after classification"
    ],
    "correct": 1
  },
  {
    "question": "What are labels in machine learning?",
    "answers": [
      "The input variables used to train the model",
      "The output values the model is trying to predict",
      "The metadata describing each feature",
      "The clusters formed during unsupervised learning"
    ],
    "correct": 1
  },
  {
    "question": "What happens during the training phase of ML?",
    "answers": [
      "The model uses learned patterns to make predictions",
      "The model learns patterns by analyzing features and labels",
      "The model is deployed into production",
      "The model is evaluated using unseen data"
    ],
    "correct": 1
  },
  {
    "question": "What is the purpose of testing in ML?",
    "answers": [
      "To adjust model weights during learning",
      "To evaluate how well the learned pattern generalizes",
      "To clean and prepare raw data",
      "To transform features into new representations"
    ],
    "correct": 1
  },
  {
    "question": "Which best describes supervised learning?",
    "answers": [
      "Learning from unlabeled data by grouping similar items",
      "Learning from labeled data to predict categories or numbers",
      "Learning through trial and error using rewards",
      "Learning by manually coded rules"
    ],
    "correct": 1
  },
  {
    "question": "Which task is an example of classification?",
    "answers": [
      "Predicting tomorrow's temperature",
      "Predicting whether an email is spam or not",
      "Estimating the price of a house",
      "Grouping customers by similarity"
    ],
    "correct": 1
  },
  {
    "question": "Which task is an example of regression?",
    "answers": [
      "Predicting a product category",
      "Predicting a continuous number",
      "Grouping unlabeled data",
      "Reward-based decision making"
    ],
    "correct": 1
  },
  {
    "question": "What defines unsupervised learning?",
    "answers": [
      "Learning from labeled examples",
      "Learning from unlabeled data by finding structure",
      "Learning through rewards and penalties",
      "Learning by fitting a straight line"
    ],
    "correct": 1
  },
  {
    "question": "What characterizes reinforcement learning?",
    "answers": [
      "Learning from labeled examples",
      "Learning by grouping similar data points",
      "Learning through trial, error, rewards, and punishment",
      "Learning by fitting a linear model"
    ],
    "correct": 2
  },
  {
    "question": "What does Linear Regression do?",
    "answers": [
      "Groups unlabeled data into clusters",
      "Draws the best straight line through data to predict a number",
      "Builds a tree of yes/no decisions",
      "Combines multiple trees to improve accuracy"
    ],
    "correct": 1
  },
  {
    "question": "What is a decision tree used for?",
    "answers": [
      "Predicting continuous values",
      "Breaking decisions into yes/no questions for classification",
      "Grouping unlabeled data",
      "Passing data through neuron layers"
    ],
    "correct": 1
  },
  {
    "question": "Why are random forests effective?",
    "answers": [
      "They always produce linear models",
      "They combine many slightly different trees to improve accuracy",
      "They require no training data",
      "They only work for regression tasks"
    ],
    "correct": 1
  },
  {
    "question": "How does k-Nearest Neighbors make predictions?",
    "answers": [
      "By fitting a straight line",
      "By passing data through neuron layers",
      "By comparing a point to nearby similar data points",
      "By building a series of yes/no splits"
    ],
    "correct": 2
  },
  {
    "question": "What is a neural network?",
    "answers": [
      "A model that groups unlabeled data",
      "A model that passes data through layers of specialized neurons",
      "A model that always produces interpretable results",
      "A model that uses only linear relationships"
    ],
    "correct": 1
  },
  {
    "question": "What is the primary goal of statistics?",
    "answers": [
      "Prediction accuracy",
      "Inference and explanation",
      "Reward maximization",
      "Continuous learning"
    ],
    "correct": 1
  },
  {
    "question": "What is the primary goal of machine learning?",
    "answers": [
      "Inference and explanation",
      "Finding causal relationships",
      "Prediction and estimation",
      "Grouping labeled data"
    ],
    "correct": 2
  },
  {
    "question": "What does a train/test split accomplish?",
    "answers": [
      "It ensures the model only trains on clean data",
      "It separates data so the model can be evaluated on unseen examples",
      "It increases the number of features",
      "It reduces the number of labels"
    ],
    "correct": 1
  },
  {
    "question": "What does precision measure?",
    "answers": [
      "Of all predicted positives, how many were actually positive",
      "Of all actual positives, how many the model found",
      "How many total predictions the model made",
      "How often the model predicts the majority class"
    ],
    "correct": 0
  },
  {
    "question": "What does recall measure?",
    "answers": [
      "Of all predicted positives, how many were correct",
      "Of all actual positives, how many the model identified",
      "How many false positives the model produced",
      "How many features were used"
    ],
    "correct": 1
  },
  {
    "question": "What is the purpose of feature engineering?",
    "answers": [
      "To deploy the model into production",
      "To transform raw data into useful input features",
      "To evaluate model accuracy",
      "To monitor model drift"
    ],
    "correct": 1
  },
  {
    "question": "What happens during model training?",
    "answers": [
      "The model learns patterns from the training data",
      "The model is tested on unseen data",
      "The model is deployed to users",
      "The model is monitored for drift"
    ],
    "correct": 0
  },
  {
    "question": "What is the purpose of deployment?",
    "answers": [
      "To clean and prepare data",
      "To put the trained model into real-world use",
      "To split data into training and testing sets",
      "To adjust hyperparameters"
    ],
    "correct": 1
  },
  {
    "question": "What is model monitoring?",
    "answers": [
      "Checking if new trends make the model inaccurate",
      "Training the model on new data",
      "Splitting data into train and test sets",
      "Transforming raw data into features"
    ],
    "correct": 0
  }




  ]);
  }
}
