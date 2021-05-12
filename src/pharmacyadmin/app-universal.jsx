import React from 'react';
import config from 'config';

import {  Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import Header from  './components/header/index';
import Dashboard from './components/dashboard';
import Products from './components/Products/product';
import AddProduct from './components/Products/addproduct';
import EditProduct from './components/Products/editproduct';
import OutStock from './components/Products/outstock';
import Expired from './components/Products/expired';
import Categories from './components/categories';
import Purchase from './components/purchase/purchase';
import Order from './components/purchase/order';
import AddPurchase from './components/purchase/addpurchase';
import EditPurchase from './components/purchase/editpurchase';
import Sales from './components/Sales';
import Supplier from './components/supplier/supplier';
import AddSupplier from './components/supplier/addsupplier';
import EditSupplier from './components/supplier/editsupplier';
import TransactionList from './components/transaction/transaction-list';
import Invoice from './components/transaction/invoice';
import InvoiceReport from './components/report/invoicelist';
import Settings from './components/settings';
import Profile from './components/profile';

const PharmacyadminApp = function (props) {
    return (
		
			<Router basename={`${config.publicPath}`}>
				<div className="main-wrapper">					
				
			    <Route render={(props)=> <Header {...props}/>} />
				<Switch>
					<Route path="/pharmacyadmin" exact component={Dashboard} />
					<Route path="/pharmacyadmin/categories" exact component={Categories} />
					<Route path="/pharmacyadmin/products" exact component={Products} />
					<Route path="/pharmacyadmin/add-product" exact component={AddProduct} />
					<Route path="/pharmacyadmin/edit-product" exact component={EditProduct} />
					<Route path="/pharmacyadmin/outstock" exact component={OutStock} />
					<Route path="/pharmacyadmin/expired" exact component={Expired} />
					<Route path="/pharmacyadmin/purchase" exact component={Purchase} />
					<Route path="/pharmacyadmin/order" exact component={Order} />
					<Route path="/pharmacyadmin/add-purchase" exact component={AddPurchase} />
					<Route path="/pharmacyadmin/edit-purchase" exact component={EditPurchase} />
					<Route path="/pharmacyadmin/sales" exact component={Sales} />
					<Route path="/pharmacyadmin/supplier" exact component={Supplier} />
					<Route path="/pharmacyadmin/add-supplier" exact component={AddSupplier} />
					<Route path="/pharmacyadmin/edit-supplier" exact component={EditSupplier} />
					<Route path="/pharmacyadmin/transactions-list" exact component={TransactionList} />
					<Route path="/pharmacyadmin/invoice" exact component={Invoice} />
					<Route path="/pharmacyadmin/invoice-report" exact component={InvoiceReport} />					
					<Route path="/pharmacyadmin/profile" exact component={Profile} />
					<Route path="/pharmacyadmin/settings" exact component={Settings} />				
				</Switch>
		       </div>
			
			</Router>
    );
}

export default PharmacyadminApp;

