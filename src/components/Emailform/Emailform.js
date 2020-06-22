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
        <label htmlFor="name">Name</label>
        <input type="text" name="name" placeholder="Enter Your Name" />
        <label htmlFor="email">Email</label>
        <input type="text" name="email" placeholder="Enter Your Email" />
        <label htmlFor="message">Message</label>
        <input type="text" name="message" placeholder="Write a Message" />
        <label htmlFor="submit">Submit</label>
        <button>Send Email</button>
      </form>
    </StyledEmailform>
  )
}

export default Emailform

const StyledEmailform = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 350px;
  height: 350px;
  border-radius: 20px;
  background-color: cadetblue;

  input {
    text-align: center;
    border-radius: 5px;
    border: none;
    width: 200px;
    height: 50px;
  }

  label {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Bangers", cursive;
    color: white;
  }

  button {
    height: 50px;
    border-radius: 5px;
    border: none;
    width: 200px;
    background-color: burlywood;
    color: white;
  }
`
