import React from 'react'
import './sideBar.scss';

function SideBar() {
    return (
        <>
            <div className="sidebar">
                <div className="logoContent">
                    <div className="logo">
                        <i className="fa-brands fa-github"></i>
                        <div className="logoName">Model</div>
                    </div>
                    <i className="fa-solid fa-bars" id="btn"></i>
                </div>
                <ul className="navList">
                    <li>
                        <a href="#">
                            <i className="fa-solid fa-magnifying-glass"></i>
                            <input type="text" placeholder="Search" />
                        </a>
                        <span className="toolTip">Search</span>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fa-brands fa-dev"></i>
                            <span className="linksName">Dashboard</span>
                        </a>
                        <span className="toolTip">Dashboard</span>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fa-regular fa-user"></i>
                            <span className="linksName">User</span>
                        </a>
                        <span className="toolTip">User</span>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fa-regular fa-message"></i>
                            <span className="linksName">Messages</span>
                        </a>
                        <span className="toolTip">Messages</span>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fa-solid fa-chart-pie"></i>
                            <span className="linksName">Analytics</span>
                        </a>
                        <span className="toolTip">Analytics</span>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fa-regular fa-folder"></i>
                            <span className="linksName">File Manager</span>
                        </a>
                        <span className="toolTip">File Manager</span>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fa-solid fa-cart-shopping"></i>
                            <span className="linksName">Order</span>
                        </a>
                        <span className="toolTip">Order</span>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fa-regular fa-heart"></i>
                            <span className="linksName">Saved</span>
                        </a>
                        <span className="toolTip">Saved</span>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fa-solid fa-gear"></i>
                            <span className="linksName">Settings</span>
                        </a>
                        <span className="toolTip">Settings</span>
                    </li>
                </ul>
                <div className="profileContent">
                    <div className="profile">
                        <div className="profileDetails">
                            <img src="https://avatars.githubusercontent.com/u/80105563?v=4" alt="pfp" />
                            <div className="nameJob">
                                <div className="name">Vitor Oliveira</div>
                                <div className="job">Front-End DEV</div>
                            </div>
                            <i className="fa-solid fa-arrow-right-from-bracket" id="logout"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className="homeContent">
                <div className="textArea">Home Content</div>
            </div>
        </>
    )
}

export default SideBar