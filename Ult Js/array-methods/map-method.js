const numbers=[ 1,2,3,4];
const double = numbers.map((num)=>{
    return num*2;
});
 console.log( "Original array:",numbers);
 console.log( double);


 const users = [
    {
        name:" Alic", age: 21
    },
    {name:"Bob",age: 25

    },
 ];

 const names = users.map((user)=> user.name);
 console.log(names);
 console.log(users);