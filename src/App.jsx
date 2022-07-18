import React, { useEffect, useState } from 'react';
import './App.css';
import Search from './components/Seach';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Home';
import MyMusic from './components/MyMusic';
import ReactDOM from "react-dom"

function RMF00201_setVal(URL){
  window.location.href = URL;
}

let searchAmount = 0

function App() {
const [searchResults, setSearchResults] = useState(undefined)
const [page2, setPage2] = useState(false)





useEffect(()=>{
  if(localStorage[`searchResults`] !== undefined){
    setSearchResults(JSON.parse(localStorage[`searchResults`]))
  }

},[])

useEffect(()=>{
  if(searchResults !== undefined){
    localStorage.setItem(`searchResults`, JSON.stringify(searchResults))
  }
})

function handleSave(object, string){
  console.log(object)
}



function handleSearch(event){
  event.preventDefault()
  const input = event.target[0].value
  input.replace(/ /g,"%20")

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '996fb8ed5emsha9ad0b399aad76ep11e511jsn911a950359d7',
      'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
    }
  };
  
  fetch(`https://spotify23.p.rapidapi.com/search/?q=${input}&type=multi&offset=0&limit=10&numberOfTopResults=5`, options)
    .then(response => response.json())
    .then(response => {
      setSearchResults(response)
    })
    .catch(err => console.error(err));
}


function handleState() {
  console.log('i was changes')
  setPage2(!page2)
}



  return (
    <>
    <Routes>
      <Route path="/" element={<Home search={handleSearch}/>}/>
      <Route path="/search" element={<Search state={page2} results={searchResults} search={handleSearch}/>}/>
      <Route path="/music"  element={<MyMusic change={handleState} state={page2} />} />
    </Routes>

    </>
  )
}

export default App;
