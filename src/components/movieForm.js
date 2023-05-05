import { useState } from "react"



const MovieForm = () =>{


return(
    <form >
        <input type="text"  placeholder="enter name"/>
        <br/>
        <input type="text"  placeholder="enter info"/>
        <br/>
        <input type="text" placeholder="enter imdb"/>
        <br/>
        <input type="text" placeholder="enter year"/>
        <br/>
        <button>SAVE</button>
    </form>
)
}

export  default MovieForm