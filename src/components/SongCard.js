

function SongCard({song, handleClick , handleOverlayChange}){

const {name} = song.data ? song.data : song
const image = song.image ? song.image : song.data.albumOfTrack.coverArt.sources[0].url 

const newObj = {
    name: name,
    image: image,
}

const button = <button className="save" onClick={()=>handleOverlayChange(newObj)}>🎵</button>
const saveButton = <button className="save" onClick={() => handleClick(newObj, 'songs')} >💾</button>


    return(
        <div className="songCard">
            <img src={image}/>
            <div className="lock">
            <h4>{name}</h4>
            {button}
            {saveButton}
            </div>
        </div>
    )
}

export default SongCard