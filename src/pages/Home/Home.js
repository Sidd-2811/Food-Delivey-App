import React from 'react'
import Layout from '../../components/Layouts/Layout'
import Section1 from './Section1'
import '../../styles/HomeStyles.css'
function Home() {
  return (
    <>
      <Layout>
        {/* Home section hero banner */}
        <Section1/>
      </Layout>
    </>
  )
}

export default Home