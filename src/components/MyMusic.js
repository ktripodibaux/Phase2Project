import { useEffect, useState } from "react"
import Layout from "./Layout"
import MusicPage from "./MusicPage"

function MyMusic ({results, state, change}) {
    const [myMusic, setMyMusic] = useState(undefined)
    const [noSearch, setNoSearch] = useState(true)
  
    useEffect(()=>{
        change()
    },[])

    function handleNoSearch(){
        setNoSearch(!noSearch)
    }

    


    return(
        <>
        <Layout noSearch={noSearch} change={change} 
        />
        <h1 className="show">Saved Music: </h1>
        <MusicPage results={'placeholder'} noSearch={noSearch} state={state}/>
        </>
    )
}

export default MyMusic