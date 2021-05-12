
import React, { Component } from 'react';
import {Product,Product1,Product2,Product3,Product4} from "./image"

class Cart extends Component {
   render() {
      return ( 
         <div className="main-wrapper">
         {/* Breadcrumb */}
         <div className="breadcrumb-bar">
           <div className="container-fluid">
             <div className="row align-items-center">
               <div className="col-md-12 col-12">
                 <nav aria-label="breadcrumb" className="page-breadcrumb">
                   <ol className="breadcrumb">
                     <li className="breadcrumb-item"><a href="/home">Home</a></li>
                     <li className="breadcrumb-item active" aria-current="page">Cart</li>
                   </ol>
                 </nav>
                 <h2 className="breadcrumb-title">Cart</h2>
               </div>
             </div>
           </div>
         </div>
         {/* /Breadcrumb */}
         {/* Page Content */}
         <div className="content">
           <div className="container">			
             <div className="card card-table">
               <div className="card-body">
                 <div className="table-responsive">
                   <table className="table table-hover table-center mb-0">
                     <thead>
                       <tr>
                         <th>Product</th>
                         <th>SKU</th>
                         <th>Price</th>
                         <th className="text-center">Quantity</th>
                         <th className="text-center">Total</th>
                         <th />
                       </tr>
                     </thead>
                     <tbody>
                       <tr>
                         <td>
                           <h2 className="table-avatar">
                             <a href="/Pharmacy/product-description" className="avatar avatar-sm mr-2"><img className="avatar-img" src={Product} alt="User Image" /></a>
                           </h2>
                           <a href="/Pharmacy/product-description">Benzaxapine Croplex</a>
                         </td>
                         <td>26565</td>
                         <td>$19</td>					
                         <td className="text-center">
                           <div className="custom-increment cart">
                             <div className="input-group1">
                               <span className="input-group-btn">
                                 <button type="button" className="quantity-left-minus btn btn-danger btn-number" data-type="minus" data-field>
                                   <span><i className="fas fa-minus" /></span>
                                 </button>
                               </span>
                               <input type="text" id="quantity1" name="quantity1" className=" input-number" defaultValue={10} />
                               <span className="input-group-btn">
                                 <button type="button" className="quantity-right-plus btn btn-success btn-number" data-type="plus" data-field>
                                   <span><i className="fas fa-plus" /></span>
                                 </button>
                               </span>
                             </div>
                           </div>
                         </td>
                         <td className="text-center">$19</td>
                         <td className="text-right">
                           <div className="table-action">
                             <a href="" className="btn btn-sm bg-danger-light">
                               <i className="fas fa-times" />
                             </a>
                           </div>
                         </td>
                       </tr>
                       <tr>
                         <td>
                           <h2 className="table-avatar">
                             <a href="/Pharmacy/product-description" className="avatar avatar-sm mr-2"><img className="avatar-img" src={Product1} alt="User Image" /></a>
                           </h2>
                           <a href="/Pharmacy/product-description">Ombinazol Bonibamol</a>
                         </td>
                         <td>865727</td>
                         <td>$22</td>					
                         <td className="text-center">
                           <div className="custom-increment cart">
                             <div className="input-group1">
                               <span className="input-group-btn">
                                 <button type="button" className="quantity-left-minus btn btn-danger btn-number" data-type="minus" data-field>
                                   <span><i className="fas fa-minus" /></span>
                                 </button>
                               </span>
                               <input type="text" id="quantity2" name="quantity2" className=" input-number" defaultValue={10} />
                               <span className="input-group-btn">
                                 <button type="button" className="quantity-right-plus btn btn-success btn-number" data-type="plus" data-field>
                                   <span><i className="fas fa-plus" /></span>
                                 </button>
                               </span>
                             </div>
                           </div>
                         </td>
                         <td className="text-center">$22</td>
                         <td className="text-right">
                           <div className="table-action">
                             <a href="" className="btn btn-sm bg-danger-light">
                               <i className="fas fa-times" />
                             </a>
                           </div>
                         </td>
                       </tr>
                       <tr>
                         <td>
                           <h2 className="table-avatar">
                             <a href="/Pharmacy/product-description" className="avatar avatar-sm mr-2"><img className="avatar-img" src={Product2} alt="User Image" /></a>
                           </h2>
                           <a href="/Pharmacy/product-description">Dantotate Dantodazole</a>
                         </td>
                         <td>978656</td>
                         <td>$10</td>					
                         <td className="text-center">
                           <div className="custom-increment cart">
                             <div className="input-group1">
                               <span className="input-group-btn">
                                 <button type="button" className="quantity-left-minus btn btn-danger btn-number" data-type="minus" data-field>
                                   <span><i className="fas fa-minus" /></span>
                                 </button>
                               </span>
                               <input type="text" id="quantity3" name="quantity3" className=" input-number" defaultValue={10} />
                               <span className="input-group-btn">
                                 <button type="button" className="quantity-right-plus btn btn-success btn-number" data-type="plus" data-field>
                                   <span><i className="fas fa-plus" /></span>
                                 </button>
                               </span>
                             </div>
                           </div>
                         </td>
                         <td className="text-center">$10</td>
                         <td className="text-right">
                           <div className="table-action">
                             <a href="" className="btn btn-sm bg-danger-light">
                               <i className="fas fa-times" />
                             </a>
                           </div>
                         </td>
                       </tr>
                       <tr>
                         <td>
                           <h2 className="table-avatar">
                             <a href="/Pharmacy/product-description" className="avatar avatar-sm mr-2"><img className="avatar-img" src={Product3} alt="User Image" /></a>
                           </h2>
                           <a href="/Pharmacy/product-description">Alispirox Aerorenone</a>
                         </td>
                         <td>543252</td>
                         <td>$26</td>					
                         <td className="text-center">
                           <div className="custom-increment cart">
                             <div className="input-group1">
                               <span className="input-group-btn">
                                 <button type="button" className="quantity-left-minus btn btn-danger btn-number" data-type="minus" data-field>
                                   <span><i className="fas fa-minus" /></span>
                                 </button>
                               </span>
                               <input type="text" id="quantity4" name="quantity4" className=" input-number" defaultValue={10} />
                               <span className="input-group-btn">
                                 <button type="button" className="quantity-right-plus btn btn-success btn-number" data-type="plus" data-field>
                                   <span><i className="fas fa-plus" /></span>
                                 </button>
                               </span>
                             </div>
                           </div>
                         </td>
                         <td className="text-center">$26</td>
                         <td className="text-right">
                           <div className="table-action">
                             <a href="" className="btn btn-sm bg-danger-light">
                               <i className="fas fa-times" />
                             </a>
                           </div>
                         </td>
                       </tr>
                       <tr>
                         <td>
                           <h2 className="table-avatar">
                             <a href="/Pharmacy/product-description" className="avatar avatar-sm mr-2"><img className="avatar-img" src={Product4} alt="User Image" /></a>
                           </h2>
                           <a href="/Pharmacy/product-description">Nitrolozin Zithrotropin</a>
                         </td>
                         <td>634534</td>
                         <td>$12</td>					
                         <td className="text-center">
                           <div className="custom-increment cart">
                             <div className="input-group1">
                               <span className="input-group-btn">
                                 <button type="button" className="quantity-left-minus btn btn-danger btn-number" data-type="minus" data-field>
                                   <span><i className="fas fa-minus" /></span>
                                 </button>
                               </span>
                               <input type="text" id="quantity5" name="quantity5" className=" input-number" defaultValue={10} />
                               <span className="input-group-btn">
                                 <button type="button" className="quantity-right-plus btn btn-success btn-number" data-type="plus" data-field>
                                   <span><i className="fas fa-plus" /></span>
                                 </button>
                               </span>
                             </div>
                           </div>
                         </td>
                         <td className="text-center">$12</td>
                         <td className="text-right">
                           <div className="table-action">
                             <a href="" className="btn btn-sm bg-danger-light">
                               <i className="fas fa-times" />
                             </a>
                           </div>
                         </td>
                       </tr>
                     </tbody>
                   </table>		
                 </div>
               </div>
             </div>
             <div className="row">
               <div className="col-md-7 col-lg-8">
               </div>
               <div className="col-md-5 col-lg-4">
                 {/* Booking Summary */}
                 <div className="card booking-card">
                   <div className="card-header">
                     <h4 className="card-title">Cart Totals</h4>
                   </div>
                   <div className="card-body">
                     <div className="booking-summary">
                       <div className="booking-item-wrap">
                         <ul className="booking-date">
                           <li>Subtotal <span>$5,877.00</span></li>
                           <li>Shipping <span>$25.00<a href="#">Calculate shipping</a></span></li>
                         </ul>
                         <ul className="booking-fee pt-4">
                           <li>Tax <span>$0.00</span></li>
                         </ul>
                         <div className="booking-total">
                           <ul className="booking-total-list">
                             <li>
                               <span>Total</span>
                               <span className="total-cost">$160</span>
                             </li>
                             <li>
                               <div className="clinic-booking pt-4">
                                 <a className="apt-btn" href="/Pharmacy/product-checkout">Proceed to checkout</a>
                               </div>
                             </li>
                           </ul>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
                 {/* /Booking Summary */}
               </div>
             </div>
           </div>
         </div>		
         {/* /Page Content */}
       </div>
      );
   }
}

export default Cart;