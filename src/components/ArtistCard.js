

function ArtistCard({artist, handleClick}) {
const name = artist.name ? artist.name : artist.data.profile.name
const image = artist.image? artist.image : artist.data.visuals.avatarImage.sources[0].url

const newObj={
    name: name,
    image: image
}

const saveButton = <button className="save" onClick={() => handleClick(newObj, 'artists')} >💾</button>
    return(

        <div className="artistCard">
            <img src={image}/>
            <h4>{name}</h4>
            {saveButton}
        </div>
    )
}

export default ArtistCard