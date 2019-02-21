import React, { Component } from 'react';
import './Contact.css';
import 'bootstrap/dist/css/bootstrap.css';

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
        <form>
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
            <button>Send</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Contact;