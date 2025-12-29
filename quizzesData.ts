export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface Quiz {
  id: number;
  lessonId: number;
  title: string;
  questions: QuizQuestion[];
}

export const quizzes: Quiz[] = [
  {
    id: 1,
    lessonId: 1,
    title: "Introduction to Blockchain Quiz",
    questions: [
      {
        id: 1,
        question: "What is a blockchain?",
        options: [
          "A type of cryptocurrency",
          "A distributed digital ledger",
          "A social media platform",
          "A programming language"
        ],
        correctAnswer: 1,
        explanation: "A blockchain is a distributed digital ledger that records transactions across multiple computers in a secure and transparent manner."
      },
      {
        id: 2,
        question: "Which of the following is NOT a key characteristic of blockchain?",
        options: [
          "Decentralization",
          "Transparency",
          "Centralized control",
          "Immutability"
        ],
        correctAnswer: 2,
        explanation: "Centralized control is the opposite of what blockchain offers. Blockchain is characterized by decentralization, not centralized control."
      },
      {
        id: 3,
        question: "What happens to a transaction after it's validated on a blockchain?",
        options: [
          "It's deleted for security",
          "It's sent to a central server",
          "It's combined with others to form a new block",
          "It's converted to cryptocurrency"
        ],
        correctAnswer: 2,
        explanation: "After validation, transactions are combined with other transactions to form a new block, which is then added to the blockchain."
      },
      {
        id: 4,
        question: "What does immutability mean in blockchain context?",
        options: [
          "Data can be easily changed",
          "Data is stored temporarily",
          "Data cannot be easily altered once recorded",
          "Data is invisible to users"
        ],
        correctAnswer: 2,
        explanation: "Immutability means that once data is recorded on the blockchain, it becomes extremely difficult to alter or delete, ensuring data integrity."
      }
    ]
  },
  {
    id: 2,
    lessonId: 2,
    title: "Understanding Cryptocurrencies Quiz",
    questions: [
      {
        id: 1,
        question: "What was the first cryptocurrency ever created?",
        options: [
          "Ethereum",
          "Bitcoin",
          "Dogecoin",
          "Ripple"
        ],
        correctAnswer: 1,
        explanation: "Bitcoin, created in 2009 by an anonymous person or group using the pseudonym Satoshi Nakamoto, was the first cryptocurrency."
      },
      {
        id: 2,
        question: "What technology do cryptocurrencies typically operate on?",
        options: [
          "Cloud computing",
          "Blockchain",
          "Artificial Intelligence",
          "5G networks"
        ],
        correctAnswer: 1,
        explanation: "Cryptocurrencies typically operate on blockchain technology, which provides a secure and decentralized way to record transactions."
      },
      {
        id: 3,
        question: "What is a digital wallet used for?",
        options: [
          "Mining cryptocurrency",
          "Creating new blockchains",
          "Storing private keys to access cryptocurrency",
          "Validating transactions"
        ],
        correctAnswer: 2,
        explanation: "A digital wallet stores the private keys that allow you to access and transfer your cryptocurrency funds."
      },
      {
        id: 4,
        question: "Which cryptocurrency is known for enabling smart contracts?",
        options: [
          "Bitcoin",
          "Litecoin",
          "Ethereum",
          "Monero"
        ],
        correctAnswer: 2,
        explanation: "Ethereum is the second-largest cryptocurrency and is particularly known for its smart contract functionality."
      }
    ]
  },
  {
    id: 3,
    lessonId: 3,
    title: "What is Web3? Quiz",
    questions: [
      {
        id: 1,
        question: "What is the key difference between Web2 and Web3?",
        options: [
          "Web3 is faster",
          "Web3 gives users ownership and control",
          "Web3 has better graphics",
          "Web3 is only for developers"
        ],
        correctAnswer: 1,
        explanation: "The key difference is that Web3 gives users ownership and control over their data and digital assets, unlike Web2 which is controlled by centralized companies."
      },
      {
        id: 2,
        question: "What does 'permissionless' mean in Web3?",
        options: [
          "Users need special permissions to access",
          "Only approved users can participate",
          "Anyone can participate without authorization",
          "Permissions are required for transactions"
        ],
        correctAnswer: 2,
        explanation: "Permissionless means anyone can participate in the network without needing authorization from a central authority."
      },
      {
        id: 3,
        question: "What are dApps?",
        options: [
          "Digital applications on smartphones",
          "Decentralized applications running on blockchain",
          "Data analysis programs",
          "Desktop applications"
        ],
        correctAnswer: 1,
        explanation: "dApps are decentralized applications that run on blockchain networks rather than centralized servers."
      },
      {
        id: 4,
        question: "Which era is described as the 'read-only' web?",
        options: [
          "Web3",
          "Web2",
          "Web1",
          "Web4"
        ],
        correctAnswer: 2,
        explanation: "Web1 (1990s-2000s) was the 'read-only' web with static websites where users could only consume content."
      }
    ]
  },
  {
    id: 4,
    lessonId: 4,
    title: "Smart Contracts Explained Quiz",
    questions: [
      {
        id: 1,
        question: "What is a smart contract?",
        options: [
          "A legal document",
          "A self-executing program on blockchain",
          "A cryptocurrency wallet",
          "A blockchain mining tool"
        ],
        correctAnswer: 1,
        explanation: "A smart contract is a self-executing program stored on a blockchain that automatically executes when predetermined conditions are met."
      },
      {
        id: 2,
        question: "Can smart contracts be changed after deployment?",
        options: [
          "Yes, anytime",
          "Only by the creator",
          "No, they are immutable",
          "Only with majority vote"
        ],
        correctAnswer: 2,
        explanation: "Once deployed to the blockchain, smart contracts cannot be changed. This immutability ensures trust and predictability."
      },
      {
        id: 3,
        question: "Which programming language is commonly used for Ethereum smart contracts?",
        options: [
          "Python",
          "JavaScript",
          "Solidity",
          "C++"
        ],
        correctAnswer: 2,
        explanation: "Solidity is the primary programming language used for writing smart contracts on the Ethereum blockchain."
      },
      {
        id: 4,
        question: "What analogy best describes how a smart contract works?",
        options: [
          "A library book",
          "A vending machine",
          "A telephone",
          "A calculator"
        ],
        correctAnswer: 1,
        explanation: "A vending machine is a great analogy - it automatically delivers the product when you insert the right amount of money, just like a smart contract executes when conditions are met."
      }
    ]
  },
  {
    id: 5,
    lessonId: 5,
    title: "NFTs and Digital Ownership Quiz",
    questions: [
      {
        id: 1,
        question: "What does NFT stand for?",
        options: [
          "New Financial Technology",
          "Non-Fungible Token",
          "Network File Transfer",
          "Next Future Tech"
        ],
        correctAnswer: 1,
        explanation: "NFT stands for Non-Fungible Token, representing a unique digital asset on the blockchain."
      },
      {
        id: 2,
        question: "What makes NFTs different from cryptocurrencies like Bitcoin?",
        options: [
          "NFTs are more expensive",
          "NFTs are unique and cannot be replaced with identical items",
          "NFTs are faster to transfer",
          "NFTs don't use blockchain"
        ],
        correctAnswer: 1,
        explanation: "NFTs are non-fungible (unique), while cryptocurrencies are fungible (each unit is identical and interchangeable)."
      },
      {
        id: 3,
        question: "What is the process of creating an NFT called?",
        options: [
          "Mining",
          "Forging",
          "Minting",
          "Crafting"
        ],
        correctAnswer: 2,
        explanation: "Creating an NFT is called 'minting,' which involves recording the NFT on a blockchain."
      },
      {
        id: 4,
        question: "Which blockchain is most commonly used for NFTs?",
        options: [
          "Bitcoin",
          "Ethereum",
          "Litecoin",
          "Dogecoin"
        ],
        correctAnswer: 1,
        explanation: "Ethereum is the most commonly used blockchain for NFTs, though other blockchains also support them."
      }
    ]
  },
  {
    id: 6,
    lessonId: 6,
    title: "Decentralized Finance (DeFi) Quiz",
    questions: [
      {
        id: 1,
        question: "What does DeFi stand for?",
        options: [
          "Digital Finance",
          "Decentralized Finance",
          "Definite Finance",
          "Distributed Finance"
        ],
        correctAnswer: 1,
        explanation: "DeFi stands for Decentralized Finance, referring to financial services built on blockchain technology without intermediaries."
      },
      {
        id: 2,
        question: "What replaces traditional intermediaries in DeFi?",
        options: [
          "Government agencies",
          "Smart contracts",
          "Bank employees",
          "Financial advisors"
        ],
        correctAnswer: 1,
        explanation: "Smart contracts replace traditional intermediaries in DeFi, automatically executing financial services without banks or brokerages."
      },
      {
        id: 3,
        question: "What is a DEX?",
        options: [
          "Digital Exchange",
          "Decentralized Exchange",
          "Data Execution",
          "Developer Experience"
        ],
        correctAnswer: 1,
        explanation: "DEX stands for Decentralized Exchange, which allows peer-to-peer cryptocurrency trading without a central authority."
      },
      {
        id: 4,
        question: "Which is NOT mentioned as a DeFi benefit?",
        options: [
          "24/7 availability",
          "Government insurance",
          "No intermediaries",
          "Global accessibility"
        ],
        correctAnswer: 1,
        explanation: "DeFi typically does not have government insurance or regulatory protection, which is actually listed as a risk rather than a benefit."
      }
    ]
  }
];
