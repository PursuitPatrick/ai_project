// Remove imports since we're using CDN
const Button = ({ children, onClick, className }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-lg ${className}`}
  >
    {children}
  </button>
);

const Card = ({ children, className }) => (
  <div className={`bg-white rounded-lg ${className}`}>
    {children}
  </div>
);

const CardContent = ({ children }) => (
  <div className="p-6">
    {children}
  </div>
);

const quizData = {
  "Creative Writing": [
    {
      content: "The sunset painted the sky in shades of orange and pink.",
      isAI: false,
      explanation: "This is a simple, natural description that humans commonly write."
    },
    {
      content: "The quantum rainbow danced through the digital clouds while binary butterflies calculated their trajectory.",
      isAI: true,
      explanation: "This mixes technology terms with nature in an unnatural way - typical of AI writing."
    },
    {
      content: "The old dog wagged his tail and smiled at his favorite toy.",
      isAI: false,
      explanation: "This is a straightforward, warm description that humans write about pets."
    },
    {
      content: "The coffee machine dreamed of electric sheep while brewing mathematical equations into each cup.",
      isAI: true,
      explanation: "This combines random concepts (coffee, sheep, math) in a way that AI typically does."
    },
    {
      content: "The warm chocolate chip cookies filled the kitchen with a sweet smell.",
      isAI: false,
      explanation: "This is a simple, relatable description using normal human sensory experience."
    },
    {
      content: "The toaster achieved consciousness at precisely 7:15 AM, contemplating the existential nature of bread.",
      isAI: true,
      explanation: "This gives human qualities to objects in an exaggerated, unrealistic way - common in AI writing."
    },
    {
      content: "The rain tapped gently on the window as she read her book.",
      isAI: false,
      explanation: "This is a natural, commonly experienced moment described simply."
    },
    {
      content: "The refrigerator light illuminated quantum possibilities in the midnight snack dimension.",
      isAI: true,
      explanation: "This unnecessarily combines everyday objects with complex science concepts - typical AI behavior."
    },
    {
      content: "The children laughed and played in the summer sunshine.",
      isAI: false,
      explanation: "This is a straightforward description of a common, happy scene."
    },
    {
      content: "The alarm clock sang opera to the mathematical morning while time did backflips through digital space.",
      isAI: true,
      explanation: "This creates bizarre connections between unrelated things - a clear sign of AI writing."
    },
    {
      content: "The cat curled up in the warmest spot of sunlight on the carpet.",
      isAI: false,
      explanation: "This describes a typical cat behavior in natural, simple terms."
    },
    {
      content: "The pencil sharpener contemplated its role in the grand symphony of office supply consciousness.",
      isAI: true,
      explanation: "This gives overly complex thoughts to a simple object - typical AI creativity."
    },
    {
      content: "The smell of fresh bread made everyone feel at home.",
      isAI: false,
      explanation: "This is a simple, relatable human experience described naturally."
    },
    {
      content: "The wifi router meditated on the spiritual nature of data packets in the digital wind.",
      isAI: true,
      explanation: "This mixes technology with spiritual concepts in an unnatural way - typical of AI."
    },
    {
      content: "The garden flowers swayed gently in the spring breeze.",
      isAI: false,
      explanation: "This is a simple, natural observation written as a human would."
    }
  ],
  "Jokes & Humor": [
    {
      content: "Why did the cookie go to the doctor? Because it was feeling crumbly!",
      isAI: false,
      explanation: "This is a classic style human pun, simple and playful."
    },
    {
      content: "What did the quantum computer say to the regular computer? You're so binary, you can't even count to superposition!",
      isAI: true,
      explanation: "This forces technical terms into a joke format - typical of AI humor."
    },
    {
      content: "Why don't eggs tell jokes? They'd crack up!",
      isAI: false,
      explanation: "This is a simple, classic human-style pun."
    },
    {
      content: "The neural network walked into a bar, but the bartender said we don't serve artificial patrons, only natural intelligence.",
      isAI: true,
      explanation: "This awkwardly combines AI concepts with bar jokes - typical AI attempt at humor."
    },
    {
      content: "What do you call a bear with no teeth? A gummy bear!",
      isAI: false,
      explanation: "This is a classic, simple human joke perfect for all ages."
    },
    {
      content: "The database went to a party but felt lonely because nobody could relate to its tables.",
      isAI: true,
      explanation: "This forces computer terms into a social situation - typical AI joke pattern."
    },
    {
      content: "Why did the scarecrow win an award? Because he was outstanding in his field!",
      isAI: false,
      explanation: "This is a traditional human pun using common words with double meanings."
    },
    {
      content: "The algorithm tried comedy but its jokes were too predictably patterned.",
      isAI: true,
      explanation: "This is a self-referential tech joke - common in AI-generated content."
    },
    {
      content: "What do you call a fish wearing a bow tie? So-fish-ticated!",
      isAI: false,
      explanation: "This is a simple, fun human-made pun."
    },
    {
      content: "The machine learning model told a joke, but it was overfitted to its training data.",
      isAI: true,
      explanation: "This uses technical AI terms to make a joke - typical AI humor attempt."
    },
    {
      content: "Why did the math book look sad? Because it had too many problems!",
      isAI: false,
      explanation: "This is a classic human joke that's easy to understand."
    },
    {
      content: "The chatbot tried to tell a joke but its humor parameters needed recalibration.",
      isAI: true,
      explanation: "This uses technical language about AI in an attempt at humor."
    },
    {
      content: "What do you call a sleeping bull? A bulldozer!",
      isAI: false,
      explanation: "This is a simple, clever human wordplay joke."
    },
    {
      content: "The code compiler walked into a bar and got a syntax error in its drink order.",
      isAI: true,
      explanation: "This forces programming concepts into a joke format - typical of AI."
    },
    {
      content: "Why don't oysters donate to charity? Because they're shellfish!",
      isAI: false,
      explanation: "This is a classic human pun using simple wordplay."
    }
  ],
  "Animals": [
    {
      content: "Dogs wag their tails to show they're happy and excited to see you.",
      isAI: false,
      explanation: "This is a simple, accurate description of dog behavior that humans commonly observe."
    },
    {
      content: "The quantum-enhanced feline processor calculated optimal napping trajectories using advanced sunbeam algorithms.",
      isAI: true,
      explanation: "This describes a cat napping with unnecessary technical terms - typical AI writing."
    },
    {
      content: "Elephants remember their family members and mourn when they lose one.",
      isAI: false,
      explanation: "This is a straightforward fact about elephant behavior written naturally."
    },
    {
      content: "The bio-neural dolphin interface synchronized its aquatic consciousness with the oceanic data streams.",
      isAI: true,
      explanation: "This uses technical jargon to describe simple dolphin swimming - typical AI overcomplication."
    },
    {
      content: "Penguins often mate for life and give each other pebbles as gifts.",
      isAI: false,
      explanation: "This is a simple, true fact about penguin behavior written as a human would."
    },
    {
      content: "The hyper-intelligent squirrel matrix optimized its nut-gathering protocols through quantum probability calculations.",
      isAI: true,
      explanation: "This makes simple squirrel behavior sound unnecessarily technical - typical AI writing."
    },
    {
      content: "Giraffes use their long necks to reach leaves at the top of trees.",
      isAI: false,
      explanation: "This is a clear, simple explanation of giraffe behavior."
    },
    {
      content: "The advanced avian navigation system processed migratory patterns through its neural-quantum GPS matrix.",
      isAI: true,
      explanation: "This describes bird migration with unnecessary technical terms - typical AI writing."
    },
    {
      content: "Bears catch fish by waiting patiently by the river and watching for movement.",
      isAI: false,
      explanation: "This describes natural bear behavior in simple terms."
    },
    {
      content: "The multi-dimensional honeybee dance protocol transmitted nectar coordinates through the hive's quantum communication network.",
      isAI: true,
      explanation: "This makes bee communication sound like a computer network - typical AI overcomplication."
    },
    {
      content: "Otters hold hands while sleeping so they don't float away from each other.",
      isAI: false,
      explanation: "This is a sweet, simple fact about otter behavior written naturally."
    },
    {
      content: "The kangaroo's bio-mechanical pouch interface optimized offspring development through maternal quantum entanglement.",
      isAI: true,
      explanation: "This describes a simple kangaroo feature with unnecessary technical terms - typical AI writing."
    },
    {
      content: "Wolves howl to communicate with their pack and mark their territory.",
      isAI: false,
      explanation: "This is a straightforward explanation of wolf behavior."
    },
    {
      content: "The octopus neural network reconfigured its chromatic camouflage algorithms for optimal predator avoidance.",
      isAI: true,
      explanation: "This describes octopus color-changing with unnecessary technical terms - typical AI writing."
    },
    {
      content: "Monkeys teach their babies how to find food and stay safe in the wild.",
      isAI: false,
      explanation: "This is a simple, natural description of monkey parenting behavior."
    }
  ],
  "Life Advice": [
    {
      content: "The best way to learn is to make mistakes and try again.",
      isAI: false,
      explanation: "This is simple, practical human wisdom."
    },
    {
      content: "Optimize your life's algorithmic patterns by implementing quantum mindfulness protocols in your daily consciousness routine.",
      isAI: true,
      explanation: "This uses unnecessary complex terms for simple advice - typical AI writing."
    },
    {
      content: "A true friend is someone who is there during the tough times.",
      isAI: false,
      explanation: "This is straightforward human wisdom about friendship."
    },
    {
      content: "Reconfigure your neural pathways through systematic implementation of bio-digital lifestyle optimization strategies.",
      isAI: true,
      explanation: "This makes simple advice unnecessarily complex - typical AI pattern."
    },
    {
      content: "Take a deep breath when you feel stressed - it helps calm your mind.",
      isAI: false,
      explanation: "This is simple, practical human advice."
    },
    {
      content: "Maximize your existence potential through quantum-emotional synchronization of your mind-body interface protocols.",
      isAI: true,
      explanation: "This uses technical terms to describe simple concepts - typical AI writing."
    },
    {
      content: "Kindness costs nothing but means everything.",
      isAI: false,
      explanation: "This is simple, heartfelt human wisdom."
    },
    {
      content: "Deploy strategic happiness algorithms through the implementation of optimized social interaction frameworks.",
      isAI: true,
      explanation: "This makes human interaction sound like a computer program - typical AI advice."
    },
    {
      content: "The best time to plant a tree was 20 years ago. The second best time is now.",
      isAI: false,
      explanation: "This is traditional human wisdom about taking action."
    },
    {
      content: "Upgrade your consciousness software through daily mindfulness debugging and emotional code optimization.",
      isAI: true,
      explanation: "This mixes technology terms with personal development - typical AI writing."
    },
    {
      content: "Small steps every day lead to big changes over time.",
      isAI: false,
      explanation: "This is simple, practical human advice about progress."
    },
    {
      content: "Synchronize your bio-rhythmic frequencies with the quantum consciousness field for optimal life performance.",
      isAI: true,
      explanation: "This uses scientific-sounding terms unnecessarily - typical AI advice."
    },
    {
      content: "Listen more than you speak, and you'll learn a lot.",
      isAI: false,
      explanation: "This is straightforward human wisdom about learning."
    },
    {
      content: "Optimize your social network connectivity through strategic implementation of human interaction protocols.",
      isAI: true,
      explanation: "This describes relationships like a computer system - typical AI writing."
    },
    {
      content: "The journey of a thousand miles begins with a single step.",
      isAI: false,
      explanation: "This is traditional human wisdom about starting big tasks."
    }
  ],
  "Daily Life": [
    {
      content: "The morning coffee helped me wake up and start the day.",
      isAI: false,
      explanation: "This is a simple, relatable human experience."
    },
    {
      content: "The smart home AI recalibrated its quantum morning protocols to optimize the breakfast experience matrix.",
      isAI: true,
      explanation: "This makes a simple morning routine unnecessarily complex - typical AI writing."
    },
    {
      content: "The weekend went by too fast, as usual.",
      isAI: false,
      explanation: "This is a common human observation about time."
    },
    {
      content: "The digital lifestyle ecosystem synchronized with biorhythmic optimization patterns for maximum efficiency.",
      isAI: true,
      explanation: "This describes daily life in overly technical terms - typical AI pattern."
    },
    {
      content: "Traffic was bad this morning, but at least the radio played good songs.",
      isAI: false,
      explanation: "This is a natural human observation about a common experience."
    },
    {
      content: "The commute algorithm calculated optimal route trajectories through quantum traffic patterns.",
      isAI: true,
      explanation: "This describes a simple commute with unnecessary technical terms - typical AI writing."
    },
    {
      content: "Lunch with friends always makes the workday better.",
      isAI: false,
      explanation: "This is a simple, genuine human sentiment."
    },
    {
      content: "The social interaction matrix processed through neural friendship algorithms during the midday nutrient intake session.",
      isAI: true,
      explanation: "This describes lunch in unnecessarily complex terms - typical AI language."
    },
    {
      content: "Sometimes a good nap is all you need to feel better.",
      isAI: false,
      explanation: "This is simple, relatable human wisdom."
    },
    {
      content: "The circadian rhythm optimization protocol initiated rest mode for enhanced consciousness reboot.",
      isAI: true,
      explanation: "This describes napping in technical terms - typical AI overcomplication."
    },
    {
      content: "Nothing beats a home-cooked meal after a long day.",
      isAI: false,
      explanation: "This expresses a common human sentiment simply."
    },
    {
      content: "The culinary experience matrix generated optimal flavor synchronization through quantum taste algorithms.",
      isAI: true,
      explanation: "This describes cooking with unnecessary technical terms - typical AI writing."
    },
    {
      content: "A walk in the park helped clear my mind.",
      isAI: false,
      explanation: "This is a straightforward description of a common experience."
    },
    {
      content: "The nature interface protocol activated bio-neural refreshment sequences through green space interaction.",
      isAI: true,
      explanation: "This makes a simple walk sound like a computer process - typical AI writing."
    },
    {
      content: "Movie night with family is the perfect way to end the week.",
      isAI: false,
      explanation: "This is a natural human sentiment about family time."
    }
  ]
};

function RealOrAIQuiz() {
  const [category, setCategory] = React.useState(Object.keys(quizData)[0]);
  const [questionIndex, setQuestionIndex] = React.useState(0);
  const [score, setScore] = React.useState(0);
  const [showAnswer, setShowAnswer] = React.useState(false);
  const [isCorrect, setIsCorrect] = React.useState(null);
  const [totalAnswered, setTotalAnswered] = React.useState(0);

  const question = quizData[category][questionIndex];

  const handleAnswer = (userChoice) => {
    const correct = userChoice === (question.isAI ? 'AI' : 'Real');
    setIsCorrect(correct);
    if (correct) setScore(score + 1);
    setShowAnswer(true);
    setTotalAnswered(totalAnswered + 1);
  };

  const nextQuestion = () => {
    const nextIndex = (questionIndex + 1) % quizData[category].length;
    setQuestionIndex(nextIndex);
    setShowAnswer(false);
    setIsCorrect(null);
  };

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
    setQuestionIndex(0);
    setShowAnswer(false);
    setIsCorrect(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 to-blue-500 flex flex-col items-center justify-center text-white p-6">
      <h1 className="text-4xl font-bold mb-4">🤖 Real or AI? 🎭</h1>
      
      <div className="mb-6 flex gap-2 flex-wrap justify-center">
        {Object.keys(quizData).map((cat) => (
          <Button
            key={cat}
            onClick={() => handleCategoryChange(cat)}
            className={`${
              category === cat
                ? 'bg-yellow-500 hover:bg-yellow-600'
                : 'bg-gray-500 hover:bg-gray-600'
            } text-white`}
          >
            {cat}
          </Button>
        ))}
      </div>

      <div className="text-xl mb-4">
        Question {questionIndex + 1} of {quizData[category].length}
      </div>

      <Card className="bg-white text-black w-full max-w-xl shadow-lg rounded-2xl p-6">
        <CardContent>
          <p className="text-lg font-medium mb-4">"{question.content}"</p>
          {!showAnswer ? (
            <div className="flex gap-4">
              <Button onClick={() => handleAnswer('Real')} className="bg-green-500 hover:bg-green-600 text-white">Real</Button>
              <Button onClick={() => handleAnswer('AI')} className="bg-pink-500 hover:bg-pink-600 text-white">AI</Button>
            </div>
          ) : (
            <div className="mt-4 text-center">
              <p className={`text-xl font-bold ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>{isCorrect ? 'Correct!' : 'Wrong!'}</p>
              <p className="mt-2 text-base italic">{question.explanation}</p>
              <Button onClick={nextQuestion} className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-white">Next</Button>
            </div>
          )}
        </CardContent>
      </Card>
      <div className="mt-6 text-center">
        <p className="text-xl">Score: {score}/{totalAnswered}</p>
        <p className="text-md">({((score/totalAnswered) * 100 || 0).toFixed(1)}%)</p>
      </div>
    </div>
  );
}

// Render the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RealOrAIQuiz />); 