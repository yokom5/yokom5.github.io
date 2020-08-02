import React, { Component } from 'react';
import './Profile.css';

export default class Profile extends Component {
    render() {
        return (
            <div className="Profile">
                <div className="Profile-box">
                    <section>
                        <div className="Profile-title">Summary</div>
                        - hogehoge
                    </section>
                    <section>
                        <div className="Profile-title">Skill</div>
                        - hogehoge
                    </section>
                    <section>
                        <div className="Profile-title">Work History</div>
                        - 3years, Engineer of financial service system.
                        <br/>
                        - Engineer of enterprise system.
                    </section>
                    <section>
                        <div className="Profile-title">Activity</div>
                        - hogehoge
                    </section>
                </div>
            </div>
        );
    }
}
