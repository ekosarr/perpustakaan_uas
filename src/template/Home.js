import React from 'react';
import '../Home.css';
import '../flex-slider.css'
import '../fontawesome.css'




// Komponen berbasis kelas untuk bagian main
class MainSection extends React.Component {
  render() {
    return (
      <main>
        
        <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="images/b3.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
    <img src="images/b1.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="images/b2.jpg" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>


      </main>
    );
  }
}

class MainSection2 extends React.Component {
  render() {
    return (
      <main>
        
        <div class="featured section">
    <div class="container">
      <div class="row">
        <div class="col-lg-4">
          <div class="left-image">
            <img src="images/b4.jpg" alt=""/>
            <a href="property-details.html"><img src="images/buku2.png" alt=""  style={{ maxWidth: '60px', padding: '0px' }}/></a>
          </div>
        </div>
        <div class="col-lg-5">
          <div class="section-heading">
            <h6>| Featured</h6>
            <h2>Best Perpustakaan &amp; Sea view</h2>
          </div>
          <div class="accordion" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  Perpustakaan Yang Baik
                </button>
              </h2>
              <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                 <strong> Perpustakaan</strong> ini tempat yang menakjubkan dan nyaman, memancarkan suasana yang damai dan santai. Dikelilingi oleh rak-rak buku yang teratur, dengan cahaya lembut yang menerangi setiap sudut, menciptakan lingkungan ideal untuk membaca dan belajar.</div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingThree">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Apakah ini yang terbaik buat anda ?
                </button>
              </h2>
              <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  Dolor <strong>almesit amet</strong>, consectetur adipiscing elit, sed doesn't eiusmod tempor incididunt ut labore consectetur <code>adipiscing</code> elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="info-table">
            <ul>
              <li>
                <img src="images/info-icon-01.png" alt=""  style={{ maxWidth: '60px', padding: '0px' }}/>
                <h4>Luas<br/><span>Tempat Luas</span></h4>
              </li>
              <li>
                <img src="images/info-icon-02.png" alt=""  style={{ maxWidth: '60px', padding: '0px' }}/>
                <h4>Pinjam<br/><span>Bebas Pinjam</span></h4>
              </li>
              <li>
                <img src="images/info-icon-03.png" alt=""  style={{ maxWidth: '60px', padding: '0px' }}/>
                <h4>Beli<br/><span>Bisa Dibeli</span></h4>
              </li>
              <li>
                <img src="images/info-icon-04.png" alt=""  style={{ maxWidth: '60px', padding: '0px' }}/>
                <h4>Aman<br/><span>Transaksi</span></h4>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>


      </main>
    );
  }
}

class MainSection3 extends React.Component {
  render() {
    return (
      <main>
          <div class="video section">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 offset-lg-4">
          <div class="section-heading text-center">
            <h6>| Tempat</h6>
            <h2>Tempat Nyaman dan Tenang</h2>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="video-content">
    <div class="container">
      <div class="row">
        <div class="col-lg-10 offset-lg-1">
          <div class="video-frame">
            <img src="images/tempat.jpg" alt=""/>
            <a href="https://www.youtube.com/watch?v=B_GNsQ_jjdA" target="_blank"><i class="fa fa-play"></i></a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="fun-facts">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="wrapper">
            <div class="row">
              <div class="col-lg-4">
                <div class="counter">
                  <h2 class="timer count-title count-number" data-to="34" data-speed="1000"></h2>
                   <p class="count-text ">Meja<br/>Meja Free</p>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="counter">
                  <h2 class="timer count-title count-number" data-to="12" data-speed="1000"></h2>
                  <p class="count-text ">Kantin<br/>Kantin Bersih</p>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="counter">
                  <h2 class="timer count-title count-number" data-to="24" data-speed="1000"></h2>
                  <p class="count-text ">Taman<br/>Taman Indah</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
      </main>
      );
    }
  }


class MainSection5 extends React.Component {
  render() {
    return (
      <main>
  <div class="contact section">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 offset-lg-4">
          <div class="section-heading text-center">
            <h6>| Contact Us</h6>
            <h2>Hubungi Agen Kami</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
      </main>
      );
    }
  }

  class MainSection6 extends React.Component {
    render() {
      return (
        <main>
          <div className="contact-content">
            <div className="container">
              <div className="row">
                <div className="col-lg-7">
                  <div id="map">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12469.776493332698!2d-80.14036379941481!3d25.907788681148624!2m3!1f357.26927939317244!2f20.870722720054623!3f0!3m2!1i1024!2i768!4f35!3m3!1m2!1s0x88d9add4b4ac788f%3A0xe77469d09480fcdb!2sSunny%20Isles%20Beach!5e1!3m2!1sen!2sth!4v1642869952544!5m2!1sen!2sth"
                      width="100%"
                      height="500px"
                      frameBorder="0"
                      style={{ border: 0, borderRadius: '10px', boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.15)' }}
                      allowFullScreen=""
                      title="Google Maps"
                    ></iframe>
                  </div>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="item phone">
                        <img src="images/phone-icon.png" alt="" style={{ maxWidth: '52px' }} />
                        <h6>
                          087786655553
                          <br />
                          <span>Phone Number</span>
                        </h6>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="item email">
                        <img src="images/email-icon.png" alt="" style={{ maxWidth: '52px' }} />
                        <h6>
                          per@gmail.com
                          <br />
                          <span>Business Email</span>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5">
                  <form id="contact-form" action="" method="post">
                    <div className="row">
                      <div className="col-lg-12">
                        <fieldset>
                          <label htmlFor="name">Full Name</label>
                          <input type="name" name="name" id="name" placeholder="Your Name..." autoComplete="on" required />
                        </fieldset>
                      </div>
                      <div className="col-lg-12">
                        <fieldset>
                          <label htmlFor="email">Email Address</label>
                          <input type="text" name="email" id="email" pattern="[^ @]*@[^ @]*" placeholder="Your E-mail..." required="" />
                        </fieldset>
                      </div>
                      <div className="col-lg-12">
                        <fieldset>
                          <label htmlFor="subject">Subject</label>
                          <input type="subject" name="subject" id="subject" placeholder="Subject..." autoComplete="on" />
                        </fieldset>
                      </div>
                      <div className="col-lg-12">
                        <fieldset>
                          <label htmlFor="message">Message</label>
                          <textarea name="message" id="message" placeholder="Your Message"></textarea>
                        </fieldset>
                      </div>
                      <div className="col-lg-12">
                        <fieldset>
                          <button type="submit" id="form-submit" className="orange-button">
                            Send Message
                          </button>
                        </fieldset>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </main>
      );
    }
  }
  
  class MainSection7 extends React.Component {
    render() {
      return (
        <main>
  <footer>
    <div class="container">
      <div class="col-lg-8">
        <p className="text-center">Copyright 2023 MyPerpus21@gmail.com | <a href="https://themewagon.com">Aa Gogon</a></p>
      </div>
    </div>
  </footer>
        </main>
        );
      }
    }

// Komponen utama Home yang menggabungkan komponen-komponen di atas
function Home() {
  return (
    <div>
      <MainSection />
      <MainSection2 />
      <MainSection3 />
      <MainSection5 />
      <MainSection6 />
      <MainSection7 />
    </div>
  );
}

export default Home;
