import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import styled from 'styled-components'
import Footer from "../component/Footer"
import { FaHeart } from 'react-icons/fa';
const Data = [
    {
        "id": "1",
        "img": "https://shorturl.at/OMmP3",
        "title": "To Kill a Mockingbird",
        "author": "Harper Lee",
        "publishedYear": 1960,
        "genre": "Fiction",
        "price": "$400"
      },
      {
        "id": "2",
        "img":"  https://shorturl.at/lnZGe" ,
        "title": "The great",
        "author": "George Orwell",
        "publishedYear": 1949,
        "genre": "Dystopian Fiction",
        "price": "$400"
      },
      {
        "id": "3",
        "img": " https://shorturl.at/uL8er",
        "title": "The Great Gatsby",
        "author": "F. Scott Fitzgerald",
        "publishedYear": 1925,
        "genre": "Fiction",
        "price": "$400"
      },
      {
        "id": "4",
        "img":  "https://shorturl.at/ZYfMu",
        "title": "Pride and Prejudice",
        "author": "Jane Austen",
        "publishedYear": 1813,
        "genre": "Romance",
        "price": "$400"
      },
      {
        "id": "5",
        "img":"  https://shorturl.at/AqlbD" ,
        "title": "Light of life",
        "author": "Omolola",
        "publishedYear": 2000,
        "genre": "Romance",
        "price": "$400"
      },
      {
        "id": "6",
        "img":" https://shorturl.at/ATUmj" ,
        "title": "The great",
        "author": "George Orwell",
        "publishedYear": 1949,
        "genre": "Dystopian Fiction",
        "price": "$400"
      }

]

const Trending = () => {
   
  return (
       <>

<Navbar bg="light" expand="lg" className='contain'>
                   <Navbar.Brand href="#home" className='brand'>Lola-Books <FaHeart/></Navbar.Brand>
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
       <Div>
        <div className='container'>
            <h2>Trending Books</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, ea.
            </p>
        </div>
       </Div>
       <section className='sectionOne'>
          <h2> Beautiful trending books</h2>
            <p>Find the best books form of their favourite writer.</p>
       </section>
       {/* display */}
       <div className='container-trending' >
            <div className='femi'>
            {
             Data.map(({ id, img, author, publishedYear, price }) => (
            <div key={id} className='grid'>
            <img src={img} alt={id} />
            <div className="data">
            {/* <h2>{title}</h2> */}
            <h3>{author}</h3>
            <h4><small className='small'>PublishedYear: </small>{publishedYear}</h4>
            {/* <h5>{genre}</h5> */}
            <h6><small className='small'>Price: </small>{price}</h6>
            </div>
        </div>
    ))
}

            </div>
       </div>
{/* footer */}
<Footer/>
      
    </>
  )
}

const Div = styled.div`
    background: url("https://shorturl.at/MHryx");
    height: 400px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    
   .container{
    
        display: block;
        align-items: center;
        justify-content: center;
        text-align: center;
        width: 80%;
        margin:  auto;
        padding: 7rem 0%;
    }
       
        h2{
            /* text-align: center; */
            font-size: 2.5rem;
            color: black;
        }
     p{
            
        }
`





export default Trending
