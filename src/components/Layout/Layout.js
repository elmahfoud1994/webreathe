import React from 'react'
import Header from '../Navigation/Header/Header'

const layaout=(props)=>(
    <div>
        <Header/>
        {props.children}
    </div>
)
export default layaout