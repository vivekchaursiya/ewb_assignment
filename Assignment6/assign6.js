let product_List=[
    {item:"Laptop",
    Price:800,
    },
    {item:"Mouse",
    Price:25
    },
    {item:"Keyboard",
    Price:45
    }
]
product_List.forEach(ele => {
    console.log(`${ele.item}:$${ele.Price}`)
});

let res=product_List.filter(e=>e.Price>25)
console.log(res)
let result=product_List.map(e=>{
    console.log(`${e.item.toUpperCase()}:costs$${e.Price}`)
})
console.log(result)