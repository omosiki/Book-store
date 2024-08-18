import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';
const Navba = () => {
  return (
  <>
                  <Navbar bg="light" expand="lg" className='contain'>
                   <Navbar.Brand href="#home">BookStore</Navbar.Brand>
                   <Navbar.Toggle aria-controls="basic-navbar-nav" />
                   <Navbar.Collapse id="basic-navbar-nav">
                       <Nav className="ml-auto navB ">
                           <Nav.Link href="home">Home</Nav.Link>
                           <Nav.Link href="books">Books</Nav.Link>
                           <Nav.Link href="categories">Categories</Nav.Link>
                           <Nav.Link href="trending">Trending</Nav.Link>
                           <Nav.Link href="deals">Deals</Nav.Link>
                           <Nav.Link href="wishlist">Wishlist</Nav.Link>
                       </Nav>
                   </Navbar.Collapse>
               </Navbar>

      {/* <div className="hero">
                <h1>Welcome to Our Bookstore</h1><br/>         
    </div>

            <div className="container mt-5">
                <section id="books">
                    <h2>Books</h2>
                    <p>Explore our collection of amazing books.</p>
                </section>

                <section id="categories" className="mt-5">
                    <h2>Categories</h2>
                    <p>Browse books by category.</p>
                </section>

                <section id="trending" className="mt-5">
                    <h2>Trending</h2>
                    <p>Check out what's trending in the world of books.</p>
                </section>

                <section id="deals" className="mt-5">
                    <h2>Deals</h2>
                    <p>Don't miss out on our amazing deals!</p>
                </section>

                <section id="wishlist" className="mt-5">
                    <h2>Wishlist</h2>
                    <p>Your favorite books are just a click away.</p>
                </section>
            </div>  */}
            
        
  </>
      
    
  )
}

export default Navba
