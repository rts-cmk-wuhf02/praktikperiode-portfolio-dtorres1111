import React from "react"
import styled from "styled-components"

const Emailform = () => {
  return (
    <StyledEmailform>
      <form
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input name="form-name" type="hidden" value="contact" />
        <label htmlFor="name">Full Name</label>
        <input type="text" name="name" />
        <label htmlFor="email">Enter Your Email Here..</label>
        <input type="text" name="email" />
        <button>Send Email</button>
      </form>
    </StyledEmailform>
  )
}

export default Emailform

const StyledEmailform = styled.section`
  width: 350px;
  height: 350px;
  border-radius: 20px;
  background-color: coral;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  input {
    border-radius: 20px;
    border: none;
  }

  label {
    display: flex;
    flex-direction: column;
  }

  button {
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    border: none;
    width: 100px;
    background-color: greenyellow;
    color: black;
  }
`
