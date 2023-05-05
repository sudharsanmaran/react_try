import React, { useState } from "react";

import Movie from './movie'
import MovieForm from "./movieForm";



// const movies = 




const MoviesList = (props) => {

    const [moviesList, setMovies] = useState([
        {
          name: "The Matrix",
          info: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
          imdb: "8.7",
          year: "1999"
        },
        {
          name: "The Godfather",
          info: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
          imdb: "9.2",
          year: "1972"
        },
        {
          name: "The Shawshank Redemption",
          info: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
          imdb: "9.3",
          year: "1994"
        },
        {
          name: "The Dark Knight",
          info: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
          imdb: "9.0",
          year: "2008"
        },
        {
          name: "Pulp Fiction",
          info: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
          imdb: "8.9",
          year: "1994"
        },
        {
          name: "The Lord of the Rings: The Fellowship of the Ring",
          info: "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
          imdb: "8.8",
          year: "2001"
        },
        {
          name: "Forrest Gump",
          info: "The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other historical events unfold through the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.",
          imdb: "8.8",
          year: "1994"
        },
        {
          name: "The Silence of the Lambs",
          info: "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.",
          imdb: "8.6",
          year: "1991"
        },
        {
          name: "Goodfellas",
          info: "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito in the Italian-American crime syndicate.",
          imdb: "8.7",
          year: "1990"
        },
        {
          name: "Fight Club",
          info: "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.",
          imdb: "8.8",
          year: "1999"
        },
        {
          name: "Star Wars: Episode V - The Empire Strikes Back",
          info: "After the Rebels are brutally overpowered by the Empire on the ice planet Hoth, Luke Skywalker begins Jedi training with Yoda, while his friends are pursued by Darth Vader.",
          imdb: "8.7",
          year: "1980"
        }
      ]);
    
    const addMovie = () => {
        console.log('added')

    }


    return (
        <div>
            <MovieForm />

            <br/>
            {moviesList.map((movie, key) => {
                return (<Movie
                id={key}
                name={movie.name}
                info={movie.info}
                imdb={movie.imdb}
                year={movie.year}
                />)
            })
            }
        </div>
    )
}

export default MoviesList