import React from 'react'

export const Navbar = () => {
    return (
        <div className="navbar">
            <span className="logo">Passport Example</span>
            <ul className="list">
                <li className="listItem">
                    <img src="https://images.unsplash.com/photo-1651775126244-3086ccd9a0e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80" alt="" className="avatar" />
                </li>
                <li className="listItem">Linda Eng</li>
                <li className="listItem">Logout</li>
            </ul>        
        </div>
    )
}

export default Navbar