import React from "react"
import styled from "styled-components"
import parralaxOne from "../../images/yellowdots.png"

const Parralaximageone = () => {
  return <StyledParralaximageone></StyledParralaximageone>
}

export default Parralaximageone

const StyledParralaximageone = styled.section`
  background-image: url(${parralaxOne});
  width: 100%;
  height: 500px;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`
