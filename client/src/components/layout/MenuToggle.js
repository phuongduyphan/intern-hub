import React, { Component } from 'react';

class MenuToggle extends Component {
    render() {
        return (
            <div>
                <div className="menuToggle">
                    <input type="checkbox" />
                    <span />
                    <span />
                    <span />
                    <ul className="menu">
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/">About</a>
                        </li>
                        <li>
                            <a href="/">Info</a>
                        </li>
                        <li>
                            <a href="/">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default MenuToggle;