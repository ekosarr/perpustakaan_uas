
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Petugas from "../pages/Petugas";
import Buku from "../pages/Buku";
import Peminjam from "../pages/Peminjam";
import Penyunting from "../pages/Penyunting";
import Penulis from "../pages/Penulis";
import Penerbit from "../pages/Penerbit";
import Home from "../template/Home";
import Pinjam from "../pages/Pinjam";
import Kembali from "../pages/Kembali";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

// Komponen berbasis fungsi untuk bagian header
function Header() {
  return (
    <header>
      <div class="sub-header">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-8">
          <ul class="info">
            <li><i class="fa fa-envelope"></i> Myperpus123.com</li>
            <li><i class="fa fa-map"></i>Sumenep, Pajagalan</li>
          </ul>
        </div>
        <div class="col-lg-4 col-md-4">
          <ul class="social-links">
            <li><a href="#"><i class="fab fa-facebook"></i></a></li>
            <li><a href="https://x.com/minthu" target="_blank"><i class="fab fa-twitter"></i></a></li>
            <li><a href="#"><i class="fab fa-linkedin"></i></a></li>
            <li><a href="#"><i class="fab fa-instagram"></i></a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>


  <header class="header-area header-sticky">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <nav class="main-nav">
                    <a class="logo">
                        <h1>Myperpus</h1>
                    </a>
                    <ul class="nav">
                      <li><a ><Link className="nav-link " to="/">Beranda</Link></a></li>
                      <li><a ><Link className="nav-link " to="/Buku">Buku</Link></a></li>
                      <li><a ><Link className="nav-link " to="/Pinjam">Pinjam Buku</Link></a></li>
                      <li><a ><Link className="nav-link " to="/Kembali">Kembalikan Buku</Link></a></li>
                      <li><Link className="nav-link " to="/Login"  ><i class="fa-solid fa-user"></i> Login</Link></li>
                      <li><a href="#"><i class="fa-solid fa-user"></i> Admin</a></li>
                  </ul>   
                    <a class='menu-trigger'>
                        <span>Menu</span>
                    </a>
                </nav>
            </div>
        </div>
    </div>
  </header>
    </header>
  );
}

function Routing() {
  return (
    <Router>
      <div>

      <Header/>


        

        <Routes>
          <Route path="/Buku" element={<Buku />} />
          <Route path="/" element={<Home />} />
          <Route path="/Petugas" element={<Petugas />} />
          <Route path="/Peminjam" element={<Peminjam />} />
          <Route path="/Penyunting" element={<Penyunting />} />
          <Route path="/Penulis" element={<Penulis />} />
          <Route path="/Penerbit" element={<Penerbit />} />
          <Route path="/Pinjam" element={<Pinjam />} />
          <Route path="/Kembali" element={<Kembali />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Routing;
