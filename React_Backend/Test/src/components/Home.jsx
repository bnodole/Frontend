import React, { useContext } from 'react'
import { createContext } from 'react';

const DataContext = createContext();

const Home = () => {
  const username = "Test User1";
  return (
    <div>
      Home
      <One a1={username}/>
      <DataContext.Provider value={username}>
        <GParent/>
      </DataContext.Provider>
    </div>
  )
}

function One({a1}){
  return <Two a2={a1}/>
}

function Two({a2}) {
  return <h1>{a2}</h1>
}

function GParent(){
  return <Parent/>
}

function Parent(){
  return <Child/>
}

function Child(){
  const check = useContext(DataContext);
  return <h1>{check}</h1>
}
export default Home