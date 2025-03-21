function predictPartyVictory(senate: string): string {
    const DQ = [];
    const RQ = [];
    for (let i = 0 ; i < senate.length ; i++) {
        if (senate[i] === 'D') {
            DQ.push(i);
        }
        else {
            RQ.push(i);
        }
    }

    while (DQ.length && RQ.length) {
        const Ri = RQ.shift();
        const Di = DQ.shift();

        if (Ri < Di) {
            RQ.push(Ri+senate.length);
        } else {
            DQ.push(Ri+senate.length);
        }
    }

    if (RQ.length) return 'Radiant';
    return 'Dire';
};