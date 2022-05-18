//ex-1
const users=[

{name:'taarak mehta',problem:'food',kids:0,gender:'male'},
{name:'bhide',problem:'money',kids:3,gender:'female'},
{name:'jeetha lal',problem:'family',kids:3,gender:'male'},


//objective = find full name of user and problem



];
const userproblem=users.map( users =>  `${users.name} have problem ${users.problem}`);
console.log(userproblem);

//objective 2 to give op kids:no of people having same kids

const userkids=users.reduce((acc,curr)=>{
  if(acc[curr.kids])
  {
        acc[curr.kids]++;
  }
  else{
    acc[curr.kids]=1;
  }
  return acc;
    },{});
    console.log(userkids);

// obj3 filter array to people whose kidsa are 1 print their name


const kids_1=users.filter((x)=>{
    return x.kids == 3;
      })
 
      

// obj4 achieving obj 3 with help of filter

const kids_2=users.reduce((acc,curr)=>{

if (curr.kids == 3) {
    acc.push(curr.name);
}    
return acc;
},[]);

      console.log(kids_2);

// obj 5 get total kids of all char
const total_kid=users.reduce((acc,curr)=>{
acc+=curr.kids
return acc;


},0)
console.log(total_kid);


//obj 6 sort by gender

const soetbygender=users.sort((c1,c2)=>{

      // ignore upper and lowercase
    if (c1.gender < c2.gender) {
      return -1;
    }
    if (c1.gender > c2.gender) {
      return 1;
    }
    return 0;
})
console.log(soetbygender);



kids_1.map((x)=>{

  console.log(x);
})





























































































































































































