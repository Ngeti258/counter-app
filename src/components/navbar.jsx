import React from 'react'

const Navbar = ({totalCounters}) => {
    return(
        <div>
        <nav className="navbar bg-light">
          <div className="container-fluid">
            <span className="navbar-brand mb-0 h1">Navbar 
            <span className="badge badge-pill badge-secondary">
              {totalCounters}</span></span>

</div>
</nav>
    </div>

    )
}


 
export default Navbar;