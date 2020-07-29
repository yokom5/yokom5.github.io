import React, { Component } from 'react';
import './Profile.css';

export default class Profile extends Component {
    render() {
        // You can use them as regular CSS styles
        return (
            <div className="Profile">
                <div className="Profile-box">
                    <div className="Profile-title">Summary</div>
                    - system engineer of business system
                    <br/>
                    <div className="Profile-title">Work Experience</div>
                    - 2017-2020, Develop financial service system for oversea.
                    <br/>
                    - 2020, Develop enterprise system of Japan company.
                </div>
            </div>
        );
    }
}
