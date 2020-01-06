import React from 'react'
import './Logo.css'
import logoImage from '../../../assets/images/webreathe.png'
const logo=(props)=>(
    <div className="Logo">
        <a href="http://webreathe.fr/" target="blank" ><img src={logoImage} /></a>
    </div>
)
export default logo