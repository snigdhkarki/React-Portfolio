import React,{ useRef } from 'react';
import emailjs from '@emailjs/browser';
const ContactUs = () => {
  const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_avunxsj', 'template_10qypk7', form.current, 'haJWr8q1WJs3QW9q6')
        .then((result) => {
            console.log(result.text);
            
        }, (error) => {
            console.log(error.text);
        });
    };

  

  
    
    
    
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              Feel free to contact me for any work or suggestions below
              </p>
            </div>
          </div>

          
    
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
       
   

          
        </section>
        );
  }
export default ContactUs;