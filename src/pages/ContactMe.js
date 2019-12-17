import React, { Component } from 'react'
import Canvas from '../components/Canvas'
export default class ContactMe extends Component {
  render() {
    return (
      <div>
        <Canvas/>
        <div className="contact-form">
          <form
            action="https://formspree.io/chefbg555@gmail.com"
            method="POST"
          >
            <div className="landing-contact-wrapper-from-input">
              <div className="form-input">
                <label htmlFor="your-email">Name</label>
                  <input
                    id="contact-name"
                    type="text"
                    name="contact-name"
                    autoComplete="off"
                    placeholder="Brendan Guralsky"
                  />
              </div>
              <div className="form-input">
                <label htmlFor="contact-email">Email</label>
                  <input
                    id="contact-email"
                    type="text"
                    name="contact-email"
                    autoComplete="off"
                    placeholder="chefbg555@gmail.com"
                  />
              </div>
                  <div className="form-input">
                    <textarea
                      id="contact-message"
                      name="contact-message"
                      cols="50"
                      rows="10"
                      >
                      </textarea>
                    </div>
                  </div>
                  <div className="landing-contact-buttons">
                    <button type="submit">Send</button>
                    <input type="reset" />
                  </div>
          </form>
        </div>
      </div>
    )
  }
}
