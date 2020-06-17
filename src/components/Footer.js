import React from "react"
import styled from "styled-components"
import {
  FaCodepen,
  FaFacebookSquare,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa"

const StyledFooter = styled.footer`
  padding: 1rem;
  background-color: darkslategray;
  color: white;
  text-align: center;
`

const Footer = ({ siteSlogan }) => {
  return (
    <StyledFooter>
      <FaCodepen style={{ fontSize: "50px" }} />
      <FaFacebookSquare style={{ fontSize: "50px" }} />
      <FaGithub style={{ fontSize: "50px" }} />
      <FaLinkedin style={{ fontSize: "50px" }} />
    </StyledFooter>
  )
}

export default Footer
