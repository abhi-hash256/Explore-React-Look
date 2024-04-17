import React, { useEffect, useState } from 'react'


const Container = Main => 
function Container(props){

    const [activeState, setActiveState] = useState(false);

    useEffect(()=>{
        console.log("yessss");
       window.addEventListener('scroll', scrollHandler)
    }, []);

    const scrollHandler = ()=>{
        const position = window.scrollY;
        if(position > 0)
          setActiveState(true);
        else
          setActiveState(false)
        
    }

    return(
        <Main activeState={activeState}/>
    )
}

export default Container;