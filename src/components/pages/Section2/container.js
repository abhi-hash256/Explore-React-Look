import React, { useEffect, useState } from 'react'


const Container = Main => 
function Container(props){

    const [ isJokeFetching, setFetchingFlag ] = useState(true);
    const [norrisJoke, setNorrisJoke] = useState({});

    useEffect(()=>{
       fetchSingleNorrisJoke();
    }, []);

    const fetchSingleNorrisJoke = () => {
        fetch('https://api.chucknorris.io/jokes/random')
        .then(res => res.json())
        .then(response => {
            setFetchingFlag(false);
            setNorrisJoke(response)
        })
    }

    return(
        <Main isJokeFetching={isJokeFetching} norrisJoke={norrisJoke}/>
    )
}

export default Container;
