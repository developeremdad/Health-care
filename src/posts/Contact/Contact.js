import React from 'react';

const Contact = () => {
    return (
        <div>
            <section id="contact" className="container-fluid bg-light py-5">
                <div className="container overflow-hidden my-custom-tb-margin">
                    <h4 className="text-center text-danger">Haven't found what you want?</h4>
                    <h1 className="text-center my-3">Contact Us</h1>
                    <p className="text-center text-dark">This type of hospital provides medical care free of charge, the cost of which is covered by the funding the hospital receives from the government.</p>
                    <p className="text-center text-dark">The government hospitals is a good healthcare that is available to all, regardless of their wealth.</p>


                    <div className="d-flex align-items-center justify-content-center p-4">
                        <i className="fas fas fa-headphones fs-2 text-primary"></i>
                        <a className="nav-link active text-decoration-none text-primary fs-4 fw-bold" aria-current="page" href="tel:09600-730073">09600730073</a>
                    </div>


                    <div className=" p-4">
                        <div className="text-center border p-4">
                            <h3 className="text-success bg-light p-2">Contact Form</h3>
                            <input className="form-control" type="text" name="" placeholder="Name" id="" /> <br />
                            <input className="form-control" type="email" name="" placeholder="Email" id="" /> <br />
                            <input className="form-control" type="number" name="" placeholder="Number" id="" /> <br />
                            <input className="form-control" type="date" name="" placeholder="Date" id="" /> <br />
                            <textarea className="form-control" name="" placeholder="Message" id="" cols="20" rows="3"></textarea> <br />
                            <button type="submit" className="btn-primary w-100">Submit</button>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Contact;