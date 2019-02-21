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
      <div id="contact" className="row contact-container">

        <form className="col-8">
          <div className="row justify-content-center contact-title">
            Contact
          </div>
          <div className="form-group">
            <input
              className="form-control form-control-sm"
              type="email"
              value={this.state.email}
              onChange={this.handleEmailChange}
              placeholder={"Your email"} />
            <textarea
              className="form-control"
              placeholder="Your messsage"
              value={this.state.message}
              onChange={this.handleMessageChange} />
            <button className="btn btn-outline-light">Send</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Contact;