import React, { Component } from 'react';
import './Button.css'; // Tell Webpack that Button.js uses these styles

export default class Button extends Component {
    render() {
        return (
            <div className="Button">
                <img alt='icon' src={process.env.PUBLIC_URL +'/pixta_67348418_S.png'}/>{this.props.name}
            </div>
        );
    }
}
