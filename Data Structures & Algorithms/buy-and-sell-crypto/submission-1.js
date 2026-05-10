class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let bDay = 0;
        let sDay = 1;
        let profit = 0;

        while(bDay < prices.length){
            let currProfit = prices[sDay] - prices[bDay];
            if(currProfit > 0){
                profit = Math.max(profit, currProfit);
            }
            else{
                bDay = sDay;
            }
            sDay++;
        }

        return profit;
    }
}
