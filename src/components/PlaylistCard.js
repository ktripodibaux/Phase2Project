

function PlaylistCard({playlist, handleClick}) {
    const name = playlist.name
    const image = playlist.image? playlist.image : playlist.images.items[0].sources[0].url
    
    const newObj ={
        name: name,
        image: image
    }
    const saveButton = <button className="save" onClick={() => handleClick(newObj, 'playlists')} >💾</button>

        return(
    
            <div className="artistCard">
                <img src={image}/>
                <h4>{name}</h4>
                {saveButton}
            </div>
        )
    }
    
    export default PlaylistCard