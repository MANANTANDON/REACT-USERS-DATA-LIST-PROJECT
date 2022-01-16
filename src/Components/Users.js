//Components Import
import React from 'react'

//Css Imports
import './Users.css'

export const Users = props =>{
    return(
        <React.Fragment>
                <div className = 'details'>
                    {props.user}({props.birthday} yrs Old)
                </div>           
        </React.Fragment>
    )
}