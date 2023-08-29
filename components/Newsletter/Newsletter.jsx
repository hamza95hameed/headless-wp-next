"use client"
import { React, useState } from 'react'

const Newsletter = () => {
    const [email, setEmail] = useState("");
    const handleChange = event => {
        setEmail(event.target.value);
    };
    const onFormSubmit = (e) => {
        e.preventDefault();
        let formData = new FormData();
        formData.append('your-email', email);
        fetch('http://www.newsparho.com/wp-json/contact-form-7/v1/contact-forms/20174/feedback', { method: 'POST', body: formData })
            .then(response => {
                if (response.status == 200) {
                    setEmail('');
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }
    return (
        <section className="newsletter-area pb-80">
            <div className="container">
                <div className="newsletter__wrap">
                    <div className="row align-items-center">
                        <div className="col-xl-5 col-lg-6">
                            <div className="newsletter__title">
                                <span className="sub-title">newsletter</span>
                                <h4 className="title">Get notified of the best deals on our WordPress Themes</h4>
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-6">
                            <div className="newsletter__form-wrap">
                                <form className="newsletter__form" onSubmit={onFormSubmit}>
                                    <div className="newsletter__form-grp">
                                        <input type="email" placeholder="Email address" id="email" onChange={handleChange} value={email} required />
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="flexCheckDefault" checked />
                                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                                I agree that my submitted data is being collected and stored.
                                            </label>
                                        </div>
                                    </div>
                                    <button className="btn" type="submit"><span className="text">Subscribe</span> <i className="fas fa-paper-plane"></i></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Newsletter