import React from 'react'

import MainParent from 'components/pages/MainParent';
import NavBar from 'components/pages/NavBar';

import './global.css';


class App extends React.Component{
    state = {
        name: "Abhishek Kumar"
    }


    render(){
        return(
            <>
                <NavBar/>
                <MainParent/>
            </>
            
        )
    }
}


export default App;