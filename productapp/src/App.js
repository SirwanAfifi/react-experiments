import React, { Component } from "react";
//import ProductsAndSuppliers from "./ProductsAndSuppliers";
import { Provider } from "react-redux";
import dataStore from "./store";
import { Selector } from "./Selector";
import { ProductDisplay } from "./ProductDisplay";
import { SupplierDisplay } from "./SupplierDisplay";
import { StoreAccess } from "./store/StoreAccess";
export default class App extends Component {

    render() {
        return <div className="container-fluid">
            <div className="row">
                <div className="col-3">
                    <StoreAccess store={dataStore} />
                </div>
                <div className="col">
                    <Provider store={dataStore}>
                        <Selector>
                            <ProductDisplay name="Products" />
                            <SupplierDisplay name="Suppliers" />
                        </Selector>
                    </Provider>
                </div>
            </div>
        </div>
    }
}
