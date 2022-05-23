import React from 'react'
import {BsLinkedin,BsGithub, BsFacebook, BsTwitter} from 'react-icons/bs'

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
            <BsLinkedin/>
        </div>
        <div>
            <BsGithub/>
        </div>
        <div>
            <BsFacebook/>
        </div>
        <div>
            <BsTwitter/>
        </div>

    </div>
  )
}

export default SocialMedia