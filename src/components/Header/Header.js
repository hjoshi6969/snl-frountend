import React, { useState } from 'react';

function Header() {
    const [play, setPlay] = useState(false);

    function handlePlay() {
        setPlay(!play);
    }

    return (
        <div className='HeaderContainer'>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
            <div className='HeaderHeading'>What is Light</div>
            <button onClick={handlePlay}>
                {play ? (
                    <span className="material-symbols-outlined">pause</span>
                ) : (
                    <span className="material-symbols-outlined">play_arrow</span>
                )}
            </button>
        </div>
    );
}

export default Header;
