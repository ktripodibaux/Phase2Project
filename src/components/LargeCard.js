

function LargeCard({album, handleClick}) {

const name = album.name ? album.name : album.data.name
const image = album.image ? album.image : album.data.coverArt.sources[0].url

const newObj = {
    name: name,
    image: image
}

const saveButton = <button className="save" onClick={() => handleClick(newObj, "albums")} >💾</button>

    return(
        <div className="largeCard">
            <img src={image}/>
            <h4>{name}</h4>
            {saveButton}
        </div>
    )
}

export default LargeCard