import React, { useEffect, useState } from 'react'
import '../style/Card.css';
import {FaFacebookF,FaTwitter} from 'react-icons/fa'
import {AiOutlineGithub} from 'react-icons/ai'

function Card({match}){
const [repo,setRepo]=useState([{}])
    function da(){
        async function Init(){
            const response = await fetch(`https://api.github.com/users/${match.params.d}`)
            const data=await response.json()
            console.log(data)
            const dsa=[{bio:data.bio,avatar:data.avatar_url,name:data.name,followers:data.followers,following:data.following,id:data.id}]
          setRepo(dsa) 
        }
        
        return {Init}
      }
      useEffect(async() => {
          const d=da()
          d.Init()
      },[match.params.id])
    
    
    // useEffect(  ()=>{
        
    //     async function Loader(){
    //     const response = await fetch(`https://api.github.com/users/${match.params.d}`)
    //     const data=await response.json()
    //     const dsa=[{bio:data.bio,avatar:data.avatar_url,name:data.name,followers:data.followers,following:data.fo,id:data.id}]
    //     //setRepo(data)
    //     }
    //     Loader()
    // },[match.params.d])
    return(
        <>
        <div className="body">
            {console.log(repo[0].bio)}
            {
                repo.length>0 ? (
                    repo.map(ele=>(
                        
                        <main className="profile-card" key={ele.id}>
                    <header className="profile-header">
                        <div className="pas">
                            <div className="pic">
                                <img src={ele.avatar} alt="" width="100px" height="100px"/>
                            </div>
                            {console.log(ele.location)}
                        </div>
                        <div className="name">{ele['name']}</div>
                        <div className="bio">{ele.bio}</div>
                        <div className="sm">
                            <FaFacebookF size={30} color=""/>
                            <FaTwitter size={30} color=""/>
                            <AiOutlineGithub size={30} color=""/>
                        </div>
                        <div className='contact-btn'>Contact-me</div>
                    </header>
                    <footer className="card-footer">
                        <div className="numbers">
                            <div className="item">
                                <span>{ele.following}</span>
                                Following
                            </div>
                            <div className="border"></div>
                            <div className="item">
                                <span>{ele.followers}</span>
                                Followers
                            </div>
                            <div className="border"></div>
                            <div className="item">
                                <span>31</span>
                                Ornganizattion
                            </div>
                        </div>
                    </footer>
                </main>
                    ))
                )
                :
                (
                
                    <div className="warning">Aguarde</div>
                )
            }
            
            
            
            </div>
        </>
    )
}

export default Card