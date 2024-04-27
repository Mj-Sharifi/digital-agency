import React, { useState } from 'react'
import SignIn from './SignIn'
import SignUp from './SignUp'
export default function Register() {
  const [page,setPage] =useState(true)
  const handlePage = () =>{
    setPage(!page)
  }
  return (
    <>
    {page?<SignIn handlePage={handlePage}/>:<SignUp handlePage={handlePage}/>}
    </>
  )
}
