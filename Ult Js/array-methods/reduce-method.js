const numbers= [ 10,20,30];
const total=numbers.reduce((acc,curr)=> acc + curr, 0);

console.log(total);

const fruits = ["apple","banana","orange","apple"];
const cont =fruits.reduce((acc,fruit,index) => {
    acc[fruit]= (acc[fruit]||0)+1;
    return acc;
},{});

console.log(cont);
