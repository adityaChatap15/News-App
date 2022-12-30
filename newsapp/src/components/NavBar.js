import React, { Component } from 'react'

export class NavBar extends Component {


    render() {
        return (
            <div>

                <nav classname="navbar navbar-expand-lg bg-body-tertiary">
                    <div classname="container-fluid">
                        <a classname="navbar-brand" href="/">NewsMonkey</a>
                        <button classname="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span classname="navbar-toggler-icon"></span>
                        </button>
                        <div classname="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul classname="navbar-nav me-auto mb-2 mb-lg-0">
                                <li classname="nav-item">
                                    <a classname="nav-link active" aria-current="page" href="/">Home</a>
                                </li>
                                <li classname="nav-item">
                                    <a classname="nav-link" href="/about">About</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

            </div>
        )
    }
}

export default NavBar

