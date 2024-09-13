import React, { useEffect } from 'react';
import './MovieCopyRight.css';
import Navigation from '../Navigation/Navigation';
import Footer from '../Main/Footer';

const MovieCopyRight = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.images-cp, .disclaimer-movie, .rating-disclaimer');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-on-scroll');
          observer.unobserve(entry.target);
        }
      });
    });

    elements.forEach(element => {
      observer.observe(element);
    });
  }, []);

  return (
    <div className="cp-parent">
    <Navigation/>
    <div className="copy-right-main-parent">
      <div className="images-cp">
        <h1>Copyright Notice</h1>
        <p>
          All images on this website are the respective properties of their owners. <br />
          We do not claim ownership of any images unless explicitly stated. <br />
          Images are used for illustrative purposes and in compliance with applicable copyright laws. <br />
          Unauthorized use of these images is prohibited, and all rights are reserved by their original creators or licensors.
        </p>
        <p>
          For any copyright concerns or inquiries, please contact us at <a href="mailto:justbytha@gmail.com">info@example.com</a>.
        </p>
      </div>
      <div className="disclaimer-movie">
        <h1>Disclaimer</h1>
        <p>
          All movie titles mentioned on this website are copyrighted by their respective owners. <br />
          We do not claim ownership of these titles, and all trademarks, logos, and intellectual property rights belong to their original creators and rights holders.
        </p>
      </div>
      <div className="rating-disclaimer">
        <h1>Disclaimer</h1>
        <p>
          All cast information, ratings, and reviews provided on this website are the properties of their respective owners. <br />
          This includes but is not limited to sources such as Rotten Tomatoes and TMDB. <br />
          We do not claim ownership of any cast information, ratings, or reviews. All trademarks, logos, and intellectual property rights belong to their original creators and rights holders (RO). <br />
          The ratings displayed on this website are externally provided, and we do not bias or influence these ratings in any way.
        </p>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default MovieCopyRight;
