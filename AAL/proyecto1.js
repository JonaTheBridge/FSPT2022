
function money (amount) {
    const bills = [500,200,100,50,20,10,5,2,1]
    let remainder = amount;
    console.log( "------------Calculation for this amount: " + amount)
    for( let bill of bills){
         amountBill_total = remainder/bill;
         amountBill = Math.floor(amountBill_total);
         remainder = remainder - (amountBill*bill);
         let denomination= bill>10?"bills":"coins";
         console.log("The amount of " + bill + " " + denomination + " in amount is "+ amountBill);
         console.log("The amount of money taken out is " + amountBill*bill + "€")
         console.log("The remaining amount of money is " + remainder)
    }
}
