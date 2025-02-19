function reverseWords(s: string): string {
    let parts = s.split(' ')
        .filter((part) => part.length > 0)

    parts[0].trim();
    parts[parts.length-1].trim();

    return parts.reverse().join(' ')
};