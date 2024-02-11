import React from 'react';
import moi from '../../assets/moi.png';
import './AboutMe.css';
import Langues from '../Langues/Langues';
import HardSkills from '../HardSkills/HardSkills';
import SoftSkills from '../SoftSkills/SoftSkills';
import Text from '../Text/Text';

function AboutMe() {
    return (
        <div className='container'>
            <div className='bio-column'>
                <div className='bio'>
                    <img className='moi' src={moi} alt="Sirine Yakhou" />
                    <h1 className='name'>Sirine Yakhou</h1>
                    <div className='text-bio'>
                        <Text />
                    </div>
                </div>
            </div>
            <div className='skills-column'>
                <div className='langues-component'>
                    <Langues />
                </div>
                <div className='softSkillsContainer'>
                <SoftSkills />

                </div>
            </div>
            <div className='hard-skills-column'>
                <HardSkills />
            </div>
        </div>
    );
}

export default AboutMe;
