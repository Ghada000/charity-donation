import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import Medicaments from './components/Medicaments'
import Clothes from './components/Clothes'
import Blood from './components/Blood'
import Hair from './components/Hair'
import React,{useState} from 'react'

function App() {

  const[view,setView]=useState("Home")
  const[term,setTerm]=useState("")
  const changeView = (newView)=>{
    setView(newView)
  }

  return (
    <div>
        <Navbar changeView={changeView} set={setTerm}/>
    {view==="Home" && <Home   changeView={changeView}/>}
    {view==="Hair" && <Hair  term={term} changeView={changeView}/>}
    {view==="Blood" && <Blood  term={term} changeView={changeView}/>}
    {view==="Clothes" && <Clothes term={term} changeView={changeView}/>}
    {view==="Medicaments" && <Medicaments  term={term} changeView={changeView}/>}



        <Footer/>


   


    </div>
  )
}

export default App