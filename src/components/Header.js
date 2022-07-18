


function Header({props}){
    console.log(props)
    return(
        <header>
            {props.children}
            {props.noSearch? null : <form onSubmit={e=>{props.search(e)}}>
                <input placeholder="Type your search here" className="search" type='text' />
                <input className="sButton" type="submit" value="🔍"></input>
            </form>}
            
        </header>
    )
}

export default Header