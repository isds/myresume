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

  handleSendClick = (event) => {
    console.log('SEND CLICKED: ', this.state.message)
  }

  render() {
    return (
      <div id="contact" className="contact-container">
        <div className="contact-title">
          Contact
        </div>

        <form className="contact-form" onSubmit={this.handleSendClick}>
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
        </form>
      </div>
    );
  }
}

export default Contact;