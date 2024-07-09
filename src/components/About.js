import React from 'react';

export default function About(props) {
  return (
    <div className='container'>
      <h1 className='heading my-5'>{props.heading}</h1>
      <div className="accordion" id="aboutUsAccordion">
        <div className={`card ${props.mode === 'dark' ? 'bg-dark text-white' : 'bg-light text-dark'}`}>
          <div className="card-header" id="headingOne">
            <h2 className="mb-0">
              <button className={`btn btn-block text-left ${props.mode === 'dark' ? 'text-white' : 'text-dark'}`} type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Who We Are
              </button>
            </h2>
          </div>
          <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#aboutUsAccordion">
            <div className="card-body">
              We are a team of passionate developers dedicated to creating simple and effective text manipulation tools. Our mission is to provide users with a suite of utilities that make handling and transforming text easier and more efficient.
            </div>
          </div>
        </div>
        <div className={`card ${props.mode === 'dark' ? 'bg-dark text-white' : 'bg-light text-dark'}`}>
          <div className="card-header" id="headingTwo">
            <h2 className="mb-0">
              <button className={`btn btn-block text-left collapsed ${props.mode === 'dark' ? 'text-white' : 'text-dark'}`} type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Our Mission
              </button>
            </h2>
          </div>
          <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#aboutUsAccordion">
            <div className="card-body">
              Our mission is to empower users with the best tools for text manipulation, ensuring they can handle their text-related tasks with ease and precision. We aim to continually improve our offerings based on user feedback and the evolving needs of our community.
            </div>
          </div>
        </div>
        <div className={`card ${props.mode === 'dark' ? 'bg-dark text-white' : 'bg-light text-dark'}`}>
          <div className="card-header" id="headingThree">
            <h2 className="mb-0">
              <button className={`btn btn-block text-left collapsed ${props.mode === 'dark' ? 'text-white' : 'text-dark'}`} type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Our Team
              </button>
            </h2>
          </div>
          <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#aboutUsAccordion">
            <div className="card-body">
              Our team consists of experienced developers, designers, and support staff who work together to create the best text manipulation tools available. We are committed to quality, innovation, and user satisfaction.
            </div>
          </div>
        </div>
        <div className={`card ${props.mode === 'dark' ? 'bg-dark text-white' : 'bg-light text-dark'}`}>
          <div className="card-header" id="headingFour">
            <h2 className="mb-0">
              <button className={`btn btn-block text-left collapsed ${props.mode === 'dark' ? 'text-white' : 'text-dark'}`} type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                Contact Us
              </button>
            </h2>
          </div>
          <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#aboutUsAccordion">
            <div className="card-body">
              If you have any questions, suggestions, or feedback, feel free to contact us at contact@textutils.com. We are always happy to hear from our users and strive to respond to all inquiries promptly.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
