//Components Import
import React, { useState } from 'react'

//Css Imports 
import './Form.css'

export const Form = props =>{

    const [ userData, setUserData] = useState({
        name: '',
        birth: ''
    })

    const submitHandler = event => {
        event.preventDefault()
        if(userData.name === ''){
            alert('invalid:404: inputs fields empty')
        }else if(userData.birth <= 0){
            alert('invalid:707: age cannot be a negative value')
        }else{
            props.sendDataToAppComponent(userData)
            setUserData({
                name: '',
                birth: ''
            })
        }
        
    }

    const userNameHandler = (event) =>{
        setUserData(preeData => {
            return{
                ...preeData,
                name: event.target.value
            }
        })
    }
    
    const userAgeHandler = (event) =>{
        setUserData(preeData => {
            return{
                ...preeData,
                birth: event.target.value
            }
        })

    }

    // console.log(data)

    return(
        <React.Fragment>
            <form className='formContainer' onSubmit = {submitHandler}>
                <span className = 'textContainer'>UserName:</span> <input 
                                                                        type = 'text' 
                                                                        placeholder = 'userName' 
                                                                        onChange = {userNameHandler}/>
                <span className = 'ageContainer'>Age (years): </span><input 
                                                                        type = 'number' 
                                                                        onChange = {userAgeHandler}/>
                <button type = 'submit'>Add User</button>
            </form>
        </React.Fragment>
    )
}