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

  render() {
    return (
      <div id="contact" className="contact-container">
        <div className="contact-title">
          Contact
        </div>

        {/* Example on https://test.formspree.io/ */}
        <form 
          className="contact-form" onSubmit={this.handleSendClick}
          action="https://formspree.io/italosilvadesouza@gmail.com" method="POST"
        >
          <input
            name="email"
            type="email"
            value={this.state.email}
            onChange={this.handleEmailChange}
            placeholder={"Your email"} />

          <textarea
            name="message"
            placeholder="Your messsage"
            value={this.state.message}
            onChange={this.handleMessageChange} />
          <button type="submit">Send</button>
        </form>
      </div>
    );
  }
}

export default Contact;