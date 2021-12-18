import React from 'react';

function Header(props) {
    return (
        <header className="masthead" style={props.header.style}>
            <div className="container position-relative px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-md-10 col-lg-8 col-xl-7">
                        <div className="site-heading">
                            <h1>{props.header.title}</h1>
                            <span className="subheading">{props.header.subtitle}</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
