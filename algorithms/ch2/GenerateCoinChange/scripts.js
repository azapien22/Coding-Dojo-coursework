//Change is inevitable (especially when breaking a twenty). Make generateCoinChange(cents) . Accept a number of American cents, 
//compute and print how to represent that amount with smallest number of coins. Common American coins are pennies (1 cent), nickels (5 cents), dimes (10 cents), and quarters (25 cents).
function generateCoinChange(cents){
    var coins = [
        ['dollar',100],
        ['hdollar',50],
        ['quarters',25],
        ['dimes',10],
        ['nickels',5],
        ['pennies',1],
    ];

    var coinChange = {};

    for (var i = 0; i < coins.length; i++){
        coinChange[coins[i][0]] = Math.floor(cents/coins[i][1]);
        cents = cents % coins [i][1];
    }

    for (var coin in coinChange){
        console.log(coin + ": " + coinChange[coin]);
    }
}

generateCoinChange(499); 