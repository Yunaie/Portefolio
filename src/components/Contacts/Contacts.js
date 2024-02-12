import React, { useState } from 'react';
import './Contacts.css';
import github from '../../assets/contacts/github.png';
import linkedin from '../../assets/contacts/linkedin.png';
import mail from '../../assets/contacts/mail.png';
import phone from '../../assets/contacts/phone.png';

function Contacts() {
    const [showEmail, setShowEmail] = useState(false);
    return (
        <div className='contacts-infos'>
            <div className='github'>
                <a href="https://github.com/Yunaie" target="_blank" rel="noopener noreferrer">
                    <img src={github} alt="GitHub" />
                </a>
            </div>
            <div className='linkedin'>
                <a href="https://www.linkedin.com/in/sirine-yakhou-125070247/" target="_blank" rel="noopener noreferrer">
                    <img src={linkedin} alt="LinkedIn" />
                </a>
            </div>
            <div className='mail' onMouseEnter={() => setShowEmail(true)} onMouseLeave={() => setShowEmail(false)}>
                {showEmail && <div className="email-popup">sirine.yakhou@etu.umontpellier.fr</div>}
                <img src={mail} alt="Mail" />
            </div>
        </div>
    );
}

export default Contacts;
