import React from 'react'


const Container = Main => 
class Container extends React.Component{
    constructor(props){
        super(props);
        this.state = {
           currentActiveId: -1,
           currentState: 'default',
        }
    }

    clickHandler = (activeStateId) => {
        this.setState({ currentActiveId: activeStateId });
    }

    render(){
        return(
            <Main {...this.state} {...this.props} clickHandler={this.clickHandler}/>
        )
    }
}

export default Container;