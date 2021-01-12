import React, { useState } from 'react'
import '../style/login.css'
import {AiOutlineGithub} from 'react-icons/ai'


function Login({history}) {
    // const [repo,setRepo]=useState({})
    const [textbox,setTextbox]=useState('')
    async function handleSubmit(e) {
        e.preventDefault();
    
        history.push(`/dev/${textbox}`);
      }
    return(
        <>
            <main className="login-container">
                <form onSubmit={handleSubmit}>
                    <div className="logo">
                    <AiOutlineGithub size={50} color=""/>
                    </div>
                    <input 
                    type="text"
                    placeholder="digite o seu GitHub"
                    onChange={(e)=>{
                        setTextbox(e.target.value)
                    }}
                    />
                    <button type="submit">Seguinte</button>
                </form>
            </main>
        </>
    )
}
export default Login