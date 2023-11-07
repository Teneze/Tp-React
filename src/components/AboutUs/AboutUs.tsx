

const AboutUs = () => {
    return(
        <>
            <section className="bg-dark text-white p-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h2>About Us</h2>
            <p>We are a team of passionate individuals who love to create amazing things. Our mission is to provide high-quality services and products that exceed our customers' expectations.</p>
          </div>
          <div className="col-lg-6">
            <h2>Features</h2>
            <div className="row">
              <div className="col-md-4">
                <div className="card mb-3">
                  <img src="src/assets/images/colo.webp" height={250} className="card-img-top" alt="Feature 1" />
                  <div className="card-body">
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-3">
                  <img src="src/assets/images/pipa.jpg" height={250} className="card-img-top" alt="Feature 2" />
                  <div className="card-body">
                    <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <img src="src/assets/images/diegoboca.jpeg" height={250} className="card-img-top" alt="Feature 3" />
                  <div className="card-body">
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
        </>
    )
}

export default AboutUs

