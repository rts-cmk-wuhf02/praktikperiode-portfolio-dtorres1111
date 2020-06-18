import React from "react"

const Emailform = () => {
  return (
    <div>
      <form
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input name="name" placeholder="Your Name" type="text" />
        <button>Send</button>
      </form>
    </div>
  )
}

export default Emailform

/* import React, { useState } from "react"
import styled from "styled-components"

const Emailform = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
  })

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&")
  }

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formState }),
    })
      .then(() => alert("Success!"))
      .catch((error) => alert(error))

    e.preventDefault()
  }

  return (
    <StyledEmailform>
      <form
        onSubmit={handleSubmit}
        name="cantact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact" />
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          onChange={handleChange}
          value={formState.name}
          placeholder="Enter your name"
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          onChange={handleChange}
          value={formState.email}
          placeholder="Enter your email"
        />
        <button type="submit">Submit</button>
      </form>
    </StyledEmailform>
  )
}

export default Emailform

const StyledEmailform = styled.section`
  button {
    background-color: red;
  }
`

import Emailform from "../Emailform/Emailform"
<Emailform /> */
