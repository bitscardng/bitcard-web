import React, { useState } from 'react';
import contactDoodle from '../../assets/images/contact-doodle.png';
import contactUs from '../../assets/images/contact-us.svg';
import Robot from "../../assets/images/robot 3.png";


const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    contactReason: 'sayHi',
    name: '',
    telephone: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('https://mail-api.isaac0yen.com/send_mail/bitscardng@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({
          contactReason: 'sayHi',
          name: '',
          telephone: '',
          email: '',
          message: ''
        });
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      alert('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-5">
      <div className="container">
        <h1>Crypto Trade</h1>

        <div className='m-5 p-3'>
          <div className="d-flex align-items-center gap-3 mb-4 mt-5">
            <img src={contactUs} alt="Contact Us" />
            <h2 className="h5 mb-0">Connect with Us: Let's Discuss Your Needs</h2>
          </div>

          <div className="position-relative" style={{
            backgroundColor: '#D9D9D966',
            boxShadow: '8px 8px #000',
            marginTop: '10px',
            padding: '6.25rem'
          }}>
            <div className="row">
              <div className="col-lg-8" style={{ width: '556px' }}>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input border-dark"
                        type="radio"
                        name="contactReason"
                        id="sayHi"
                        value="sayHi"
                        checked={formData.contactReason === 'sayHi'}
                        onChange={handleInputChange}
                      />
                      <label className="form-check-label" htmlFor="sayHi">Say Hi</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input border-dark"
                        type="radio"
                        name="contactReason"
                        id="getQuote"
                        value="getQuote"
                        checked={formData.contactReason === 'getQuote'}
                        onChange={handleInputChange}
                      />
                      <label className="form-check-label" htmlFor="getQuote">Get a Quote</label>
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="form-label small mb-1">Name</label>
                    <input
                      type="text"
                      className="form-control border-dark"
                      placeholder="Name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      style={{
                        height: '59px',
                        borderRadius: '14px',
                        border: '1px solid',
                        padding: '18px 30px',
                        gap: '10px'
                      }}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label small mb-1">Telephone</label>
                    <div className="input-group">
                      <span className="input-group-text border-dark bg-white" style={{ borderTopLeftRadius: '14px', borderBottomLeftRadius: '14px', border: '1px solid', padding: '18px 30px', gap: '10px', height: '59px' }}>+234</span>
                      <input
                        type="tel"
                        className="form-control border-dark"
                        name="telephone"
                        value={formData.telephone}
                        onChange={handleInputChange}
                        style={{
                          height: '59px',
                          borderTopRightRadius: '14px',
                          borderBottomRightRadius: '14px',
                          border: '1px solid',
                          padding: '18px 30px',
                          gap: '10px'
                        }}
                      />
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="form-label small mb-1">Email*</label>
                    <input
                      type="email"
                      className="form-control border-dark"
                      placeholder="Email"
                      required
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      style={{
                        height: '59px',
                        borderRadius: '14px',
                        border: '1px solid',
                        padding: '18px 30px',
                        gap: '10px'
                      }}
                    />
                  </div>

                  <div className="mb-4">
                    <label className="form-label small mb-1">Message*</label>
                    <textarea
                      className="form-control border-dark"
                      rows="4"
                      placeholder="Message"
                      required
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      style={{
                        height: '190px',
                        borderRadius: '14px',
                        border: '1px solid',
                        padding: '18px 30px',
                        gap: '10px'
                      }}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-dark w-100 py-3 rounded-1"
                    disabled={loading}
                  >
                    {loading ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>

              <div className="col-lg-4 d-none d-lg-block">
                <div className="position-absolute top-50 end-0 translate-middle-y pe-4">
                  <img
                    src={contactDoodle}
                    alt="Decorative contact pattern"
                    className="img-fluid"
                    style={{ maxHeight: '80%' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <img className="robot-img" width="200" src={Robot} alt="" style={{ float: 'right' }} />
      </div>
    </section>
  );
};

export default Contact;