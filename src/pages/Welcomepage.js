import React, { useEffect } from 'react';
import Header from '../components/Header/Header';
import './Welcomepage.css';
import starsImage from "./../assets/stars4.png";
import moonImage from "./../assets/moon.png";
import mountainsBackImage from "./../assets/backMountains.png";
import mountainsFrontImage from "./../assets/frontMontainspng.png";
import AboutMe from '../components/AboutMe/AboutMe';

function Welcomepage() {
    useEffect(() => {
        function handleScroll() {
            const value = window.scrollY;
            const stars = document.getElementById('stars');
            const moon = document.getElementById('moon');
            const mountainsBack = document.getElementById('mountains_back');
            const text = document.getElementById('text');
            const btn = document.getElementById('btn');
            const header = document.querySelector('header');


            if (stars) stars.style.transform = `translateX(${value * 0.5}px)`;
            if (moon) moon.style.transform = `translateY(${value * 1.05}px)`;
            if (mountainsBack) mountainsBack.style.transform = `translateY(${value * 0.5}px)`;
            if (text) text.style.transform = `translateX(${value * -4.5}px) translateY(${value * 0.65}px)`;
            if (btn) btn.style.transform = `translateY(${80 + value * 1.05}px)`;
            if (header) header.style.transform = `translateY(${value * 0.5}px)`;


        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <div className='page'>
                <Header />
                <section>
                    <img src={starsImage} alt="Stars background" id="stars" />
                    <img src={moonImage} alt="Moon" id="moon" />
                    <img src={mountainsBackImage} alt="Mountains back" id="mountains_back" />
                    <h2 id="text">Sirine Yakhou</h2>
                    <a href="#aboutMe" id='btn'>Explore</a>
                    <img src={mountainsFrontImage} alt="Mountains front" id="mountains_front" />
                </section>
                <div className='aboutMe' id='aboutMe'>
                    <AboutMe />
                </div>
                <div className='Contacts' id='Contacts'>
                    <h2>Contacts</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Auctor eu augue ut lectus. Orci dapibus ultrices in iaculis nunc sed augue lacus viverra. Id donec ultrices tincidunt arcu non sodales. Turpis egestas pretium aenean pharetra magna ac placerat. Est placerat in egestas erat imperdiet. Fermentum leo vel orci porta non pulvinar neque laoreet suspendisse. Urna nec tincidunt praesent semper. Scelerisque viverra mauris in aliquam sem fringilla ut morbi. Faucibus interdum posuere lorem ipsum dolor sit amet. Senectus et netus et malesuada fames ac. Euismod quis viverra nibh cras pulvinar mattis nunc sed. Congue quisque egestas diam in arcu. Blandit turpis cursus in hac habitasse platea. Lorem ipsum dolor sit amet consectetur adipiscing elit ut.

                        porttitor massa id neque. Et malesuada fames ac turpis egestas sed tempus urna. Risus viverra adipiscing at in tellus. Nulla facilisi etiam dignissim diam quis enim lobortis scelerisque.</p>
                </div>
                <div className='Experiences' id='Experiences'>
                    <h2>Experiences</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Auctor eu augue ut lectus. Orci dapibus ultrices in iaculis nunc sed augue lacus viverra. Id donec ultrices tincidunt arcu non sodales. Turpis egestas pretium aenean pharetra magna ac placerat. Est placerat in egestas erat imperdiet. Fermentum leo vel orci porta non pulvinar neque laoreet suspendisse. Urna nec tincidunt praesent semper. Scelerisque viverra mauris in aliquam sem fringilla ut morbi. Faucibus interdum posuere lorem ipsum dolor sit amet. Senectus et netus et malesuada fames ac. Euismod quis viverra nibh cras pulvinar mattis nunc sed. Congue quisque egestas diam in arcu. Blandit turpis cursus in hac habitasse platea. Lorem ipsum dolor sit amet consectetur adipiscing elit ut.

                        porttitor massa id neque. Et malesuada fames ac turpis egestas sed tempus urna. Risus viverra adipiscing at in tellus. Nulla facilisi etiam dignissim diam quis enim lobortis scelerisque.</p>
                </div>
            </div>
        </div>
    );
}

export default Welcomepage;
