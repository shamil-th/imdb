import React from 'react';
import FooterCss from './Footer.module.css'

const Footer = () => {
    return (
        <div className={FooterCss.footer}>
            <div className={FooterCss.sponsor_logo}>
                <p>an</p>
                <img src="https://logos-world.net/wp-content/uploads/2020/04/Amazon-Emblem.jpg" alt="amazon logo" />
                <p> company</p>
            </div>
            <div className={FooterCss.copyrigth}>
                <p>© 1990-2023 by IMDb.com, Inc</p>
            </div>
            <div className={FooterCss.bg_olor}></div>
        </div>
    )
}

export default Footer