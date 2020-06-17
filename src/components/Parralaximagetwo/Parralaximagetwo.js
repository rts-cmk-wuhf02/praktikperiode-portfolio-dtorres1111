import React from "react"
import styled from "styled-components"
import parralaxTwo from "../../images/blulake.png"

const Parralaximagetwo = () => {
  return <StyledParralaximagetwo></StyledParralaximagetwo>
}

export default Parralaximagetwo

const StyledParralaximagetwo = styled.section`
  background-image: url(${parralaxTwo});
  width: 100%;
  height: 500px;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`
