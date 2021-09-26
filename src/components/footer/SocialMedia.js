import React from 'react'
import './SocialMedia.css'
const SocialMedia = () => {
    return (
        <section className="navigation">
        <div className="float">
            <a className="link" target="_blank" rel="noreferrer" href="https://www.facebook.com/corebiz.ag/">
                <img src="images/icons8-facebook.svg" alt="facebook" className="icon" />
            </a>
            <a className="link" target="_blank" rel="noreferrer" href="https://www.instagram.com/corebizag/">
                <img src="images/icons8-instagram.png" alt="instagram" className="icon" />
            </a>
            <a className="link" target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/corebiz-brasil/">
                <img src="images/icons8-linkedin.svg" alt="linkedin" className="icon" />
            </a>
        </div>
    </section>
    )
}

export default SocialMedia
