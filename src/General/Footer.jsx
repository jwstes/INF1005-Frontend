import { useState } from 'react'

function Header() {

  return (
    <>
          <nav className="navbar navbar-expand-lg bg-body-tertiary" aria-label="Header Navigation">
              <div className="container-fluid footerSection" aria-labelledby="headerTitle">
                  <h2 id="headerTitle">GROUP PROJECT</h2>
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
