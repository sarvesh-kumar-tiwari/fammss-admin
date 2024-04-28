import React from 'react';
import Nav from '../../components/Nav';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
function Dashboard() {
  return (
 <div className="wrapper">
  <Nav/>
  <div className="content-wrapper">
    <div className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h1 className="m-0">Dashboard</h1>
          </div>
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item"><a href="#">Home</a></li>
              <li className="breadcrumb-item active">Dashboard</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
 
    <section className="content">
      <div className="container-fluid">
       
        <div className="row">
          <div className="col-12 col-sm-6 col-md-3">
            <div className="info-box">
              <span className="info-box-icon bg-info elevation-1"><i className="fas fa-cog"></i></span>

              <div className="info-box-content">
                <span className="info-box-text">CPU Traffic</span>
                <span className="info-box-number">
                  10
                  <small>%</small>
                </span>
              </div>
             
            </div>
           
          </div>
         
          <div className="col-12 col-sm-6 col-md-3">
            <div className="info-box mb-3">
              <span className="info-box-icon bg-danger elevation-1"><i className="fas fa-thumbs-up"></i></span>

              <div className="info-box-content">
                <span className="info-box-text">Likes</span>
                <span className="info-box-number">41,410</span>
              </div>
             
            </div>
          
          </div>
        
          <div className="clearfix hidden-md-up"></div>

          <div className="col-12 col-sm-6 col-md-3">
            <div className="info-box mb-3">
              <span className="info-box-icon bg-success elevation-1"><i className="fas fa-shopping-cart"></i></span>

              <div className="info-box-content">
                <span className="info-box-text">Sales</span>
                <span className="info-box-number">760</span>
              </div>
             
            </div>
            
          </div>
          
          <div className="col-12 col-sm-6 col-md-3">
            <div className="info-box mb-3">
              <span className="info-box-icon bg-warning elevation-1"><i className="fas fa-users"></i></span>

              <div className="info-box-content">
                <span className="info-box-text">New Members</span>
                <span className="info-box-number">2,000</span>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-8">
            <div className="card">
              <div className="card-header border-transparent">
                <h3 className="card-title">Latest Orders</h3>

                <div className="card-tools">
                  <button type="button" className="btn btn-tool" data-card-widget="collapse">
                    <i className="fas fa-minus"></i>
                  </button>
                  <button type="button" className="btn btn-tool" data-card-widget="remove">
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
             
              <div className="card-body p-0">
                <div className="table-responsive">
                  <table className="table m-0">
                    <thead>
                    <tr>
                      <th>Order ID</th>
                      <th>Item</th>
                      <th>Status</th>
                      <th>Popularity</th>
                    </tr>
                    </thead>
                    <tbody>
                   
                    <tr>
                      <td><a href="pages/examples/invoice.html">OR7429</a></td>
                      <td>iPhone 6 Plus</td>
                      <td><span className="badge badge-danger">Delivered</span></td>
                      <td>
                        <div className="sparkbar" data-color="#f56954" data-height="20">90,-80,90,70,-61,83,63</div>
                      </td>
                    </tr>
                    <tr>
                      <td><a href="pages/examples/invoice.html">OR7429</a></td>
                      <td>Samsung Smart TV</td>
                      <td><span className="badge badge-info">Processing</span></td>
                      <td>
                        <div className="sparkbar" data-color="#00c0ef" data-height="20">90,80,-90,70,-61,83,63</div>
                      </td>
                    </tr>
                    <tr>
                      <td><a href="pages/examples/invoice.html">OR1848</a></td>
                      <td>Samsung Smart TV</td>
                      <td><span className="badge badge-warning">Pending</span></td>
                      <td>
                        <div className="sparkbar" data-color="#f39c12" data-height="20">90,80,-90,70,61,-83,68</div>
                      </td>
                    </tr>
                    <tr>
                      <td><a href="pages/examples/invoice.html">OR7429</a></td>
                      <td>iPhone 6 Plus</td>
                      <td><span className="badge badge-danger">Delivered</span></td>
                      <td>
                        <div className="sparkbar" data-color="#f56954" data-height="20">90,-80,90,70,-61,83,63</div>
                      </td>
                    </tr>
                    <tr>
                      <td><a href="pages/examples/invoice.html">OR9842</a></td>
                      <td>Call of Duty IV</td>
                      <td><span className="badge badge-success">Shipped</span></td>
                      <td>
                        <div className="sparkbar" data-color="#00a65a" data-height="20">90,80,90,-70,61,-83,63</div>
                      </td>
                    </tr>
                    </tbody>
                  </table>
                </div>
             
              </div>
            
              <div className="card-footer clearfix">
                <a href="javascript:void(0)" className="btn btn-sm btn-info float-left">Place New Order</a>
                <a href="javascript:void(0)" className="btn btn-sm btn-secondary float-right">View All Orders</a>
              </div>
              
            </div>
           
          </div>
        

          <div className="col-md-4">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Recently Added Products</h3>

                <div className="card-tools">
                  <button type="button" className="btn btn-tool" data-card-widget="collapse">
                    <i className="fas fa-minus"></i>
                  </button>
                  <button type="button" className="btn btn-tool" data-card-widget="remove">
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
             
              <div className="card-body p-0">
                <ul className="products-list product-list-in-card pl-2 pr-2">
                  <li className="item">
                    <div className="product-img">
                      <img src="dist/img/default-150x150.png" alt="Product Image" className="img-size-50"/>
                    </div>
                    <div className="product-info">
                      <a href="javascript:void(0)" className="product-title">Samsung TV
                        <span className="badge badge-warning float-right">$1800</span></a>
                      <span className="product-description">
                        Samsung 32" 1080p 60Hz LED Smart HDTV.
                      </span>
                    </div>
                  </li>
                
                  <li className="item">
                    <div className="product-img">
                      <img src="dist/img/default-150x150.png" alt="Product Image" className="img-size-50"/>
                    </div>
                    <div className="product-info">
                      <a href="javascript:void(0)" className="product-title">Bicycle
                        <span className="badge badge-info float-right">$700</span></a>
                      <span className="product-description">
                        26" Mongoose Dolomite Men's 7-speed, Navy Blue.
                      </span>
                    </div>
                  </li>
                
                  <li className="item">
                    <div className="product-img">
                      <img src="dist/img/default-150x150.png" alt="Product Image" className="img-size-50"/>
                    </div>
                    <div className="product-info">
                      <a href="javascript:void(0)" className="product-title">
                        Xbox One <span className="badge badge-danger float-right">
                        $350
                      </span>
                      </a>
                      <span className="product-description">
                        Xbox One Console Bundle with Halo Master Chief Collection.
                      </span>
                    </div>
                  </li>
                
                  <li className="item">
                    <div className="product-img">
                      <img src="dist/img/default-150x150.png" alt="Product Image" className="img-size-50"/>
                    </div>
                    <div className="product-info">
                      <a href="javascript:void(0)" className="product-title">PlayStation 4
                        <span className="badge badge-success float-right">$399</span></a>
                      <span className="product-description">
                        PlayStation 4 500GB Console (PS4)
                      </span>
                    </div>
                  </li>
                  
                </ul>
              </div>
            
              <div className="card-footer text-center">
                <a href="javascript:void(0)" className="uppercase">View All Products</a>
              </div>
              
            </div>
           
          </div>
        
        </div>
       
      </div>
    </section>
  
  </div>
  <Footer/>
</div>
  );
}

export default Dashboard;
