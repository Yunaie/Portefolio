import './Experiences.css'
import { Link } from 'react-router-dom';

function Experiences() {
    return (
        <div className='experiences-infos'>
            <div className='tcs'>
                <Link to='https://true-crime-story.onrender.com/'>
                    <h3>True Crime Story</h3>
                </Link>
                <p>
                    For a school project, I developed this blog featuring articles on criminal investigations. I completed it in 2023, marking my first foray into website creation.
                </p>
            </div>
            <div className='fdj'>
                <Link to='https://festival-du-jeu.vercel.app/'>
                    <h3>Festival Du Jeu</h3>
                </Link>
                <p>
                    This website was created for the Montpellier Game Festival to facilitate the management of volunteers for the organization.
                </p>
            </div>
            <div className='javaproject'>
                    <h3>Mental Heath App</h3>
                <p>
                    My team and I sought to develop an application that allows users to discuss their problems with others online in a secure environment. Additionally, users have access to various features designed to track their mental health progress.</p>
            </div>
            <div className='chatinc'>
                    <h3>Messaging App</h3>
                <p>
                    I developed a messaging application in C, where users could log in and exchange messages with each other, as well as access different channels within the server.</p>
            </div>
        </div>


    )
}

export default Experiences;