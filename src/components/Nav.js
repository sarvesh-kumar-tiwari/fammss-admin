import React from "react";
import { Link } from "react-router-dom";
const Nav=()=>{
    return(<>
      <nav className="main-header navbar navbar-expand navbar-dark">
       
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars"></i></a>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <Link to="/dashboard" className="nav-link">Home</Link>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <a href="#" className="nav-link">Contact</a>
          </li>
        </ul>
    
        
        <ul className="navbar-nav ml-auto">
        
          <li className="nav-item">
            <a className="nav-link" data-widget="navbar-search" href="#" role="button">
              <i className="fas fa-search"></i>
            </a>
            <div className="navbar-search-block">
              <form className="form-inline">
                <div className="input-group input-group-sm">
                  <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search"/>
                  <div className="input-group-append">
                    <button className="btn btn-navbar" type="submit">
                      <i className="fas fa-search"></i>
                    </button>
                    <button className="btn btn-navbar" type="button" data-widget="navbar-search">
                      <i className="fas fa-times"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </li>
    
         
         
         
          <li className="nav-item">
            <a className="nav-link" data-widget="fullscreen" href="#" role="button">
              <i className="fas fa-expand-arrows-alt"></i>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-widget="control-sidebar" data-slide="true" href="#" role="button">
              <i className="fas fa-th-large"></i>
            </a>
          </li>
        </ul>
      </nav>
     
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        
        <Link to={'/dashboard'} className="brand-link">
          <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3"/>
          <span className="brand-text font-weight-light">Admin</span>
        </Link>
    
        
        <div className="sidebar">
        
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image"/>
            </div>
            <div className="info">
              <a href="#" className="d-block">Alexander Pierce</a>
            </div>
          </div>
    
         
          <div className="form-inline">
            <div className="input-group" data-widget="sidebar-search">
              <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search"/>
              <div className="input-group-append">
                <button className="btn btn-sidebar">
                  <i className="fas fa-search fa-fw"></i>
                </button>
              </div>
            </div>
          </div>
          <nav className="mt-2">
        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
       
          <li className="nav-item menu-open">
            <Link to={'/dashboard'} className="nav-link active">
              <i className="nav-icon fas fa-tachometer-alt"></i>
              <p>
                Dashboard
              </p>
            </Link>
          </li>
          <li className="nav-item">
            <Link to={'/products'} className="nav-link">
              <i className="nav-icon fas fa-th"></i>
              <p>
                Products
                <span className="right badge badge-danger">New</span>
              </p>
            </Link>
          </li>
          
        </ul>
      </nav>
        </div>
      </aside></>)
}

export default Nav;