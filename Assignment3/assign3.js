let marks=Number(prompt("Enter the marks:"))
switch(true){
    case marks<=100 && marks>=85:
    console.log("Grade A",{marks})
    console.log("Status:Passed")
    break;
    case marks<85 && marks>=70:
    console.log("Grade B",{marks})
    console.log("Status:Passed")
    break;
    case marks<70 && marks>=60:
    console.log("Grade C",{marks})
    console.log("Status:Passed")
    break;
    case marks<60 && marks>=30:
    console.log("Grade D",{marks})
    console.log("Status:Passed")
    break;
    case marks<30 && marks>=0:
    console.log("Grade D",{marks})
    console.log("Status:Failed")
    break;
    default:
        console.log("Invalid Marks")
}