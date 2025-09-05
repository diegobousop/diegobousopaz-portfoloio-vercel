import React from 'react'
import SocialNetworkIcon from './SocialNetworkIcon'

const Footer = () => {
  return (
    <div className='flex flex-row justify-center gap-6 pb-14'>

          <SocialNetworkIcon icon="/icons/linkedin.png" link="https://www.linkedin.com/in/diego-bouso-paz-248491289/" />
          <SocialNetworkIcon icon="/icons/github.png" link="https://github.com/diegobousop" />
    </div>
  )
}

export default Footer