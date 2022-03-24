import React from 'react'
import './navMenu.scss';

function NavMenu() {
    return (
        <>

            <nav>
                <div className="navContent">

                    <div className="toggleBtn">
                        <i className="fa-solid fa-plus"></i>
                    </div>
                    <span>
                        <a href="#"><i className="fa-solid fa-house"></i></a>
                    </span>
                    <span>
                        <a href="#"><i className="fa-solid fa-camera"></i></a>
                    </span>
                    <span>
                        <a href="#"><i className="fa-solid fa-stopwatch"></i></a>
                    </span>
                    <span>
                        <a href="#"><i className="fa-solid fa-map"></i></a>
                    </span>
                    <span>
                        <a href="#"><i className="fa-solid fa-gear"></i></a>
                    </span>
                </div>
            </nav>

        </>
    )
}

export default NavMenu