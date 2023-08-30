function maxProfit(prices: number[]): number {
    if (!prices || prices.length <= 1) return 0;
    
    let maxDif = 0;
    let minPrice = prices[0];
    
    for (let i=1 ; i < prices.length; i++) {
        const currentPrice = prices[i];

        if (currentPrice < minPrice) {
            minPrice = currentPrice;

        } else {
            const currentDif = currentPrice - minPrice;

            if(currentDif > maxDif) {
                maxDif = currentDif;
            }
        }
    }

    return maxDif;
};