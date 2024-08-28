import React from 'react'
import Header from './Header.js'
// import Footer from './Footer.js'
function Layout({children}) {
  return (
    <>
    <Header/>
    {/* header and footer are common so we wrp it into a layout file and here only content changes */}
    <div>{children}</div>
    {/* <Footer/> */}
    </>
  )
}

export default Layout