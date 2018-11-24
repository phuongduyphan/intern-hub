import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import BackgroundSlideshow from 'react-background-slideshow'


import background1 from'../../assets/img/What-is-an-internship-and-how-to-get-one-The-complete-handbook.jpg';
import background2 from'../../assets/img/internships_shannon_stream.jpg';

import background3 from'../../assets/img/target-that-intership.jpg';

class Landing extends Component {
  render() {
    return (
      <div className="landing">
                  <div className="curtain"></div>

            <BackgroundSlideshow images={[ background1,background2,background3]} />
        <div className="landing-content">
          <div className="jobSearching">
            <h1 >
              <span>Find the Right Job</span> .
                    <span>Right Now.</span>
            </h1>
            <p>Your job search starts and ends with us.</p>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Your skill, position or companny..."
              />
              <div className="input-group-append">
                <button className="btn btn-success mySearchingButton " type="button">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );

  }
}


export default connect(null)(Landing);