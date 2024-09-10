import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const RouterComponent = () => {
  const navigate = useNavigate()
  useEffect(()=>{
    setTimeout(()=>navigate('/error',{replace:true}),500)
},[navigate])
}

export default RouterComponent

