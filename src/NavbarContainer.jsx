import React, { Component } from 'react';
import { connect } from 'react-redux';

class Navbar extends Component {
    render() {
        const { counter } = this.props;
        return (
            <nav className="Navbar">
                {counter}
            </nav>
        );
    }
}

const mapStateToProps = state => ({
    counter: state
});

const NavbarContainer =connect (mapStateToProps)(Navbar)

export default NavbarContainer;

