import '../Body.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import juga file CSS-nya untuk gaya default
import React, { useEffect } from 'react';




AOS.init({
    offset: 200, // Offset (dalam piksel) dari elemen sebelum efek dimulai
    duration: 600, // Durasi animasi dalam milidetik
    easing: 'ease-in-out', // Jenis interpolasi animasi (opsional)
    delay: 100, // Jeda sebelum animasi dimulai (dalam milidetik)
  });
  


function Body(){
    useEffect(() => {
        const galeriimage = document.querySelectorAll(".galeri-img");
    
        galeriimage.forEach((img, i) => {
          img.dataset.aos = "fade-down";
          img.dataset.aosDelay = i * 50;
        });
    
        AOS.init({
          once: true,
          duration: 1000,
        });
      }, []);

    return(

        <div>


    <section class="jumbotron text-center">
      <img className="rounded-circle" src="img/beranda.jpg" width="200px" alt="buku dunia" />
      <h2>My Perpus</h2>
      <p>Buku | Jendela Dunia</p>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="white"
          fill-opacity="1"
          d="M0,224L60,213.3C120,203,240,181,360,149.3C480,117,600,75,720,96C840,117,960,203,1080,208C1200,213,1320,139,1380,101.3L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
    </section>

    <section class="about" id="about">
      <div class="container">
        <div class="row text-center">
          <div class="col-md-12">
            <h3>About</h3>
          </div>
        </div>
        <div class="row justify-content-center mt-3 fs-5">
          <div class="col-md-4 mt-2" data-aos="zoom-in-right" data-aos-duration="1200">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel saepe quidem ea deleniti accusamus, sequi possimus necessitatibus veritatis. Rerum, error.</p>
          </div>
          <div class="col-md-4 mt-2" data-aos="zoom-in-left" data-aos-duration="1200">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum sapiente officia optio et dolorum fugiat odio nulla pariatur quaerat aperiam?</p>
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="rgb(222, 248, 248)"
          fill-opacity="1"
          d="M0,192L60,197.3C120,203,240,213,360,197.3C480,181,600,139,720,144C840,149,960,203,1080,197.3C1200,192,1320,128,1380,96L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
    </section>

    <section class="project" id="project">
      <div class="container">
        <div class="row text-center mb-3">
          <div class="col-md-12">
            <h3>Best Seller</h3>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-md-4 mb-3" data-aos="flip-left">
            <div class="card shadow">
              <img src="img/buku4.jpg" height="450px" width="70px" class="card-img-top" alt="..." />
              <div class="card-body">
                <p class="card-text">Ketika cinta bersujud adalah salah satu novel luaran penerbit bukunesia yang telah laris ratusan eksemplar dalam bulan maret 2023.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-3" data-aos="flip-left" data-aos-delay="100">
            <div class="card shadow">
              <img src="img/buku2.jpg" height="450px" width="100px" class="card-img-top" alt="..." />
              <div class="card-body">
                <p class="card-text">Novel laut bercerita adalah novel yang menceritakan tentang lorong waktu yang terjadi di tahun 90-an dan tahun 2000.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-3" data-aos="flip-left" data-aos-delay="200">
            <div class="card shadow">
              <img src="img/buku3.jpg" height="450px" width="100px" class="card-img-top" alt="..." />
              <div class="card-body">
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="white"
          fill-opacity="1"
          d="M0,128L60,117.3C120,107,240,85,360,96C480,107,600,149,720,186.7C840,224,960,256,1080,256C1200,256,1320,224,1380,208L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
    </section>

    <section id="galery">
      <div class="container">
        <div class="row">
          <div class="col-md-12 text-center">
            <h2>Gallery</h2>
          </div>
        </div>
        <div class="row justify-content-center mt-3">
          <div class="col-md-3">
            <a href=""><img src="img/perpus1.jpg" alt="" class="galeri-img" /></a>
          </div>
          <div class="col-md-3">
            <a href=""><img src="img/perpus2.jpg" alt="" class="galeri-img" /></a>
          </div>
          <div class="col-md-3">
            <a href=""><img src="img/perpus3.jpg" alt="" class="galeri-img" /></a>
          </div>
          <div class="col-md-3">
            <a href=""><img src="img/perpus4.jpg" alt="" class="galeri-img" /></a>
          </div>
          <div class="col-md-3">
            <a href=""><img src="img/perpus5.jpg" alt="" class="galeri-img" /></a>
          </div>
          <div class="col-md-3">
            <a href=""><img src="img/perpus6.jpg" alt="" class="galeri-img" /></a>
          </div>
          <div class="col-md-3">
            <a href=""><img src="img/perpus7.jpg" alt="" class="galeri-img" /></a>
          </div>
          <div class="col-md-3">
            <a href=""><img src="img/perpus8.jpg" alt="" class="galeri-img" /></a>
          </div>
          <div class="col-md-3">
            <a href=""><img src="img/perpus9.jpg" alt="" class="galeri-img" /></a>
          </div>
          <div class="col-md-3">
            <a href=""><img src="img/perpus10.jpg" alt="" class="galeri-img" /></a>
          </div>
        </div>
      </div>
    </section>

    <section class="contact" id="contact">
      <div class="container">
        <div class="row text-center">
          <div class="col-md-12">
            <h3>Contact Me</h3>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-md-8">
            <div class="mb-3" data-aos="fade-left">
              <label for="name" class="form-label">Nama</label>
              <input type="text" class="form-control" id="name" placeholder="Masukkan Nama" />
            </div>
            <div class="mb-3" data-aos="fade-left">
              <label for="email" class="form-label">Email address</label>
              <input type="email" class="form-control" id="email" placeholder="Masukkan Email" />
            </div>
            <div class="mb-3" data-aos="fade-left">
              <label for="nomer" class="form-label">Nomor Telepon</label>
              <input type="number" class="form-control" id="nomor" placeholder="Masukkan Nomer Telepon" />
            </div>
            <div class="mb-3" data-aos="fade-left">
              <label for="pesan" class="form-label">Pesan</label>
              <textarea class="form-control" id="pesan" rows="4"></textarea>
            </div>
            <button type="button" class="btn btn-success mb-4" data-aos="fade-left">Kirim</button>
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="rgb(79, 191, 229)"
          fill-opacity="1"
          d="M0,96L60,112C120,128,240,160,360,149.3C480,139,600,85,720,80C840,75,960,117,1080,117.3C1200,117,1320,75,1380,53.3L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
    </section>

    <footer class="footer text-center p-3">
      <p>Created with By MyPerpus.com</p>
    </footer>
        </div>
    

    
    
    );
}

export default Body;
