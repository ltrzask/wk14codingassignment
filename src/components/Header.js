import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
        <nav className="navbar bg-primary">
        <div className="container-fluid">
        <span className="navbar-brand text-white mb-0 fs-1">Movie Reviewer</span>
        </div>
    </nav>
    )
  }
}
