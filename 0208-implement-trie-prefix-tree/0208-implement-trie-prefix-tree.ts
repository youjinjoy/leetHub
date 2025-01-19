class Trie {
    private root: TrieNode;

    constructor() {
        this.root = new TrieNode(false);
    }

    insert(word: string): void {
        let currentNode = this.root;
        for (let i = 0 ; i < word.length ; i++) {
            if (!currentNode.children.get(word[i])) {
                currentNode.children.set(word[i], new TrieNode(false));
            }
            currentNode = currentNode.children.get(word[i]);
        }
        currentNode.end();
    }

    search(word: string): boolean {
        let currentNode = this.root;
        for (let i = 0 ; i < word.length ; i++) {

            if (!currentNode.children.get(word[i])) {
                return false;
            }
            currentNode = currentNode.children.get(word[i]);
        }

        if (!currentNode.isEnded) {
            return false;
        }

        return true;
    }

    startsWith(prefix: string): boolean {
        let currentNode = this.root;
        for (let i = 0 ; i < prefix.length ; i++) {

            if (!currentNode.children.get(prefix[i])) {
                return false;
            }            
            currentNode = currentNode.children.get(prefix[i]);
        }

        return true;
    }
}

class TrieNode {
    public isEnded: boolean;
    public children: Map<string,TrieNode>;

    constructor(isEnded) {
        this.isEnded = isEnded;
        this.children = new Map();
    }

    end() {
        this.isEnded = true;
    }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */