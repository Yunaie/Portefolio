import React, { useEffect } from 'react';
import Header from '../components/Header/Header';
import './Welcomepage.css';
import starsImage from "./../assets/stars4.png";
import moonImage from "./../assets/moon.png";
import mountainsBackImage from "./../assets/backMountains.png";
import mountainsFrontImage from "./../assets/frontMontainspng.png";
import Bio from '../components/Bio/Bio';

function Welcomepage() {
    useEffect(() => {
        function handleScroll() {
            const value = window.scrollY;
            const stars = document.getElementById('stars');
            const moon = document.getElementById('moon');
            const mountainsBack = document.getElementById('mountains_back');
            const text = document.getElementById('text');
            const btn = document.getElementById('btn');
            const mountainsFront = document.getElementById('mountains_front');
            const header = document.querySelector('header');
            

            if (stars) stars.style.transform = `translateX(${value * 0.5}px)`;
            if (moon) moon.style.transform = `translateY(${value * 1.05}px)`;
            if (mountainsBack) mountainsBack.style.transform = `translateY(${value * 0.5}px)`;
            if (text) text.style.transform = `translateX(${value * -4}px) translateY(${value * 0.65}px)`;
            if (btn) btn.style.transform = `translateY(${100 + value * 1.05}px)`;
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
                    <a href="#sec" id='btn'>Explore</a>
                    <img src={mountainsFrontImage} alt="Mountains front" id="mountains_front" />
                </section>
                <div className='sec' id='sec'>
                <Bio />
                    <h2>Parallax scrolling effects</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Auctor eu augue ut lectus. Orci dapibus ultrices in iaculis nunc sed augue lacus viverra. Id donec ultrices tincidunt arcu non sodales. Turpis egestas pretium aenean pharetra magna ac placerat. Est placerat in egestas erat imperdiet. Fermentum leo vel orci porta non pulvinar neque laoreet suspendisse. Urna nec tincidunt praesent semper. Scelerisque viverra mauris in aliquam sem fringilla ut morbi. Faucibus interdum posuere lorem ipsum dolor sit amet. Senectus et netus et malesuada fames ac. Euismod quis viverra nibh cras pulvinar mattis nunc sed. Congue quisque egestas diam in arcu. Blandit turpis cursus in hac habitasse platea. Lorem ipsum dolor sit amet consectetur adipiscing elit ut.

Amet luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor. Mauris nunc congue nisi vitae suscipit. Suspendisse faucibus interdum posuere lorem ipsum dolor sit amet consectetur. Sapien nec sagittis aliquam malesuada bibendum. Gravida rutrum quisque non tellus orci ac. Eget egestas purus viverra accumsan in nisl nisi scelerisque. Sagittis nisl rhoncus mattis rhoncus urna. Scelerisque mauris pellentesque pulvinar pellentesque. Praesent tristique magna sit amet purus. Convallis posuere morbi leo urna. Congue nisi vitae suscipit tellus mauris a diam maecenas sed.

Donec massa sapien faucibus et molestie ac feugiat sed. Faucibus vitae aliquet nec ullamcorper sit amet. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae. Sollicitudin ac orci phasellus egestas tellus rutrum. Convallis aenean et tortor at risus viverra adipiscing at in. Et tortor at risus viverra adipiscing. Vitae justo eget magna fermentum iaculis. Fusce ut placerat orci nulla pellentesque dignissim. Turpis massa sed elementum tempus egestas sed sed risus. Eget lorem dolor sed viverra ipsum nunc aliquet. Auctor elit sed vulputate mi sit amet mauris commodo. Odio ut sem nulla pharetra diam sit. Nascetur ridiculus mus mauris vitae ultricies leo integer malesuada. Amet nisl suscipit adipiscing bibendum est ultricies. Turpis cursus in hac habitasse platea dictumst. Erat nam at lectus urna duis convallis convallis tellus id. Elementum integer enim neque volutpat ac.

Curabitur vitae nunc sed velit. Neque sodales ut etiam sit amet nisl purus in. Eu tincidunt tortor aliquam nulla facilisi cras fermentum odio. Sit amet massa vitae tortor condimentum. Felis bibendum ut tristique et egestas. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Felis eget velit aliquet sagittis id consectetur. Neque sodales ut etiam sit. At quis risus sed vulputate odio. Ullamcorper sit amet risus nullam eget felis. Elementum eu facilisis sed odio morbi.

Ullamcorper morbi tincidunt ornare massa eget egestas. Tempus egestas sed sed risus pretium. Diam sollicitudin tempor id eu nisl nunc mi ipsum. Id ornare arcu odio ut sem. Porta nibh venenatis cras sed felis eget velit. Quam adipiscing vitae proin sagittis nisl. Tellus integer feugiat scelerisque varius morbi. Dictum non consectetur a erat nam. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Quisque non tellus orci ac. Commodo viverra maecenas accumsan lacus. Nulla facilisi morbi tempus iaculis urna id volutpat lacus. Enim facilisis gravida neque convallis a cras semper auctor. Praesent tristique magna sit amet. Suspendisse faucibus interdum posuere lorem. Egestas erat imperdiet sed euismod nisi porta lorem. Eget nunc scelerisque viverra mauris in.

Vitae congue mauris rhoncus aenean vel elit. Elit eget gravida cum sociis natoque penatibus et. Id diam vel quam elementum pulvinar etiam. Tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum. Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Etiam dignissim diam quis enim lobortis. Molestie a iaculis at erat pellentesque adipiscing commodo elit. Dui faucibus in ornare quam viverra orci sagittis eu volutpat. Eu scelerisque felis imperdiet proin fermentum. Habitant morbi tristique senectus et netus et malesuada fames ac. Porttitor lacus luctus accumsan tortor posuere ac ut. Dictum varius duis at consectetur lorem donec. Aliquam vestibulum morbi blandit cursus risus at ultrices mi. Fermentum et sollicitudin ac orci phasellus egestas tellus rutrum.

Nunc scelerisque viverra mauris in aliquam sem. Ultrices sagittis orci a scelerisque purus semper eget duis. In mollis nunc sed id. Pellentesque nec nam aliquam sem et tortor consequat. Nisl rhoncus mattis rhoncus urna neque viverra. Risus viverra adipiscing at in. Morbi tincidunt augue interdum velit euismod in pellentesque massa. Arcu cursus vitae congue mauris rhoncus aenean vel elit. Accumsan in nisl nisi scelerisque eu ultrices vitae. Rhoncus urna neque viverra justo nec ultrices. Ante metus dictum at tempor commodo ullamcorper a lacus. Ut porttitor leo a diam sollicitudin tempor. Maecenas ultricies mi eget mauris pharetra. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Eget aliquet nibh praesent tristique. Consectetur a erat nam at. Gravida in fermentum et sollicitudin ac orci phasellus. Egestas fringilla phasellus faucibus scelerisque eleifend donec.

Pellentesque habitant morbi tristique senectus et netus et. Quisque non tellus orci ac auctor augue. Elementum tempus egestas sed sed risus pretium quam vulputate. Neque sodales ut etiam sit. Sit amet purus gravida quis. Orci porta non pulvinar neque. Quam elementum pulvinar etiam non quam lacus. Nulla malesuada pellentesque elit eget. Commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend. Porttitor eget dolor morbi non arcu risus quis varius. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Ornare arcu dui vivamus arcu felis bibendum ut tristique et. Integer eget aliquet nibh praesent tristique magna sit amet. Auctor neque vitae tempus quam pellentesque. Enim diam vulputate ut pharetra sit amet aliquam. Morbi quis commodo odio aenean sed adipiscing diam. Ac feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper. Lorem dolor sed viverra ipsum nunc aliquet.

Sollicitudin nibh sit amet commodo. Mauris ultrices eros in cursus turpis massa tincidunt dui. Aenean vel elit scelerisque mauris. Eu nisl nunc mi ipsum faucibus vitae aliquet. Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum. Viverra maecenas accumsan lacus vel facilisis. Eu facilisis sed odio morbi quis commodo odio aenean sed. Eget magna fermentum iaculis eu non. Volutpat est velit egestas dui id ornare. Cursus vitae congue mauris rhoncus. Platea dictumst quisque sagittis purus sit amet volutpat consequat. Nulla aliquet porttitor lacus luctus accumsan tortor posuere ac. Diam volutpat commodo sed egestas egestas fringilla phasellus. Dignissim enim sit amet venenatis urna cursus eget nunc scelerisque. Quam id leo in vitae turpis. Imperdiet proin fermentum leo vel orci porta non.

Id neque aliquam vestibulum morbi blandit cursus risus at ultrices. In dictum non consectetur a erat nam at lectus. Facilisis sed odio morbi quis commodo. Pellentesque pulvinar pellentesque habitant morbi. Non tellus orci ac auctor. Turpis cursus in hac habitasse platea dictumst quisque. Malesuada fames ac turpis egestas. Commodo odio aenean sed adipiscing diam donec. Vulputate ut pharetra sit amet aliquam id. Non curabitur gravida arcu ac tortor dignissim convallis aenean. Odio eu feugiat pretium nibh ipsum consequat nisl vel pretium. Arcu risus quis varius quam quisque id diam vel quam. Duis ut diam quam nulla porttitor massa id neque. Et malesuada fames ac turpis egestas sed tempus urna. Risus viverra adipiscing at in tellus. Nulla facilisi etiam dignissim diam quis enim lobortis scelerisque.</p>
                </div>
            </div>
        </div>
    );
}

export default Welcomepage;
