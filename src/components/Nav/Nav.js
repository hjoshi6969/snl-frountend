import React, { useState } from 'react'



function Nav() {

    const [navOpen, setNav] = useState(false);

    function handleNav(){
        if (navOpen) {
            setNav(!navOpen)
        } else {
            setNav(!navOpen)
        }
    }

  return (
    <div className={`navContainer ${navOpen ? 'navOpen' : 'navClosed'}`}>
        <nav>
            <div className='Inner-nav'>
                <div className='lessionsContainer'>
                    <div className='navHeading'>Your Lessions</div>
                    <div className='NavContentLink navlink'>What is Light...</div>
                    <div className='NavContentLink navlink'>Banks...</div>
                    <div className='NavContentLink navlink'>Tax Laws...</div>
                </div>
                <div className='songsContainer'>
                    <div className='navHeading'>Your PlayList</div>
                    <div className='NavContentButton navlink'>
                        <img src='https://th.bing.com/th/id/R.e585df5932a2fd27edab1070a8d89df1?rik=NUNbpxzFFONiYA&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2fwhite-music-note-transparent-background%2fwhite-music-note-transparent-background-20.png&ehk=E1msLhylpN6R3hRPFWzfl4waIc2ftlP2IFse3%2beClHA%3d&risl=&pid=ImgRaw&r=0'/>
                        <div className='NavButtonData'>
                            <>Mount Everest</>
                            <div className='NavButtonDataType'>Song</div>
                        </div>
                    </div>
                    <div className='NavContentButton navlink'>
                        <img src='https://th.bing.com/th/id/R.e585df5932a2fd27edab1070a8d89df1?rik=NUNbpxzFFONiYA&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2fwhite-music-note-transparent-background%2fwhite-music-note-transparent-background-20.png&ehk=E1msLhylpN6R3hRPFWzfl4waIc2ftlP2IFse3%2beClHA%3d&risl=&pid=ImgRaw&r=0'/>
                        <div className='NavButtonData'>
                            <>Devil</>
                            <div className='NavButtonDataType'>Song</div>
                        </div>
                    </div>
                    <div className='NavContentButton navlink'>
                        <img src='https://th.bing.com/th/id/R.e585df5932a2fd27edab1070a8d89df1?rik=NUNbpxzFFONiYA&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2fwhite-music-note-transparent-background%2fwhite-music-note-transparent-background-20.png&ehk=E1msLhylpN6R3hRPFWzfl4waIc2ftlP2IFse3%2beClHA%3d&risl=&pid=ImgRaw&r=0'/>
                        <div className='NavButtonData'>
                            <>Beat It</>
                            <div className='NavButtonDataType'>Song</div>
                        </div>
                    </div>
                    <div className='NavContentButton navlink'>
                        <img src='https://th.bing.com/th/id/R.e585df5932a2fd27edab1070a8d89df1?rik=NUNbpxzFFONiYA&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2fwhite-music-note-transparent-background%2fwhite-music-note-transparent-background-20.png&ehk=E1msLhylpN6R3hRPFWzfl4waIc2ftlP2IFse3%2beClHA%3d&risl=&pid=ImgRaw&r=0'/>
                        <div className='NavButtonData'>
                            <>High way to H...</>
                            <div className='NavButtonDataType'>Song</div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        <div className='navIcon' onClick={handleNav}></div>
    </div>
  )
}

export default Nav