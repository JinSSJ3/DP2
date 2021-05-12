import React, { Component } from "react";
import SidebarNav from "../../sidebar";
import Logo from '../../../assets/images/logo.png';

class Invoice extends Component {
    render() {
    return (
        <>
        <SidebarNav />
        <div className="page-wrapper">
        <div className="content container-fluid">
        
           
            <div className="invoice-container">
                
                <div className="row">
                    <div className="col-sm-6 m-b-20">
                        <img alt="Logo" className="inv-logo img-fluid" src={Logo} />
                    </div>
                    <div className="col-sm-6 m-b-20">
                        <div className="invoice-details">
                            <h3 className="text-uppercase">Invoice #INV-0001</h3>
                            <ul className="list-unstyled mb-0">
                                <li>Date: <span>March 12, 2019</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 m-b-20">
                        <ul className="list-unstyled mb-0">
                            <li>Doccure Hospital</li>
                            <li>3864 Quiet Valley Lane,</li>
                            <li>Sherman Oaks, CA, 91403</li>
                            <li>GST No:</li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6 col-lg-7 col-xl-8 m-b-20">
                        <h6>Invoice to</h6>
                        <ul className="list-unstyled mb-0">
                            <li><h5 className="mb-0"><strong>Charlene Reed</strong></h5></li>
                            <li>4417 Goosetown Drive</li>
                            <li>Taylorsville, NC, 28681</li>
                            <li>United States</li>
                            <li>8286329170</li>
                            <li><a href="#0">charlenereed@example.com</a></li>
                        </ul>
                    </div>
                    <div className="col-sm-6 col-lg-5 col-xl-4 m-b-20">
                        <h6>Payment Details</h6>
                        <ul className="list-unstyled invoice-payment-details mb-0">
                            <li><h5>Total Due: <span className="text-right">$200</span></h5></li>
                            <li>Bank name: <span>Profit Bank Europe</span></li>
                            <li>Country: <span>United Kingdom</span></li>
                            <li>City: <span>London E1 8BF</span></li>
                            <li>Address: <span>3 Goodman Street</span></li>
                            <li>IBAN: <span>KFH37784028476740</span></li>
                            <li>SWIFT code: <span>BPT4E</span></li>
                        </ul>
                    </div>
                </div>
                
                <div className="table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>ITEM</th>
                                <th className="d-none d-sm-table-cell">DESCRIPTION</th>
                                <th className="text-nowrap">UNIT COST</th>
                                <th>QTY</th>
                                <th>TOTAL</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>medicine1</td>
                                <td className="d-none d-sm-table-cell">Lorem ipsum dolor sit amet, consectetur adipiscing elit</td>
                                <td>$10</td>
                                <td>2</td>
                                <td>$10</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>medicine2</td>
                                <td className="d-none d-sm-table-cell">Lorem ipsum dolor sit amet, consectetur adipiscing elit</td>
                                <td>$10</td>
                                <td>1</td>
                                <td>$10</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>medicine3</td>
                                <td className="d-none d-sm-table-cell">Lorem ipsum dolor sit amet, consectetur adipiscing elit</td>
                                <td>$90</td>
                                <td>1</td>
                                <td>$90</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>medicine4</td>
                                <td className="d-none d-sm-table-cell">Lorem ipsum dolor sit amet, consectetur adipiscing elit</td>
                                <td>$70</td>
                                <td>1</td>
                                <td>$70</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>medicine5</td>
                                <td className="d-none d-sm-table-cell">Lorem ipsum dolor sit amet, consectetur adipiscing elit</td>
                                <td>70</td>
                                <td>1</td>
                                <td>$70</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
                <div>
                    <div className="row invoice-payment">
                        <div className="col-sm-7">
                        </div>
                        <div className="col-sm-5">
                            <div className="m-b-20">
                                <h6>Total due</h6>
                                <div className="table-responsive no-border">
                                    <table className="table mb-0">
                                        <tbody>
                                            <tr>
                                                <th>Subtotal:</th>
                                                <td className="text-right">$250</td>
                                            </tr>
                                            <tr>
                                                <th>Tax: <span className="text-regular">(25%)</span></th>
                                                <td className="text-right">$50</td>
                                            </tr>
                                            <tr>
                                                <th>Total:</th>
                                                <td className="text-right text-primary"><h5>$200</h5></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="invoice-info">
                        <h5>Other information</h5>
                        <p className="text-muted mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed dictum ligula, cursus blandit risus. Maecenas eget metus non tellus dignissim aliquam ut a ex. Maecenas sed vehicula dui, ac suscipit lacus. Sed finibus leo vitae lorem interdum, eu scelerisque tellus fermentum. Curabitur sit amet lacinia lorem. Nullam finibus pellentesque libero.</p>
                    </div>
                </div>
                
            </div>
          
            
        </div>			
    </div>
    </>
    );
    }
}

export default Invoice;