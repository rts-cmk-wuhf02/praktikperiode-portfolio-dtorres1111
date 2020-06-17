import React from "react"
import styled from "styled-components"
import astro from "../../images/danielprofil.png"

const Headsection = () => {
  return (
    <StyledHeadsection>
      <img src={astro} alt="" />
      <div>
        <h3>"HI MY NAME IS DANIEL TORRES"</h3>
        <p>"IM A FRONTEND DEVELOPER LETS BUILD SOMETHING AWESOME TOGETHER"</p>
        <button>CONTACT ME</button>
      </div>
    </StyledHeadsection>
  )
}

export default Headsection

const StyledHeadsection = styled.section`
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

  h3 {
    color: burlywood;
    font-family: "Bangers", cursive;
    font-size: 30px;
  }

  p {
    color: gray;
    font-family: "Bangers", cursive;
    font-size: 20px;
    margin-left: 40px;
  }

  button {
    border-radius: 20px;
    border: none;
    background-color: cadetblue;
    color: white;
    width: 200px;
    height: 30px;
    margin: 20px;
    transition: ease-in-out 500ms;
    :hover {
      background-color: rgb(95, 186, 189);
      transition: ease-in-out 500ms;
    }
  }
`
