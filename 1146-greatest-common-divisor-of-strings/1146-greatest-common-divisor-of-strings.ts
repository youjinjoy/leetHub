function gcdOfStrings(str1: string, str2: string): string {
    if (str1 + str2 !== str2 + str1) return "";

    const a = str1.length;
    const b = str2.length;

    function gcd(a,b) {
        while(b) {
            [a,b] = [b, a%b];
        }
        return a;
    }
    
    const N = gcd(a,b);

    return str1.substring(0,N);
};