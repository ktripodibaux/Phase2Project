import { useEffect, useState } from "react"
import Layout from "./Layout"
import MusicPage from "./MusicPage"

function Search ({results, search}) {

    function handleClick(object, string){
        fetch(`http://localhost:4000/${string}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(object)
        })
            
      }
  

    return(
        <>
        <Layout search={search}/>
        <h1 className="show">Search results: </h1>
        <MusicPage handleClick={handleClick} results={results} />
        </>
    )
}

export default Search