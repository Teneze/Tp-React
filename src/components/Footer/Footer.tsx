const Footer = () => {
    return(
        <>
           <footer className="bg-dark text-white p-3" style={{ marginTop: 'auto' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h4>Our Company</h4>
                            <p>Some information about your company.</p>
                        </div>
                        <div className="col-md-6">
                            <h4>Contact Us</h4>
                            <p>Email: info@yourcompany.com</p>
                            <p>Phone: (123) 456-7890</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;