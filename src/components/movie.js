const Movie = (props) => {
    const edit = () => {
        console.log('edited')
    }

    const del = () => {
        console.log('deleted')
    }

    return(
        <div>
            <h2>{props.name}</h2>
            <h3>{props.info}</h3>
            <h3>{props.imdb}</h3>
            <h3>{props.year}</h3>
            <button onClick={edit}>Edit</button>
            <br/>
            <button onClick={del}>del</button>
        </div>
    )
}

export default Movie