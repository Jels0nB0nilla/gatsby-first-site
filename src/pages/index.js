import React from "react"
import { Link } from'gatsby'

import Layout from "../components/layout"
import Head from "../components/head"

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home"/>
      <h1>Hello,</h1>
      <h2>I'm Jelson, a full stack developer living in Newark, N.J.</h2>
    </Layout>
  )
}

export default IndexPage
