let n=Number(prompt("How many items you want to add in a List:"))
let product_List=[]

console.log("--Initializing Inventory System--")
for(let i=0;i<n;i++){
    let item=prompt("Enter an item:")
    let price=Number(prompt("Enter an price:"))
    product_List.push({item:item,price:price})
}

//console.log(product_List)

product_List.forEach(ele => {
    console.log(`${ele.item}:$${ele.price}`)
});

console.log("--Processing Inventory Research--")
product_List.forEach(ele=>{
    let p=ele.price;
    let category;
    if(p>=500){
        category="Premium";
    }
    else if(p<100){
        category="Budget"
    }else{
        category="Standard"
    }
    console.log(`Item: ${ele.item}($${p})=>Category: ${category}`)
})


console.log("--Financial Analytics--")
let total=0;
product_List.forEach(ele=>{
    total +=ele.price
})
console.log(`Total Inventory Value: $${total}`)
let res=product_List.filter(e=>e.price<200)
console.log("Filtered Affordable Items(Under$200):")
let afford=[];
let filtered_list=res.map(ele=>{
    afford.push(`${ele.item}`)
})
console.log(afford)

let result=product_List.map(e=>{
    return `${e.item.toUpperCase()}:$${e.price}`
})
console.log("Formatted Report List:"+ result)