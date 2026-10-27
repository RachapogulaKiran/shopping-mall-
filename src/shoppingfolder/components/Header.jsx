import React from 'react'

const Header = () => {
  return (
    <div className="headerSection">

      <div className='left'>
        <div className='tittle'>
          <h1>shopping mall</h1>
        </div>
      </div>


      <div className="center">
        <ul>
          <li>Men</li>
          <li>Women</li>
          <li>Children</li>
          <li>Beauty</li>
        </ul>
      </div>

      <div className="search">
        <input type="text" placeholder="search"/>
      </div>


      <div className="right">
        <div className="signin">
          signin/singup
        </div>

        <div className="cart">
          cart
        </div>
      </div>


    </div>
  )
}

export default Header
