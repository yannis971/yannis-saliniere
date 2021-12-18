import React from 'react';

import Header from '../components/Header';
import ContactFrom from '../components/ContactForm';
import Footer from '../components/Footer';

import background from '../theme/assets/img/contact-bg.jpg';
  
function Contact() {
 
  const header = { title: "Contactez-moi", 
                   subtitle: "Vous avez des questions ? Je peux y répondre !",
                   style: { backgroundImage: `url(${background})` } };

  return (
    <div>
      <Header header = {header}/>
      <ContactFrom />
      <Footer />
    </div>
  )
}
  
export default Contact;
  