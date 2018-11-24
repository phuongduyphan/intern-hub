import React, { Component } from 'react';

class UserButton extends Component {
    render() {
        let recHeight='35px';
        let recWidth='100px';

        return (
            <div className="svg-wrapper">
                <svg height={recHeight} width={recWidth} xmlns="http://www.w3.org/2000/svg">
                    <rect className="shape" height={recHeight} width={recWidth} />
                </svg>
                <div className="btnText">
                    <a href="/">
                        <span className="spot" /> {this.props.buttonLabel}
                    </a>
                </div>
            </div>

        );
    }
}

export default UserButton;