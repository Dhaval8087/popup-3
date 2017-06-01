import React, { Component } from 'react';

export default class Emailsignin extends Component {
    render() {
        return (
            <section className="section-other-options-and-back">
                <a className="other-options active" id="otherOptions">
                    other options
                            </a>
                <a className="back">
                    <p>
                        <i className="fa fa-angle-left" aria-hidden="true" />
                        <span id="backBtn">back</span>
                        <i className="fa fa-angle-right" aria-hidden="true" />
                    </p>
                </a>
            </section>
        )
    }
}