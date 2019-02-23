import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = { email: '', message: '' }
  }

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value })
  }

  handleMessageChange = (event) => {
    this.setState({ message: event.target.value })
  }

  handleSendClick = () => {
    console.log('SEND CLICKED: ', this.state.message)
  }

  render() {
    return (
      <div id="contact" className="contact-container">
        <div >
          <div className="contact-title">
            Contact
          </div>
          <div>
            <input
              type="email"
              value={this.state.email}
              onChange={this.handleEmailChange}
              placeholder={"Your email"} />
            <textarea
              placeholder="Your messsage"
              value={this.state.message}
              onChange={this.handleMessageChange} />
            <button onClick={this.handleSendClick} >Send</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;