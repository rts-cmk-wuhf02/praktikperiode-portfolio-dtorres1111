import React from "react"
import SEO from "../components/seo"
import Headsection from "../components/Headsection/Headsection"
import Parralaximageone from "../components/Parralaximageone/Parralaximageone"
import Sectiontwo from "../components/Sectiontwo/Sectiontwo"
import Parralaximagetwo from "../components/Parralaximagetwo/Parralaximagetwo"
import Sectionthree from "../components/Sectionthree/Sectionthree"
import Sectionfour from "../components/Sectionfour/Sectionfour"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Headsection />
    <Parralaximageone />
    <Sectiontwo />
    <Parralaximagetwo />
    <Sectionthree />
    <Parralaximageone />
    <Sectionfour />
    <Parralaximagetwo />
  </>
)

export default IndexPage
