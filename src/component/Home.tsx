import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import styled from 'styled-components';
import backgroundVideo from "../../src/image/book-Video.mp4";
import Footer from "../component/Footer"

const Hero = [
  {
    "id": "1",
    // "img": "https://example.com/image1.jpg",
    "img":"  https://shorturl.at/AqlbD",
    "title": "Pride and Prejudice",
    "author": "Jane Austen",
    "publishedYear": 1813,
    "genre": "Romance",
    "discount": "10%"
  },
  {
    "id": "2",
    "img": "https://shorturl.at/lnZGe",
    "title": "The Great",
    "author": "George Orwell",
    "publishedYear": 1949,
    "genre": "Dystopian Fiction",
    "discount": "12%"
  },
   {
        "id": "1",
        "img": "https://shorturl.at/OMmP3",
        "title": "To Kill a Mockingbird",
        "author": "Harper Lee",
        "publishedYear": 1960,
        "genre": "Fiction",
        "discount": "4%"
      },
      {
        "id": "2",
        "img":"  https://shorturl.at/lnZGe" ,
        "title": "The great",
        "author": "George Orwell",
        "publishedYear": 1949,
        "genre": "Dystopian Fiction",
        "discount": "5%"
      },
      {
        "id": "3",
        "img": " https://shorturl.at/uL8er",
        "title": "The Great Gatsby",
        "author": "F. Scott Fitzgerald",
        "publishedYear": 1925,
        "genre": "Fiction",
        "discount": "9%"
      },
      {
        "id": "4",
        "img":  "https://shorturl.at/ZYfMu",
        "title": "Pride and Prejudice",
        "author": "Jane Austen",
        "publishedYear": 1813,
        "genre": "Romance",
        "discount": "20%"
      },
      // {
      //   "id": "5",
      //   "img":"  https://shorturl.at/AqlbD" ,
      //   "title": "Light of life",
      //   "author": "Omolola",
      //   "publishedYear": 2000,
      //   "genre": "Romance",
      //   "price": "$400"
      // },
];

const Home = () => {
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

      <section>
        <div className='homeCover'>
          <video autoPlay loop muted playsInline className="background-clip">
            <source src={backgroundVideo} type='video/mp4' />
          </video>
          <div className="homeContain">
            <h2>Explore more</h2>
            <a href="#">View More</a>
          </div>
        </div>
      </section>

      <section className="campus">
        <h1>Our Main Campus</h1>
        <p>Find the best books for your favourite writer, explore hunderd of books with all possible category take advantage of our discount period</p>
        <div className='campusFo'>
        {
          Hero.map(({ id, img, author, discount}) => (
            <div key={id} className="row">
              <div className="campus-col">
                <img src={img} alt="" />
                <div className="layer">
                  
                  <h3>{author}</h3>
                  <h4>{discount}</h4>
                </div>
              </div>
            </div>
          ))
        }
        </div>
       
      </section>

      {/* footer */}
      <Footer/>

    </>
  );
}

export default Home;
