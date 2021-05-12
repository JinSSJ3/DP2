
import React, { Component } from 'react';
import StickyBox from "react-sticky-box";
import {Product,Product1,Product2,Product3,Product4,Product5,Product6,Product7,Product8,Product10,Product11,
  Product12,Product13,Product14,Product15} from "./image"

class ProductIndex extends Component {
   render() {
      return ( 
        <div className="main-wrapper">
             <div className="breadcrumb-bar">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-md-12 col-12">
                <nav aria-label="breadcrumb" className="page-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/home">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Pain Relif</li>
                  </ol>
                </nav>
                <h2 className="breadcrumb-title">Pain Relif	<span className="text-small text-white ml-2"> <b>70 Products</b></span></h2>
              </div>
            </div>
          </div>
        </div>
        {/* Page Content */}
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-5 col-lg-3 col-xl-3 theiaStickySidebar">
                {/* Search Filter */}
                <StickyBox offsetTop={20} offsetBottom={20}>
                <div className="card search-filter">
                  <div className="card-header">
                    <h4 className="card-title mb-0">Filter</h4>
                  </div>
                  <div className="card-body">
                    {/* <div class="filter-widget">
									<div class="cal-icon">
										<input type="text" class="form-control datetimepicker" placeholder="Select Date">
									</div>			
								</div> */}
                    <div className="filter-widget">
                      <h4>Categories</h4>
                      <div>
                        <label className="custom_check">
                          <input type="checkbox" name="gender_type" defaultChecked />
                          <span className="checkmark" /> Family Care
                        </label>
                      </div>
                      <div>
                        <label className="custom_check">
                          <input type="checkbox" name="gender_type" />
                          <span className="checkmark" /> Skin Care
                        </label>
                      </div>
                      <div>
                        <label className="custom_check">
                          <input type="checkbox" name="gender_type" />
                          <span className="checkmark" /> Hair Care
                        </label>
                      </div>
                      <div>
                        <label className="custom_check">
                          <input type="checkbox" name="gender_type" />
                          <span className="checkmark" /> Lip Care
                        </label>
                      </div>
                      <div>
                        <label className="custom_check">
                          <input type="checkbox" name="gender_type" />
                          <span className="checkmark" /> Men's Care
                        </label>
                      </div>
                      <div>
                        <label className="custom_check">
                          <input type="checkbox" name="gender_type" />
                          <span className="checkmark" /> Women's Care
                        </label>
                      </div>
                      <div>
                        <label className="custom_check">
                          <input type="checkbox" name="gender_type" />
                          <span className="checkmark" /> Baby care
                        </label>
                      </div>
                    </div>
                    <div className="btn-search">
                      <button type="button" className="btn btn-block">Search</button>
                    </div>	
                  </div>
                </div>
                </StickyBox>
                {/* /Search Filter */}
              </div>
              <div className="col-md-7 col-lg-9 col-xl-9">
                <div className="row align-items-center pb-3">	
                  <div className="col-md-4 col-12 d-md-block d-none custom-short-by">
                    <h3 className="title pharmacy-title">Medlife Medical</h3>
                    <p className="doc-location mb-2 text-ellipse pharmacy-location"><i className="fas fa-map-marker-alt mr-1" /> 96 Red Hawk Road Cyrus, MN 56323 </p>
                    <span className="sort-title">Showing 6 of 98 products</span>
                  </div>
                  <div className="col-md-8 col-12 d-md-block d-none custom-short-by">
                    <div className="sort-by pb-3">
                      <span className="sort-title">Sort by</span>
                      <span className="sortby-fliter">
                        <select className="select">
                          <option>Select</option>
                          <option className="sorting">Rating</option>
                          <option className="sorting">Popular</option>
                          <option className="sorting">Latest</option>
                          <option className="sorting">Free</option>
                        </select>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 col-lg-4 col-xl-4 product-custom">
                    <div className="profile-widget">
                      <div className="doc-img">
                        <a href="/Pharmacy/product-description" tabIndex={-1}>
                          <img className="img-fluid" alt="Product image" src={Product} />
                        </a>
                        <a href="" className="fav-btn" tabIndex={-1}>
                          <i className="far fa-bookmark" />
                        </a>
                      </div>
                      <div className="pro-content">
                        <h3 className="title pb-4">
                          <a href="/Pharmacy/product-description" tabIndex={-1}>Benzaxapine Croplex</a> 
                        </h3>
                        <div className="row align-items-center">
                          <div className="col-lg-6">
                            <span className="price">$19.00</span>
                            <span className="price-strike">$45.00</span>
                          </div>
                          <div className="col-lg-6 text-right">
                            <a href="/Pharmacy/cart" className="cart-icon"><i className="fas fa-shopping-cart" /></a>
                          </div>
                        </div>
                      </div>
                    </div>		
                  </div>
                  <div className="col-md-12 col-lg-4 col-xl-4 product-custom">
                    <div className="profile-widget">
                      <div className="doc-img">
                        <a href="/Pharmacy/product-description" tabIndex={-1}>
                          <img className="img-fluid" alt="Product image" src={Product13} />
                        </a>
                        <a href="" className="fav-btn" tabIndex={-1}>
                          <i className="far fa-bookmark" />
                        </a>
                      </div>
                      <div className="pro-content">
                        <h3 className="title pb-4">
                          <a href="/Pharmacy/product-description" tabIndex={-1}>Rapalac Neuronium</a> 
                        </h3>
                        <div className="row align-items-center">
                          <div className="col-lg-6">
                            <span className="price">$16.00</span>
                          </div>
                          <div className="col-lg-6 text-right">
                            <a href="/Pharmacy/cart" className="cart-icon"><i className="fas fa-shopping-cart" /></a>
                          </div>
                        </div>
                      </div>
                    </div>		
                  </div>
                  <div className="col-md-12 col-lg-4 col-xl-4 product-custom">
                    <div className="profile-widget">
                      <div className="doc-img">
                        <a href="/Pharmacy/product-description" tabIndex={-1}>
                          <img className="img-fluid" alt="Product image" src={Product1} />
                        </a>
                        <a href="" className="fav-btn" tabIndex={-1}>
                          <i className="far fa-bookmark" />
                        </a>
                      </div>
                      <div className="pro-content">
                        <h3 className="title pb-4">
                          <a href="/Pharmacy/product-description" tabIndex={-1}>Ombinazol Bonibamol</a> 
                        </h3>
                        <div className="row align-items-center">
                          <div className="col-lg-6">
                            <span className="price">$22.00</span>
                          </div>
                          <div className="col-lg-6 text-right">
                            <a href="/Pharmacy/cart" className="cart-icon"><i className="fas fa-shopping-cart" /></a>
                          </div>
                        </div>
                      </div>
                    </div>		
                  </div>
                  <div className="col-md-12 col-lg-4 col-xl-4 product-custom">
                    <div className="profile-widget">
                      <div className="doc-img">
                        <a href="/Pharmacy/product-description" tabIndex={-1}>
                          <img className="img-fluid" alt="Product image" src={Product2} />
                        </a>
                        <a href="" className="fav-btn" tabIndex={-1}>
                          <i className="far fa-bookmark" />
                        </a>
                      </div>
                      <div className="pro-content">
                        <h3 className="title pb-4">
                          <a href="/Pharmacy/product-description" tabIndex={-1}>Dantotate Dantodazole</a> 
                        </h3>
                        <div className="row align-items-center">
                          <div className="col-lg-6">
                            <span className="price">$10.00</span>
                            <span className="price-strike">$12.00</span>
                          </div>
                          <div className="col-lg-6 text-right">
                            <a href="/Pharmacy/cart" className="cart-icon"><i className="fas fa-shopping-cart" /></a>
                          </div>
                        </div>
                      </div>
                    </div>		
                  </div>
                  <div className="col-md-12 col-lg-4 col-xl-4 product-custom">
                    <div className="profile-widget">
                      <div className="doc-img">
                        <a href="/Pharmacy/product-description" tabIndex={-1}>
                          <img className="img-fluid" alt="Product image" src={Product12} />
                        </a>
                        <a href="" className="fav-btn" tabIndex={-1}>
                          <i className="far fa-bookmark" />
                        </a>
                      </div>
                      <div className="pro-content">
                        <h3 className="title pb-4">
                          <a href="/Pharmacy/product-description" tabIndex={-1}>Acetrace Amionel</a> 
                        </h3>
                        <div className="row align-items-center">
                          <div className="col-lg-6">
                            <span className="price">$7.00</span>
                          </div>
                          <div className="col-lg-6 text-right">
                            <a href="/Pharmacy/cart" className="cart-icon"><i className="fas fa-shopping-cart" /></a>
                          </div>
                        </div>
                      </div>
                    </div>		
                  </div>
                  <div className="col-md-12 col-lg-4 col-xl-4 product-custom">
                    <div className="profile-widget">
                      <div className="doc-img">
                        <a href="/Pharmacy/product-description" tabIndex={-1}>
                          <img className="img-fluid" alt="Product image" src={Product11} />
                        </a>
                        <a href="" className="fav-btn" tabIndex={-1}>
                          <i className="far fa-bookmark" />
                        </a>
                      </div>
                      <div className="pro-content">
                        <h3 className="title pb-4">
                          <a href="/Pharmacy/product-description" tabIndex={-1}>Ergorinex Caffeigestin</a> 
                        </h3>
                        <div className="row align-items-center">
                          <div className="col-lg-6">
                            <span className="price">$15.00</span>
                          </div>
                          <div className="col-lg-6 text-right">
                            <a href="/Pharmacy/cart" className="cart-icon"><i className="fas fa-shopping-cart" /></a>
                          </div>
                        </div>
                      </div>
                    </div>		
                  </div>
                  <div className="col-md-12 col-lg-4 col-xl-4 product-custom">
                    <div className="profile-widget">
                      <div className="doc-img">
                        <a href="/Pharmacy/product-description" tabIndex={-1}>
                          <img className="img-fluid" alt="Product image" src={Product3} />
                        </a>
                        <a href="" className="fav-btn" tabIndex={-1}>
                          <i className="far fa-bookmark" />
                        </a>
                      </div>
                      <div className="pro-content">
                        <h3 className="title pb-4">
                          <a href="/Pharmacy/product-description" tabIndex={-1}>Alispirox Aerorenone</a> 
                        </h3>
                        <div className="row align-items-center">
                          <div className="col-lg-6">
                            <span className="price">$26.00</span>
                          </div>
                          <div className="col-lg-6 text-right">
                            <a href="/Pharmacy/cart" className="cart-icon"><i className="fas fa-shopping-cart" /></a>
                          </div>
                        </div>
                      </div>
                    </div>		
                  </div>
                  <div className="col-md-12 col-lg-4 col-xl-4 product-custom">
                    <div className="profile-widget">
                      <div className="doc-img">
                        <a href="/Pharmacy/product-description" tabIndex={-1}>
                          <img className="img-fluid" alt="Product image" src={Product10} />
                        </a>
                        <a href="" className="fav-btn" tabIndex={-1}>
                          <i className="far fa-bookmark" />
                        </a>
                      </div>
                      <div className="pro-content">
                        <h3 className="title pb-4">
                          <a href="/Pharmacy/product-description" tabIndex={-1}>Lysofranil Dorzostin</a> 
                        </h3>
                        <div className="row align-items-center">
                          <div className="col-lg-6">
                            <span className="price">$10.00</span>
                            <span className="price-strike">$12.00</span>
                          </div>
                          <div className="col-lg-6 text-right">
                            <a href="/Pharmacy/cart" className="cart-icon"><i className="fas fa-shopping-cart" /></a>
                          </div>
                        </div>
                      </div>
                    </div>		
                  </div>
                  <div className="col-md-12 col-lg-4 col-xl-4 product-custom">
                    <div className="profile-widget">
                      <div className="doc-img">
                        <a href="/Pharmacy/product-description" tabIndex={-1}>
                          <img className="img-fluid" alt="Product image" src={Product4} />
                        </a>
                        <a href="" className="fav-btn" tabIndex={-1}>
                          <i className="far fa-bookmark" />
                        </a>
                      </div>
                      <div className="pro-content">
                        <h3 className="title pb-4">
                          <a href="/Pharmacy/product-description" tabIndex={-1}>Nitrolozin Zithrotropin</a> 
                        </h3>
                        <div className="row align-items-center">
                          <div className="col-lg-6">
                            <span className="price">$12.00</span>
                          </div>
                          <div className="col-lg-6 text-right">
                            <a href="/Pharmacy/cart" className="cart-icon"><i className="fas fa-shopping-cart" /></a>
                          </div>
                        </div>
                      </div>
                    </div>		
                  </div>
                  <div className="col-md-12 col-lg-4 col-xl-4 product-custom">
                    <div className="profile-widget">
                      <div className="doc-img">
                        <a href="/Pharmacy/product-description" tabIndex={-1}>
                          <img className="img-fluid" alt="Product image" src={Product14} />
                        </a>
                        <a href="" className="fav-btn" tabIndex={-1}>
                          <i className="far fa-bookmark" />
                        </a>
                      </div>
                      <div className="pro-content">
                        <h3 className="title pb-4">
                          <a href="/Pharmacy/product-description" tabIndex={-1}>Cordacriptine Mardipine</a> 
                        </h3>
                        <div className="row align-items-center">
                          <div className="col-lg-6">
                            <span className="price">$9.00</span>
                          </div>
                          <div className="col-lg-6 text-right">
                            <a href="/Pharmacy/cart" className="cart-icon"><i className="fas fa-shopping-cart" /></a>
                          </div>
                        </div>
                      </div>
                    </div>		
                  </div>
                  <div className="col-md-12 col-lg-4 col-xl-4 product-custom">
                    <div className="profile-widget">
                      <div className="doc-img">
                        <a href="/Pharmacy/product-description" tabIndex={-1}>
                          <img className="img-fluid" alt="Product image" src={Product5} />
                        </a>
                        <a href="" className="fav-btn" tabIndex={-1}>
                          <i className="far fa-bookmark" />
                        </a>
                      </div>
                      <div className="pro-content">
                        <h3 className="title pb-4">
                          <a href="/Pharmacy/product-description" tabIndex={-1}>Iconevist Ampyplex</a> 
                        </h3>
                        <div className="row align-items-center">
                          <div className="col-lg-6">
                            <span className="price">$16.00</span>
                          </div>
                          <div className="col-lg-6 text-right">
                            <a href="/Pharmacy/cart" className="cart-icon"><i className="fas fa-shopping-cart" /></a>
                          </div>
                        </div>
                      </div>
                    </div>		
                  </div>
                  <div className="col-md-12 col-lg-4 col-xl-4 product-custom">
                    <div className="profile-widget">
                      <div className="doc-img">
                        <a href="/Pharmacy/product-description" tabIndex={-1}>
                          <img className="img-fluid" alt="Product image" src={Product6} />
                        </a>
                        <a href="" className="fav-btn" tabIndex={-1}>
                          <i className="far fa-bookmark" />
                        </a>
                      </div>
                      <div className="pro-content">
                        <h3 className="title pb-4">
                          <a href="/Pharmacy/product-description" tabIndex={-1}>Alcafsteride Omebide</a> 
                        </h3>
                        <div className="row align-items-center">
                          <div className="col-lg-6">
                            <span className="price">$7.00</span>
                          </div>
                          <div className="col-lg-6 text-right">
                            <a href="/Pharmacy/cart" className="cart-icon"><i className="fas fa-shopping-cart" /></a>
                          </div>
                        </div>
                      </div>
                    </div>		
                  </div>
                  <div className="col-md-12 col-lg-4 col-xl-4 product-custom">
                    <div className="profile-widget">
                      <div className="doc-img">
                        <a href="/Pharmacy/product-description" tabIndex={-1}>
                          <img className="img-fluid" alt="Product image" src={Product15} />
                        </a>
                        <a href="" className="fav-btn" tabIndex={-1}>
                          <i className="far fa-bookmark" />
                        </a>
                      </div>
                      <div className="pro-content">
                        <h3 className="title pb-4">
                          <a href="/Pharmacy/product-description" tabIndex={-1}>Neubide Aborase</a> 
                        </h3>
                        <div className="row align-items-center">
                          <div className="col-lg-6">
                            <span className="price">$30.00</span>
                          </div>
                          <div className="col-lg-6 text-right">
                            <a href="/Pharmacy/cart" className="cart-icon"><i className="fas fa-shopping-cart" /></a>
                          </div>
                        </div>
                      </div>
                    </div>		
                  </div>
                  <div className="col-md-12 col-lg-4 col-xl-4 product-custom">
                    <div className="profile-widget">
                      <div className="doc-img">
                        <a href="/Pharmacy/product-description" tabIndex={-1}>
                          <img className="img-fluid" alt="Product image" src={Product7} />
                        </a>
                        <a href="" className="fav-btn" tabIndex={-1}>
                          <i className="far fa-bookmark" />
                        </a>
                      </div>
                      <div className="pro-content">
                        <h3 className="title pb-4">
                          <a href="/Pharmacy/product-description" tabIndex={-1}>ITONE eye drops 10ml</a> 
                        </h3>
                        <div className="row align-items-center">
                          <div className="col-lg-6">
                            <span className="price">$50.00</span>
                          </div>
                          <div className="col-lg-6 text-right">
                            <a href="/Pharmacy/cart" className="cart-icon"><i className="fas fa-shopping-cart" /></a>
                          </div>
                        </div>
                      </div>
                    </div>		
                  </div>
                  <div className="col-md-12 col-lg-4 col-xl-4 product-custom">
                    <div className="profile-widget">
                      <div className="doc-img">
                        <a href="/Pharmacy/product-description" tabIndex={-1}>
                          <img className="img-fluid" alt="Product image" src={Product8} />
                        </a>
                        <a href="" className="fav-btn" tabIndex={-1}>
                          <i className="far fa-bookmark" />
                        </a>
                      </div>
                      <div className="pro-content">
                        <h3 className="title pb-4">
                          <a href="/Pharmacy/product-description" tabIndex={-1}>Antatriene Drospiletra</a> 
                        </h3>
                        <div className="row align-items-center">
                          <div className="col-lg-6">
                            <span className="price">$10.00</span>
                            <span className="price-strike">$20.00</span>
                          </div>
                          <div className="col-lg-6 text-right">
                            <a href="/Pharmacy/cart" className="cart-icon"><i className="fas fa-shopping-cart" /></a>
                          </div>
                        </div>
                      </div>
                    </div>		
                  </div>
                </div>
                <div className="col-md-12 text-center">
                  <a href="#" className="btn book-btn1 mb-4">Load More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>       
      );
   }
}

export default ProductIndex;