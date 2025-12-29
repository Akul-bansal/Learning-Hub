export interface Lesson {
  id: number;
  title: string;
  category: string;
  description: string;
  content: {
    introduction: string;
    sections: {
      heading: string;
      text: string;
    }[];
    keyTakeaways: string[];
  };
}

export const lessons: Lesson[] = [
  {
    id: 1,
    title: "Introduction to Blockchain",
    category: "Fundamentals",
    description: "Learn the basics of blockchain technology and how it works",
    content: {
      introduction: "Blockchain is a revolutionary technology that enables secure, transparent, and decentralized record-keeping. In this lesson, we'll explore what blockchain is and why it matters.",
      sections: [
        {
          heading: "What is Blockchain?",
          text: "A blockchain is a distributed digital ledger that records transactions across multiple computers. Think of it as a chain of blocks, where each block contains a list of transactions. Once a block is added to the chain, it becomes extremely difficult to alter, making blockchain highly secure."
        },
        {
          heading: "How Does It Work?",
          text: "When a new transaction occurs, it's broadcast to all participants in the network. These participants (called nodes) validate the transaction using consensus mechanisms. Once validated, the transaction is combined with other transactions to form a new block, which is then added to the existing chain."
        },
        {
          heading: "Key Characteristics",
          text: "Blockchain technology has several defining features: Decentralization (no single point of control), Transparency (all transactions are visible to network participants), Immutability (once recorded, data cannot be easily changed), and Security (cryptographic techniques protect the data)."
        }
      ],
      keyTakeaways: [
        "Blockchain is a distributed ledger technology",
        "Transactions are grouped into blocks and linked together",
        "The technology is decentralized, transparent, and secure",
        "Blockchain forms the foundation of Web3 applications"
      ]
    }
  },
  {
    id: 2,
    title: "Understanding Cryptocurrencies",
    category: "Fundamentals",
    description: "Discover what cryptocurrencies are and how they function",
    content: {
      introduction: "Cryptocurrencies are digital or virtual currencies that use cryptography for security. They operate on blockchain networks and represent one of the most popular applications of blockchain technology.",
      sections: [
        {
          heading: "What is Cryptocurrency?",
          text: "Cryptocurrency is a digital asset designed to work as a medium of exchange. Unlike traditional currencies issued by governments (fiat currencies), cryptocurrencies are typically decentralized and operate on blockchain technology. Bitcoin, created in 2009, was the first cryptocurrency."
        },
        {
          heading: "How Cryptocurrencies Work",
          text: "Cryptocurrencies use blockchain technology to record all transactions. When you send cryptocurrency to someone, the transaction is verified by network participants and added to the blockchain. You store your cryptocurrency in a digital wallet, which contains private keys that allow you to access and transfer your funds."
        },
        {
          heading: "Popular Cryptocurrencies",
          text: "Bitcoin (BTC) is the first and most well-known cryptocurrency. Ethereum (ETH) is the second-largest and enables smart contracts. Other popular cryptocurrencies include Binance Coin (BNB), Cardano (ADA), and Solana (SOL). Each has unique features and use cases."
        }
      ],
      keyTakeaways: [
        "Cryptocurrencies are digital assets that operate on blockchain",
        "They enable peer-to-peer transactions without intermediaries",
        "Bitcoin was the first cryptocurrency, created in 2009",
        "Different cryptocurrencies serve different purposes and use cases"
      ]
    }
  },
  {
    id: 3,
    title: "What is Web3?",
    category: "Web3 Concepts",
    description: "Explore the evolution from Web2 to Web3 and its significance",
    content: {
      introduction: "Web3 represents the next evolution of the internet, moving from centralized platforms to a decentralized web powered by blockchain technology. It promises to give users more control over their data and online interactions.",
      sections: [
        {
          heading: "From Web1 to Web3",
          text: "Web1 (1990s-2000s) was the 'read-only' web with static websites. Web2 (2000s-present) introduced the 'read-write' web with social media and user-generated content, but controlled by centralized companies. Web3 is the 'read-write-own' web, where users have ownership and control through blockchain technology."
        },
        {
          heading: "Core Principles of Web3",
          text: "Web3 is built on several key principles: Decentralization (no single entity controls the network), Permissionless (anyone can participate without authorization), Trustless (users don't need to trust intermediaries), and Native payments (built-in cryptocurrency enables seamless transactions)."
        },
        {
          heading: "Web3 Applications",
          text: "Web3 enables new types of applications called dApps (decentralized applications). These include decentralized finance (DeFi) platforms, NFT marketplaces, decentralized social networks, and DAOs (Decentralized Autonomous Organizations). These applications run on blockchain networks rather than centralized servers."
        }
      ],
      keyTakeaways: [
        "Web3 is the decentralized evolution of the internet",
        "It gives users ownership and control of their data",
        "Web3 applications (dApps) run on blockchain networks",
        "Core principles include decentralization, permissionless access, and native payments"
      ]
    }
  },
  {
    id: 4,
    title: "Smart Contracts Explained",
    category: "Advanced Topics",
    description: "Learn about self-executing contracts on the blockchain",
    content: {
      introduction: "Smart contracts are self-executing programs stored on a blockchain. They automatically execute when predetermined conditions are met, eliminating the need for intermediaries and enabling trustless transactions.",
      sections: [
        {
          heading: "What are Smart Contracts?",
          text: "A smart contract is a program that runs on a blockchain. It contains code that automatically executes actions when specific conditions are met. Think of it as a digital agreement that enforces itself - like a vending machine that automatically gives you a snack when you insert the right amount of money."
        },
        {
          heading: "How Smart Contracts Work",
          text: "Smart contracts are written in programming languages like Solidity (for Ethereum). Once deployed to the blockchain, they cannot be changed. When someone interacts with a smart contract by sending a transaction, the contract's code executes automatically. The results are recorded on the blockchain for everyone to see."
        },
        {
          heading: "Real-World Applications",
          text: "Smart contracts power many Web3 applications: DeFi protocols use them for lending and borrowing without banks, NFT marketplaces use them to verify ownership and automate sales, Supply chain systems use them to track products, and Insurance platforms use them for automatic claim processing."
        }
      ],
      keyTakeaways: [
        "Smart contracts are self-executing programs on blockchain",
        "They automatically enforce agreement terms without intermediaries",
        "Once deployed, smart contracts are immutable",
        "They enable trustless transactions and power dApps"
      ]
    }
  },
  {
    id: 5,
    title: "NFTs and Digital Ownership",
    category: "Advanced Topics",
    description: "Understand non-fungible tokens and digital ownership rights",
    content: {
      introduction: "NFTs (Non-Fungible Tokens) represent unique digital assets on the blockchain. They enable true digital ownership and have revolutionized how we think about owning digital items.",
      sections: [
        {
          heading: "What Makes NFTs Special?",
          text: "Unlike cryptocurrencies where each unit is identical (fungible), NFTs are unique (non-fungible). Each NFT has distinct properties and cannot be replaced with another. It's like comparing a dollar bill (fungible) to a unique piece of art (non-fungible). NFTs use blockchain to prove ownership and authenticity."
        },
        {
          heading: "How NFTs Work",
          text: "NFTs are created through a process called 'minting' on a blockchain (usually Ethereum). The NFT contains metadata that defines its unique properties and often includes a link to the digital asset it represents. Ownership is recorded on the blockchain, creating an immutable record that anyone can verify."
        },
        {
          heading: "NFT Use Cases",
          text: "While NFTs are famous for digital art, their applications extend far beyond: Digital collectibles and gaming items, Music and media rights, Virtual real estate in metaverse platforms, Event tickets and memberships, Digital identity and credentials, and even Real-world asset tokenization."
        }
      ],
      keyTakeaways: [
        "NFTs are unique digital tokens that represent ownership",
        "They provide verifiable proof of authenticity and ownership",
        "NFTs are created through minting on blockchain networks",
        "Use cases extend beyond art to gaming, music, credentials, and more"
      ]
    }
  },
  {
    id: 6,
    title: "Decentralized Finance (DeFi)",
    category: "Web3 Concepts",
    description: "Explore the world of financial services on blockchain",
    content: {
      introduction: "DeFi (Decentralized Finance) recreates traditional financial services using blockchain technology, removing intermediaries and creating open, transparent, and accessible financial systems.",
      sections: [
        {
          heading: "What is DeFi?",
          text: "DeFi refers to financial services built on blockchain networks, primarily Ethereum. Instead of relying on banks, brokerages, or exchanges, DeFi uses smart contracts to provide financial services directly to users. This creates a financial system that's open to anyone with an internet connection."
        },
        {
          heading: "Key DeFi Services",
          text: "DeFi offers various services: Lending and Borrowing (earn interest or borrow without banks), Decentralized Exchanges or DEXs (trade cryptocurrencies peer-to-peer), Stablecoins (cryptocurrencies pegged to stable assets like USD), Yield Farming (earn rewards by providing liquidity), and Staking (lock tokens to support networks and earn rewards)."
        },
        {
          heading: "Benefits and Risks",
          text: "DeFi offers several advantages: 24/7 availability, no intermediaries, transparency, and global accessibility. However, it also carries risks including smart contract vulnerabilities, high volatility, complexity for beginners, and limited regulatory protection. Users must understand these tradeoffs."
        }
      ],
      keyTakeaways: [
        "DeFi provides financial services without traditional intermediaries",
        "Smart contracts automate lending, trading, and other financial functions",
        "DeFi is accessible to anyone with internet and cryptocurrency",
        "Understanding both benefits and risks is essential for DeFi participation"
      ]
    }
  }
];
