import React, { Component } from "react";
import "../App.css";

export default class Home extends Component {
  render() {
    return (
      <>
        <header className="App-header">
          <h1>WELCOME TO VR KIDS</h1>
          <img src={"assignment2.jpg"} className="App-logo" alt="logo" />

          <p>
            This project is about a non-profit organization focused on helping
            in the recovery of kids with cancer with the use of Virtual Reality.
            I used Mozilla Hubs to demonstrate a unique experience to new users
            in order to convince them to help the organization.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </>
    );
  }
}