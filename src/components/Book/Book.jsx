import React from 'react'
import './Book.css'
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";



const Book = () => {
  return (
    <section className="book" id='book'>
        
            <div className="book__left">
                <p className='book__l__content'>
                <FaQuoteLeft />
                There are many variations of passages available but the majority
            have suffered alteration in some form by injected humour or
            randomised words.
           <FaQuoteRight/>
                </p>

            </div>
            <div className="book__right">
                <div className="book__right">
                    <div className="book__form">
                        <h1>right</h1>
                    </div>
                </div>

            </div>
        
    </section>
  )
}

export default Book