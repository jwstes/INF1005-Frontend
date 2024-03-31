import { useState } from 'react'

function Header() {

  return (
    <>
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
              <div className="container-fluid footerSection">
                  <p style={{margin: '0'}}>GROUP PROJECT</p>
                  <p>Done By:</p>
                  <ul>
                    <li>Gabriel Lee (2301906)</li>
                    <li>Elmo Cham (2301769)</li>
                    <li>Michael Tan (2302145)</li>
                    <li>Ming Quan (2301877)</li>
                  </ul>
              </div>
          </nav>
    </>
  )
}

export default Header
