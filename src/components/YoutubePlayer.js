import { useEffect, useState } from "react";



export default function YoutubePlayer ({videoSearch, handleOverlayChange}) {
    const [videoArray, setVideoArray] = useState([])
    const [currentVideo, setCurrentVideo] = useState(0)


    const paragraph = <p className="paragraph">Due to copyright restrictions, certain artists and labels don't allow their music to be embeded on other platforms. If a video isn't playable, or you just want to see more, feel free to explore the music from multiple creators!</p>

    let currentlyPlaying;
    
    // let currentVideo = 0;

    let url = `https://www.youtube.com/embed/${videoArray[currentVideo]}`


    const video = <iframe className="video" src={url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    
    
    function handleRight(){
        console.log('i was clicked right')
        
        let newVar = currentVideo
        setCurrentVideo(newVar+1)
        if (currentVideo>videoArray.length){
            setCurrentVideo(0)
        }
        console.log(currentVideo)
    }

    function handleLeft(){
        console.log('i was clicked')
        let newVar = currentVideo
        setCurrentVideo(newVar-1)
        if (currentVideo<0){
            setCurrentVideo(videoArray.length)
        }
        console.log(currentVideo)
    }
 
    
    
    const search = videoSearch.replace(/ /g,"%20") + ' ' + 'song'

    useEffect(()=>{

        fetch(`https://youtube-v31.p.rapidapi.com/search?q=${search}&part=snippet%2Cid&regionCode=US&maxResults=10&order=date`, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '996fb8ed5emsha9ad0b399aad76ep11e511jsn911a950359d7',
                'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
            }})
            .then(response => response.json())
            .then(response => {
                

                let newArray = []

                for(let video in response.items){
                    if (response.items[video].id.videoId){
                        console.log(response.items[video].id.videoId)
                        newArray = [...newArray, response.items[video].id.videoId]
                        localStorage.setItem(`videoResults${video}`, JSON.stringify(response.items[video].id.videoId))
    
                        
                    }
                }   
                setVideoArray(newArray)

                
                console.log(videoArray)
            })
            .catch(err => console.error(err));

    },[])

        
        
        
        


    const button1 = <button onClick={handleRight} className="right">{">"}</button>
    const button2 = <button onClick={handleLeft} className="left">{"<"}</button>
    const button3 = <button onClick={handleOverlayChange} className="close">x</button>

    const p = <p>{videoSearch}</p>




    return(
            <>
                {paragraph}
                {button1}
                {button2}
                {button3}
                {video}



            </>
    )
}