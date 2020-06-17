import React from "react"
import styled from "styled-components"

const Sectionthree = () => {
  return (
    <StyledSectionthree id="projects">
      <div>
        <h1>"PROJECTS"</h1>
      </div>
    </StyledSectionthree>
  )
}

export default Sectionthree

const StyledSectionthree = styled.section`
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
