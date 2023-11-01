import React from 'react';
import "./contact.css"
import HeaderSocials from '../home/HeaderSocials';

const Contact = () => {
    return (
        <section className="contact container section centered" id="contact">
            <h3 className="contact__title centered">Think we can work together? Let me know below!</h3>
        
            <HeaderSocials />
        
        </section>
    );
}

export default Contact;