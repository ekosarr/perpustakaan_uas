import { Container, Row, Col } from "react-bootstrap";
import React from "react";

class MainSection extends React.Component {
    render() {
      return (
        <main>
             <div class="section best-deal">
             <div class="container">
             <div class="row">
                <div class="col-lg-4">
                <div class="section-heading">
                  <h6>| Best Buku</h6>
                  <h2>Temukan buku terbaikmu Sekarang!</h2>
                </div>
                </div>
                <div class="col-lg-12">
                <div class="tabs-content">
                <div class="row">
                <div class="nav-wrapper ">
                  <ul class="nav nav-tabs" role="tablist">
                    <li class="nav-item" role="presentation">
                      <button class="nav-link active" id="appartment-tab" data-bs-toggle="tab" data-bs-target="#appartment" type="button" role="tab" aria-controls="appartment" aria-selected="true">Manga</button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button class="nav-link" id="villa-tab" data-bs-toggle="tab" data-bs-target="#villa" type="button" role="tab" aria-controls="villa" aria-selected="false">Novel</button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button class="nav-link" id="penthouse-tab" data-bs-toggle="tab" data-bs-target="#penthouse" type="button" role="tab" aria-controls="penthouse" aria-selected="false">Komik</button>
                    </li>
                  </ul>
                </div>
                <div class="tab-content" id="myTabContent">
                <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade show active" id="appartment" role="tabpanel" aria-labelledby="appartment-tab">
                    <div class="row">
                      <div class="col-lg-3">
                        <div class="info-table">
                          <ul>
                            <li>Penulis <span>-</span></li>
                            <li>Penerbit <span>-</span></li>
                            <li>Penyunting <span>-</span></li>
                            <li>Tersedia <span>654</span></li>
                            <li>Terpinjam <span>456</span></li>
                          </ul>
                        </div>
                      </div>
                      <div class="col-lg-6">
                        <img src="images/buku21.jpg" alt=""/>
                      </div>
                      <div class="col-lg-3">
                        <h4>One Piece</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor pack incididunt ut labore et dolore magna aliqua quised ipsum suspendisse. When you need free CSS templates, you can simply type TemplateMo in any search engine website. In addition, you can type TemplateMo Portfolio, TemplateMo One Page Layouts, etc.</p>
                        <div class="icon-button">
                          <a href="property-details.html"><i class="fa fa-calendar"></i> Pinjam Buku</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane fade" id="villa" role="tabpanel" aria-labelledby="villa-tab">
                    <div class="row">
                      <div class="col-lg-3">
                        <div class="info-table">
                        <ul>
                            <li>Penulis <span>-</span></li>
                            <li>Penerbit <span>-</span></li>
                            <li>Penyunting <span>-</span></li>
                            <li>Tersedia <span>654</span></li>
                            <li>Terpinjam <span>254</span></li>
                          </ul>
                        </div>
                      </div>
                      <div class="col-lg-6">
                        <img src="images/novel1.jpg" alt=""/>
                      </div>
                      <div class="col-lg-3">
                        <h4>Detail Info About Villa</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor pack incididunt ut labore et dolore magna aliqua quised ipsum suspendisse. Swag fanny pack lyft blog twee. JOMO ethical copper mug, succulents typewriter shaman DIY kitsch twee taiyaki fixie hella venmo after messenger poutine next level humblebrag swag franzen.</p>
                        <div class="icon-button">
                          <a href="property-details.html"><i class="fa fa-calendar"></i> Pinjam Buku</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane fade" id="penthouse" role="tabpanel" aria-labelledby="penthouse-tab">
                    <div class="row">
                      <div class="col-lg-3">
                        <div class="info-table">
                        <ul>
                            <li>Penulis <span>-</span></li>
                            <li>Penerbit <span>-</span></li>
                            <li>Penyunting <span>-</span></li>
                            <li>Tersedia <span>456</span></li>
                            <li>Terpinjam <span>168</span></li>
                          </ul>
                        </div>
                      </div>
                      <div class="col-lg-6">
                        <img src="images/komik2.jpg" alt=""/>
                      </div>
                      <div class="col-lg-3">
                        <h4>Extra Info About Penthouse</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor pack incididunt ut labore et dolore magna aliqua quised ipsum suspendisse. Swag fanny pack lyft blog twee. JOMO ethical copper mug, succulents typewriter shaman DIY kitsch twee taiyaki fixie hella venmo after messenger poutine next level humblebrag swag franzen.</p>
                        <div class="icon-button">
                          <a href="property-details.html"><i class="fa fa-calendar"></i> Pinjam Buku</a>
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
             </div>
             </div>
        </main>
      );
    }
  }

  class MainSection2 extends React.Component {
    render() {
      return (
        <div>
            <div class="properties section">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 offset-lg-4">
          <div class="section-heading text-center">
            <h6>|  Buku</h6>
            <h2>Berbagai Buku</h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4 col-md-6">
          <div class="item">
            <a href="property-details.html"><img src="images/buku8.jpg" alt=""/></a>
            <span class="category">Genre</span>
            <h6>Rp 5.000 / Hari</h6>
            <h4 className="text-center"><a href="property-details.html">Otomic Habits</a></h4>
            <ul className="text-center">
            <li>Penulis: <span>92</span></li>
              <li>Penerbit: <span>80</span></li>
              <li>Penyunting: <span>67</span></li>
            </ul>
            <div class="main-button">
              <a href="property-details.html">Pinjam Buku</a>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="item">
            <a href="property-details.html"><img src="images/buku11.jpeg" alt=""/></a>
            <span class="category">Genre</span>
            <h6>Rp 4.000 / Hari</h6>
            <h4 className="text-center"><a href="property-details.html">Segala-galanya Ambyar</a></h4>
            <ul className="text-center">
            <li>Penulis: <span>92</span></li>
              <li>Penerbit: <span>80</span></li>
              <li>Penyunting: <span>67</span></li>
            </ul>
            <div class="main-button">
              <a href="property-details.html">Pinjam Buku</a>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="item">
            <a href="property-details.html"><img src="images/buku12.jpeg" alt=""/></a>
            <span class="category">Genre</span>
            <h6>Rp 3.500 / Hari</h6>
            <h4 className="text-center"><a href="property-details.html">Guru Aini</a></h4>
            <ul className="text-center">
            <li>Penulis: <span>92</span></li>
              <li>Penerbit: <span>80</span></li>
              <li>Penyunting: <span>67</span></li>
            </ul>
            <div class="main-button">
              <a href="property-details.html">Pinjam Buku</a>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="item">
            <a href="property-details.html"><img src="images/buku13.jpeg" alt=""/></a>
            <span class="category">Genre</span>
            <h6>Rp 4.500 / Hari</h6>
            <h4 className="text-center"><a href="property-details.html">Kamu Gak Sendiri</a></h4>
            <ul className="text-center">
            <li>Penulis: <span>92</span></li>
              <li>Penerbit: <span>80</span></li>
              <li>Penyunting: <span>67</span></li>
            </ul>
            <div class="main-button">
              <a href="property-details.html">Pinjam Buku</a>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="item">
            <a href="property-details.html"><img src="images/buku6.jpg" alt=""/></a>
            <span class="category">Genre</span>
            <h6>Rp 4.000 / Hari</h6>
            <h4 className="text-center"><a href="property-details.html">34 Beach Street Miami</a></h4>
            <ul className="text-center">
            <li>Penulis: <span>92</span></li>
              <li>Penerbit: <span>80</span></li>
              <li>Penyunting: <span>67</span></li>
            </ul>
            <div class="main-button">
              <a href="property-details.html">Pinjam Buku</a>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="item">
            <a href="property-details.html"><img src="images/buku14.png" alt=""/></a>
            <span class="category">Genre</span>
            <h6>Rp 3.000 / Hari</h6>
            <h4 className="text-center"><a href="property-details.html">Cantik Itu Luka</a></h4>
            <ul className="text-center">
              <li>Penulis: <span>92</span></li>
              <li>Penerbit: <span>80</span></li>
              <li>Penyunting: <span>67</span></li>
            </ul>
            <div class="main-button">
              <a href="property-details.html">Pinjam Buku</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
        </div>
        );
    }
  }

  class MainSection3 extends React.Component {
    render() {
      return (
          <div>
        <div class="row">
        <div class="col-lg-12">
          <ul class="pagination">
            <li><a href="#">1</a></li>
            <li><a class="is_active" href="#">2</a></li>
            <li><a href="#">3</a></li>
            <li><a href="#"> ⇨ </a></li>
          </ul>
        </div>
      </div>
          </div>
        );
      }
    }



function Buku() {
    return(
        <div>
            <MainSection/>
            <MainSection2></MainSection2>
            <MainSection3></MainSection3>
        </div>    
    );
}

export default Buku;