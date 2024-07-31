import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className='justify-center ml-80'>
      <section className="intro-single mt-44">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-8">
              <div className="title-single-box">
                <h1 className="title-single font-mono text-4xl font-bold	mb-10 text-center">Contact US</h1>
                <span className="color-text-a  font-semibold	">
                We are dedicated to making your rental experience as easy and enjoyable as possible. If you have any questions about our properties, would like to schedule a showing, or need assistance navigating our platform, our support team is ready to help. You can contact us by email, telephone, or using the contact form below. We strive to respond to all requests as quickly as possible and provide you with the best possible service. We look forward to helping you find the perfect home that fits your needs.
                </span>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      <div className="container mt-24">
        <div className="row">
          <div className="col-sm-12 section-t8">
            <div className="row">
              <div className="col-md-7">
                <form action="/api/contact" method="post" role="form">
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <div className="form-group">
                        <input
                          type="text"
                          name="name"
                          className="form-control form-control-lg form-control-a"
                          placeholder="Your Name"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div className="form-group">
                        <input
                          type="email"
                          name="email"
                          className="form-control form-control-lg form-control-a"
                          placeholder="Your Email"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-12 mb-3">
                      <div className="form-group">
                        <input
                          type="text"
                          name="subject"
                          className="form-control form-control-lg form-control-a"
                          placeholder="Subject"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-12 mb-3">
                      <div className="form-group">
                        <textarea
                          name="message"
                          className="form-control"
                          cols="45"
                          rows="8"
                          placeholder="Message"
                          required
                        ></textarea>
                      </div>
                    </div>

                    <div className="col-md-12 text-center">
                      <button type="submit" className="btn btn-a  bg-black text-white font-bold py-2 px-4 rounded">Send Message</button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-md-5 section-md-t3">
                <div className="icon-box section-b2">
                  <div className="icon-box-icon">
                    <span className="bi bi-envelope"></span>
                  </div>
                  <div className="icon-box-content table-cell">
                    <div className="icon-box-title">
                      <h4 className="icon-title font-semibold	">Say Hello</h4>
                    </div>
                    <div className="icon-box-content">
                      <p className="mb-1 ">
                        <span className="font-semibold	" >Email: </span>
                        <span className="color-a">ProCasa@example.com</span>
                      </p>
                      <p className="mb-1">
                      <span className="font-semibold	" >Phone: </span>

                        <span className="color-a">+216 22222222</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="icon-box section-b2">
                  <div className="icon-box-icon">
                    <span className="bi bi-geo-alt " ></span>
                  </div>
                  <div className="icon-box-content table-cell">
                    <div className="icon-box-title">
                      <h4 className="icon-title"></h4>
                      <span className="font-semibold	" >Find us in </span>

                    </div>
                    <div className="icon-box-content">
                      <p className="mb-1">
                        Sousse,
                      </p>
                    </div>
                  </div>
                </div>
                <div className="icon-box">
                  <div className="icon-box-icon font-semibold">
                    <span className="bi bi-share"></span>
                  </div>
                  <div className="icon-box-content table-cell">
                    <div className="icon-box-title">
                      <h4 className="icon-title font-semibold">Social networks</h4>
                    </div>
                    <div className="icon-box-content">
                      <div className="socials-footer">
                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <a href="#" className="link-one">
                              <i className="bi bi-facebook" aria-hidden="true"></i>
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#" className="link-one">
                              <i className="bi bi-twitter" aria-hidden="true"></i>
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#" className="link-one">
                              <i className="bi bi-instagram" aria-hidden="true"></i>
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#" className="link-one">
                              <i className="bi bi-linkedin" aria-hidden="true"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
</div>
         
        </div>
      </div>

      <div className="col-sm-12 mt-14">
            <div className="contact-map box">
              <div id="map" className="contact-map">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12937.875264708528!2d10.585026651729425!3d35.83750631059116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd8af5620fdf25%3A0x331e64ed11f24344!2sSahloul%2C%20Sousse!5e0!3m2!1sen!2stn!4v1722414379226!5m2!1sen!2stn" width="600" height="450"   loading="lazy" referrerpolicy="no-referrer-when-downgrade"  width="100%"
                  height="450"
                  frameBorder="0"
                  allowFullScreen
                  title="Google Map"></iframe>
              
              </div>
            </div>
          </div>
          <Footer />

    </div>
    
  );
};

export default Contact;