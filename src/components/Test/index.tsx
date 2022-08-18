function Test(){
    const person = {
      firstname:'Rory',
      lastname:'Swift',
      age:18,
      gender:'男',
      occupation:'web前端'
    } 

   interface fullname {
    firstname: string;
    lastname: string;
    age?:number;
    [propName: string]: any;
   }


  function hello(personname:fullname){
    console.log(`hello ${personname.firstname}-${personname.lastname}-${personname.age}`)
    console.log(`我是${personname.gender}+我的职业是${personname.occupation}`)
  }

  const helloword = hello(person)

  console.log(helloword);
  return(
    <p>Hello I'm Rory</p>
  );
}

export default Test;