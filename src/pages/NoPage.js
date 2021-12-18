import React from 'react';

import Header from '../components/Header';

import background from '../theme/assets/img/home-bg.jpg';
  
function NoPage() {
 
  const header = { title: "Yannis Saliniere", 
                   subtitle: "Développeur d'application Python",
                   style: { backgroundImage: `url(${background})` } };

  return (
    <div>
      <Header header = {header}/>
      <div className="container text-dark mt-5">
        <div className="row justify-content-md-center">
          <div className="col-md-5 p-3">
            <div class="error-template">
                    <h1>
                        Oops!</h1>
                    <h2>
                        404 Not Found</h2>
                    <div class="error-details">
                        Sorry, an error has occured, Requested page not found!
                    </div>
                    <div class="error-actions">
                        <a href="/" class="btn btn-secondary">Take Me Home </a>
                    </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  )
}
  
export default NoPage;
  