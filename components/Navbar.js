import React from 'react'
import Link from 'next/link'

const pages = {
  'Home': {
    path: '/'
  },
  'Recent': {
    path: '/recent'
  },
  'Categories': {
    path: '/cats'
  },
  'Donate': {
    path: '/donate'
  }
}

const Navbar = ({ active }) => {
  return (
    <nav className="nav navbar-primary border-primary customNavBorder">
      <div className="navBrand text-4">
        techl0rd
      </div>
      <div className="navigation">
        { Object.keys(pages).map((key, i) =>
          <Link key={ i } href={ pages[key].path }>
            <button className="navBtn btn-info">{ key }</button>
          </Link>
        ) }
      </div>
    </nav>
  )
}

Navbar.getInitialProps = context => {
  return {
    active: context.query
  }
}

export default Navbar
