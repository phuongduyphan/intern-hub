import React, { Component } from 'react';

class UserButton extends Component {
    render() {
        let recHeight='35px';
        let recWidth='100px';

        return (
            <div className="svg-wrapper">
               
                <div className="btnText">
                    <a href={this.props.link}>
                        <span className="spot" /> {this.props.buttonLabel}
                    </a>
                </div>
            </div>

        );
    }
}

export default UserButton;