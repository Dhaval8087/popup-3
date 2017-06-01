import React, { Component } from 'react';
import { connect } from 'react-redux';
import Moresuggestion from './Moresuggestion';
import Socialsignin from './Socialsignin';
import Emailsignin from './Emailsignin';
class Home extends Component {
    render() {
        return (
            <div className="modal-popup">
                <div className="content">
                    <section className="buttons-sign-in">
                        <h1 id="title" align="center">
                            Sign in to alerts servece on your favorite topics on telegraph.co.uk
                         </h1>
                       <Socialsignin />
                       <Emailsignin />
                    </section>
                    <Moresuggestion />
                </div>
            </div>
        )

    }
}
export default connect(null, null)(Home);