import React,{useState} from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from "../../features/auth/authSlice"
const Navbar = () => {
  const loggedin = !!useSelector(((state) => state.auth.token));
  const dispatch = useDispatch();
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();
  const searchSubmitHandler=(e)=>{
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/products/${keyword}`);
    } else {
      navigate("/products");
    }
  }
  return (
    <div>
      <hr className="fixed-top" style={{ color: 'rgba(71, 111, 0, 1)', margin: "0", height: '4px', opacity: '1'}} />
      <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <div className="container-fluid ">
          <a className="navbar-brand" href="/">
            <img src="../images/image1.webp" alt="Bigbasket" width="100" height="50" className="d-inline-block align-text-top" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-3 mb-2 mb-lg-0 ">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              {/* <li className="nav-item dropdown" >
                <div className="form-floating">
                  <select className="form-select" id="floatingSelect" aria-label="Floating label select example">
                    <option selected>Category</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                  <label for="floatingSelect">Shop By</label>
                </div>
              </li> */}
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/products">Products</Link>
              </li>
            </ul>
            <div className='col-8'>
              <form className="d-flex me-3 mb-2 mb-lg-0" onSubmit={searchSubmitHandler}>
                <input className="form-control me-2" type="search" placeholder="Search a Product" aria-label="Search" onChange={(e)=>setKeyword(e.target.value)}/>
                <button className="btn btn-outline-success col-3" type="submit">Search</button>
              </form>
            </div>
            <div className='after-login'>
              {loggedin ? (<>

                <div class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-person-fill me-3" viewBox="0 0 16 16" >
                      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                    </svg>Welcome 
                  </a>
                  <ul class="dropdown-menu">
                    <li><Link class="dropdown-item" to="/">My Profile</Link></li>
                    <li><Link class="dropdown-item" to="/">My Orders</Link></li>
                    <li><hr class="dropdown-divider" /></li>
                    <li><Link class="dropdown-item" to="/login" onClick={() => { dispatch(logOut()) }}>Logout</Link></li>
                  </ul>
                </div>
              </>

              ) : (
                <Link to="/login">
                  <button className="btn btn-outline-dark me-3 mb-2 mb-lg-0">Login / Signup</button>
                </Link>
              )}
            </div>
            <Link to="/cart" >
              <button type="button" className="btn btn-danger">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart4" viewBox="0 0 16 16">
                  <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"></path>
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
