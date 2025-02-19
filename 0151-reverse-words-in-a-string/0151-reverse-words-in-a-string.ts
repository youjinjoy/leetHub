function reverseWords(s: string): string {
    const S = s.split(/\s+/);
    S.reverse();
    return S.join(' ').trim();
};