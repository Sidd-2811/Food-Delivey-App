import React from 'react'
import Header from '../Layouts/Header.js'
import Footer from '../Layouts/Footer.js'
function Layout({children}) {
  return (
    <>
    {/* header and footer are common so we wrp it into a layout file and here only content changes */}
    <Header/>
    <div>{children}</div>
    <Footer/>
    </>
  )
}

export default Layout