import React from "react"
import Layout from "./components/Layout"

function Home ({search}) {

    return (
        <div className="app">
          <Layout search={search}>
          <img className='headpic' src='https://i1.sndcdn.com/avatars-000646870995-fsg8na-t500x500.jpg' />
          <h1><i>Listen to and explore your favorite music</i></h1>
          <img className="test" src="https://media.istockphoto.com/vectors/vector-45-vinyl-record-vector-id1262769226?k=20&m=1262769226&s=612x612&w=0&h=9lxXXRJXdAGQHN4umdHvcRYV-AdAfuu8TC5Cv6zJ6NE=" />
          </Layout>
        </div>
      )
}

export default Home