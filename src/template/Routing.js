import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Anggota from '../pages/Anggota'; 
import Petugas from '../pages/Petugas'; 
import Buku from '../pages/Buku'; 
import Peminjam from '../pages/Peminjam'; 
import Penyunting from '../pages/Penyunting'; 
import Penulis from '../pages/Penulis'; 
import Penerbit from '../pages/Penerbit'; 


function Routing() {
    return (
        <Router>
        <div>
            
 
        <nav className="navbar navbar-expand-lg navbar-light bg-info">
        <div className="container">
            <a className="navbar-brand" href="#">Frontend</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">


                <li className="nav-item">
                <Link className="nav-link active" to="/Petugas">Petugas</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link active" to="/Buku">Buku</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link active" to="/Peminjam">Peminjam</Link>
                </li>

                <li class="nav-item dropdown">
                 <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                 Lainnya
                </a>
                    <ul class="dropdown-menu">
                        <li><Link className="dropdown-item" to="/Penyunting">Penyunting</Link></li>
                        <li><Link className="dropdown-item" to="/Penulis">Penulis</Link></li>
                        <li><Link className="dropdown-item" to="/Penerbit">Penerbit</Link></li>
                    </ul>
                 </li>
               
               
            </ul>
            </div>
        </div>
        </nav>



        <Routes>
            <Route path="/Buku" element={<Buku />} />
            <Route path="/Petugas" element={<Petugas />} />
            <Route path="/Peminjam" element={<Peminjam />} />
            <Route path="/Penyunting" element={<Penyunting />} />
            <Route path="/Penulis" element={<Penulis />} />
            <Route path="/Penerbit" element={<Penerbit />} />
        </Routes>
        </div>
    </Router>
    );
}


export default Routing;
