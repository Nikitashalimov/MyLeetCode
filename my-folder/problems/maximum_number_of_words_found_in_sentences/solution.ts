function mostWordsFound(sentences: string[]): number {
    return Math.max(...sentences.map(item => item.split(' ').length))
};