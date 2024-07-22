class MarkovChain {
    private chain: Map<string, string[]>;
  
    constructor(text: string) {
      this.chain = new Map();
      const words = text.split(/\s+/);
      
      for (let i = 0; i < words.length - 1; i++) {
        const currentWord = words[i];
        const nextWord = words[i + 1];
        
        if (!this.chain.has(currentWord)) {
          this.chain.set(currentWord, []);
        }
        this.chain.get(currentWord)!.push(nextWord);
      }
    }
  
    generateSequence(length: number): string[] {
      const sequence: string[] = [];
      let currentWord = Array.from(this.chain.keys())[Math.floor(Math.random() * this.chain.size)];
  
      for (let i = 0; i < length; i++) {
        sequence.push(currentWord);
        const nextWords = this.chain.get(currentWord);
        if (!nextWords || nextWords.length === 0) break;
        currentWord = nextWords[Math.floor(Math.random() * nextWords.length)];
      }
  
      return sequence;
    }
  }
  
  export default MarkovChain;