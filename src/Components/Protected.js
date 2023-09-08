import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Protected = (props) => {
    const {Components} = props
    const navigate = useNavigate();
    useEffect(()=>{
        let login = localStorage.getItem('Login')
        if(!login) {
            navigate('/login')
        }
    });
  return (

    <div>
    <Components/>


      
    </div>
  )
}

export default Protected
