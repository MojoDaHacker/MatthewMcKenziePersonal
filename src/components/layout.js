import React from 'react'
// import '../assets/scss/main.scss'

const Layout = ({ children }) => (
  <React.Fragment>
    <div>
      <div>
        {children}
        {/* <Footer /> */}
      </div>
    </div>
  </React.Fragment>
)

export default Layout;