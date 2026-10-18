let num=Number(prompt("Enter table of:"))
for(let i=1;i<=5;i++){
    let a=num*i;
    console.log(num+"*"+i+"="+a)
}
i=1;
let n=4;
while(i<=5){
    let a=n*i;
    if(a>10 && a % 6===0){
        console.log(a+"is the first number divisible by 6");
        break;
    };
    i++;
}
i=0;
do{
i++;
if(i===3) continue;
console.log(i);

}
while(i<5)