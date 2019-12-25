import React, { Component } from 'react'
import Logo from '../../ui/Logo/Logo'
import NavigationItems from './NavigationItems/NavigationItems'
import DropDownButton from './DropDownButton/DropDownButton'
import DropDown from './DropDown/DropDown'
import './Header.css'

class Header extends Component{
    state={
        dropDownIsVisible:false
    }
    showDropDownHandler=()=>{
        this.setState((prevState)=>{
            return{dropDownIsVisible:!prevState.dropDownIsVisible}
        })
    }
    addModule=()=>{
        this.setState({
            dropDownIsVisible:false
        })
        this.props.clicked()
    }
    render(){
        return(
            <header className='Header'>
                <DropDown clicked={this.showDropDownHandler} show={this.state.dropDownIsVisible} add={this.addModule}/>
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