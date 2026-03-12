import ToDo from './ToDo'
import './App.css'
import Handle from './Handle'
import Batsman from './Batsman'
import Users from './Users'
import { Suspense } from 'react'
// fetch users data


  const fetchUser=async()=>{
      const res=await fetch('https://jsonplaceholder.typicode.com/users');
      return res.json();
}
  const users=fetchUser();



function App() {

  return (
    <>
   {/* <Student name='rahul' roll='50000' dept='cst'></Student>
   <Student name='ruhul' roll='30000' dept='cst'></Student>
   <Student name='rahiul' roll='40000' dept='eee'></Student>
   <Student name='rahim' roll='10000' dept='mnt'></Student> */}
    {/* <ToDo name='rahim' task='js' roll='00000' isDone={true}></ToDo>
    <ToDo name='rahim' task='python' roll='90000'isDone={false}></ToDo>
    <ToDo name='rahim' task='c++' roll='75000' isDone={true}></ToDo>
    <ToDo name='rahim'task='JS' roll='99000'isDone={false} ></ToDo> */}
    <Handle></Handle> 
    <Batsman></Batsman>
    <Suspense fallback={<h1>wait data coming by ✈</h1>
    }>
      <Users users={users}></Users>
    </Suspense>
    </>
  )
}

// function Student({name,roll,dept}){
//   return(
// <div className='student' style={{border:'5px solid red', margin:'5px', width:'300px', padding:'5px'}}>
    
//     <h2>name:{name}</h2>
//     <h3 style={{fontSize:'20px', color:'green'}}>roll:{roll}</h3>
//     <h1>dept:{dept}</h1>
// </div>
//   )
// }

export default App
