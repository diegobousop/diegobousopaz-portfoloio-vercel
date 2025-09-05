import React from 'react'

const SocialNetworkIcon = ({ icon, link }) => {
  return (
    <div className="flex justify-center mt-5">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          ///src="/icons/linkedin.png"
          src={icon}
          alt="LinkedIn"
          className="w-12 h-auto transition-all duration-[500ms] hover:scale-125 hover:drop-shadow-[0_0_24px_white] m-5"
          style={{ transitionProperty: 'all' }}
        />
      </a>
    </div>
  )
}

export default SocialNetworkIcon