import React from "react"
import styled from "styled-components"

const Sectiontwo = () => {
  return (
    <StyledSectiontwo id="skills">
      <div>
        <h1>"SKILLS"</h1>
        <h3>"HTML"</h3>
        <h3>"CSS"</h3>
        <h3>"JAVASCRIPT"</h3>
      </div>
    </StyledSectiontwo>
  )
}

export default Sectiontwo

const StyledSectiontwo = styled.section`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr;
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
