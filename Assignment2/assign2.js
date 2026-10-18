let subtotal=Number(prompt("Enter the total amount:$"))
console.log("Subtotal:$",{subtotal})
let tip_percentage=Number(prompt("Enter the tip percentage:"))
console.log("Tip Percentage:",{tip_percentage},"%")
let calculated_Tip=tip_percentage*0.01*subtotal
console.log("Calculated Tip:",{calculated_Tip})
let total_Amount_Pay=calculated_Tip + subtotal;
console.log("Total Amount Pay:",{total_Amount_Pay})
