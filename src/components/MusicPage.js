import { Container } from "react-bootstrap"
import SongCard from "./SongCard"
import LargeCard from "./LargeCard"
import ArtistCard from "./ArtistCard"
import PlaylistCard from "./PlaylistCard"
import { useEffect, useState } from "react"
import ReactDOM from "react-dom"
import YoutubePlayer from "./YoutubePlayer"

function MusicPage({results, handleClick, state}) {
    const [savedSongs, setSavedSongs] = useState([])
    const [savedAlbums, setSavedAlbums] = useState([])
    const [savedArtists, setSavedArtists] = useState([])
    const [savedPlaylists, setSavedPlaylists] = useState([])
    const [makingForm, setMakingForm] = useState(false)
    const [open, setOpen] = useState(false);
    const [search, setSearch] = useState(undefined)
    useEffect(()=>{

        fetch('http://localhost:4000/songs').then(res=>res.json()).then(data=>setSavedSongs(data))

        fetch('http://localhost:4000/albums').then(res=>res.json()).then(data=>setSavedAlbums(data))

        fetch('http://localhost:4000/artists').then(res=>res.json()).then(data=>setSavedArtists(data))

        fetch('http://localhost:4000/playlists').then(res=>res.json()).then(data=>setSavedPlaylists(data))
    },[])


    if(!results){
        return(
            null
            )
        } 
        const modalRoot = document.getElementById("modal-root");

        const Modal = props => {
            var videoSearch;
            return ReactDOM.createPortal(
              <div className="overlay">{props.children}</div>,
              modalRoot
            );
          };


        let tracksArray = []
        let albumsArray= []
        let artistsArray = []
        let playlistsArray = []

        function removeSaved(object, string){
            if (string == 'songs') {
                const newArray = savedSongs.filter(song=>{
                    if(song.name != object.name){
                        return song
                    }
                    
                })
                setSavedSongs(newArray)
            } else if (string == 'albums') {
                const newArray = savedAlbums.filter(song=>{
                    if(song.name != object.name){
                        return song
                    }
                    
                })
                setSavedAlbums(newArray)
            } else if (string == 'artists') {
                const newArray = savedArtists.filter(song=>{
                    if(song.name != object.name){
                        return song
                    }
                    
                })
                setSavedArtists(newArray)
            } else if (string == 'playlists') {
                const newArray = savedPlaylists.filter(song=>{
                    if(song.name != object.name){
                        return song
                    }
                    
                })
                setSavedPlaylists(newArray)
            }
        }

        function handleChange(input){
            const songs = savedSongs.filter(song=>{
                if (song.name.toLowerCase().includes(input.toLowerCase())) {
                  return song
                }
              })
              const albums = savedAlbums.filter(song=>{
                if (song.name.toLowerCase().includes(input.toLowerCase())) {
                  return song
                }
              })
              const artists = savedSongs.filter(song=>{
                if (song.name.toLowerCase().includes(input.toLowerCase())) {
                  return song
                }
              })
              const playlists = savedSongs.filter(song=>{
                if (song.name.toLowerCase().includes(input.toLowerCase())) {
                  return song
                }
              })

              setSavedSongs(songs)
              setSavedAlbums(albums)
              setSavedArtists(artists)
              savedPlaylists(playlists) 
        }


        
        if(state == true){
            function handleClick(object, string) {
                let id;
                fetch(`http://localhost:4000/${string}`).then(res=>res.json()).then(data=>data.forEach(item=>{
                    if(item.name === object.name){
                        removeSaved(object, string)
                        
                        fetch(`http://localhost:4000/${string}/${item.id}`, {
                    method: 'DELETE'
                })
                    }
                }))
            }

        tracksArray = savedSongs.map(song=>{
            return <SongCard handleClick={handleClick} song={song} />
        })

        albumsArray = savedAlbums.map(album=>{
            return <LargeCard handleClick={handleClick} album={album} />
        })

        artistsArray = savedArtists.map(artist=>{
            return <ArtistCard handleClick={handleClick} artist={artist} />
        })

        playlistsArray= savedPlaylists.map(playlist=>{
            return <PlaylistCard handleClick={handleClick} playlist={playlist} />
        })

        } else if (results !== 'placeholder')
         {
            const {tracks, albums, artists, playlists} = results
        for (let i=0; i<10; i++) {
            tracksArray.push(<SongCard handleOverlayChange={handleOverlayChange} handleClick={handleClick} song={tracks.items[i]} />)
        }
        for(let i=0; i<6; i++) {
            albumsArray.push(<LargeCard handleClick={handleClick} album={albums.items[i]} />)
        }
        for(let i=0; i<5; i++) {
            if(artists.items[i].data.visuals.avatarImage){
                artistsArray.push(<ArtistCard handleClick={handleClick} artist={artists.items[i]} />)
            }
        }
        for(let i=0; i<5; i++) {
            playlistsArray.push(<PlaylistCard handleClick={handleClick} playlist={playlists.items[i].data} />)
        }

        }

        function changeForm(){
            setMakingForm(!makingForm)
        }

        function handleForm(event){
            event.preventDefault()
            const newObj = {
                name: event.target[0].value,
                image: event.target[1].value
            }
            setSavedPlaylists([newObj, ...savedPlaylists])
            fetch('http://localhost:4000/playlists', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newObj)
            })


        }

        const button = <button onClick={changeForm} className="plistform">Make New Playlist</button>
        const form = <form className="center" onSubmit={handleForm}>
            <input placeholder="Playlist name" type='text'></input>
            <input placeholder="Image URL" type='text'></input>
            <input type="submit"></input>
        </form>
        
        function handleOverlayChange(object){
            
            setSearch(object.name)
            setOpen(!open)
        }



    
    return(
        <>
        <Container>
      {open && <Modal in={open}>{<YoutubePlayer videoSearch={search} handleOverlayChange={handleOverlayChange} />}</Modal>}



            {state ? button : null}
            {makingForm? form : null}
            <div className="subContainer1">
                <div className="songContainer">
                <div className="title">Songs: </div>
                    {tracksArray}
                    
                </div>
                

                <div className="albumContainer">
                <div className="title">Albums:</div>
                    {albumsArray}
                </div>
            </div>
            <div className="artistContainer">
                <div className="title">Artists: </div>
                {artistsArray}
                  
            </div>
            <div className="artistContainer">
                <div className="title">Playlists: </div>
                {playlistsArray}
            </div>

        </Container>
        </>
    )
}

export default MusicPage