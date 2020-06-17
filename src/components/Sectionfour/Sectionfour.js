import React from "react"
import styled from "styled-components"
import Emailform from "../Emailform/Emailform"

const Sectionfour = () => {
  return (
    <StyledSectionfour id="contact">
      <div>
        <h1>"CONTACT"</h1>
      </div>
      <Emailform />
    </StyledSectionfour>
  )
}

export default Sectionfour

const StyledSectionfour = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
  height: 500px;
  background-color: darkslategray;

  img {
    display: block;
    width: 10rem;
    height: 10rem;
    object-fit: cover;
    object-position: center;
  }

  div {
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  h1 {
    color: burlywood;
    font-family: "Bangers", cursive;
    font-size: 30px;
  }

  p {
    color: gray;
    font-family: "Bangers", cursive;
    font-size: 15px;
  }
`
