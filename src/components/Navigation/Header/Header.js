import React, { Component } from 'react'
//importing the components that builds this component
import Logo from '../../ui/Logo/Logo'
import NavigationItems from './NavigationItems/NavigationItems'
import DropDownButton from './DropDownButton/DropDownButton'
import DropDown from './DropDown/DropDown'
import './Header.css'
//this is a presentation component,wich mean he is only responsible of rendering the ui,he wont handle any logic,the logic is usaly habdled by a container
//this component recives some properties to render from a container (the parent)
//this component renders the header of the website.

/*
    please note  this should be placed with the 
    containers,i only missed to place him in the
    containers folder
*/
class Header extends Component{
    state={
        dropDownIsVisible:false
    }
    showDropDownHandler=()=>{
        this.setState((prevState)=>{
            return{dropDownIsVisible:!prevState.dropDownIsVisible}
        })
    }
    render(){
        return(
            <header className='Header'>
                <DropDown clicked={this.showDropDownHandler} show={this.state.dropDownIsVisible} />
                <DropDownButton clicked={this.showDropDownHandler}/>
                <Logo />
                <nav>
                    <NavigationItems add={this.props.clicked}/>
                </nav>
            </header>
        )
    }
}
    
export default Header