
import './App.css';
import Main from './components/Main';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AllProducts from './components/Products/AllProducts';
import InsertProduct from './components/Products/InsertProduct';
import ViewCatalogs from './components/Catalogs/ViewCatalogs';
import InsertCatalogs from './components/Catalogs/InsertCatalogs';
import Customer from './components/Customer/Customer';
import Order from './components/Order/Order';
import ViewAdmin from './components/Admin/ViewAdmin';
import InsertAdmin from './components/Admin/InsertAdmin';
import InsertInstrument from './components/TypeInstrument/InsertInstrument';
import ViewInstrument from './components/TypeInstrument/ViewInstrument';
import ReactNotification from 'react-notifications-component'
import { CatalogsContext, CatalogsConsume, CatalogsProvider } from './ContextApi/CatalogsContext'
import { ProductContext, ProductConsume, ProductProvider } from './ContextApi/ProductContext'
import { useEffect, useState } from 'react';
function App() {
  const [allCatalogs, setAllCatalogs] = useState([])
  const [allProducts, setAllProducts] = useState([])
  useEffect(() => {
    fetchDataCatalogs();
    fetchDataProduct();
  }, [])

  async function fetchDataCatalogs() {
    await fetch('http://localhost:3000/api/catalogs')
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setAllCatalogs(data)
      }).catch(err => {
        console.log(err)
      })
  }
  async function fetchDataProduct() {
    await fetch('http://localhost:3000/api/all-product')
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setAllProducts(data)
      }).catch(err => {
        console.log(err)
      })
  }
  return (
    <div className="App">
      <CatalogsProvider value={{ allCatalogs, setAllCatalogs }}>
        <ProductProvider value={{ allProducts, setAllProducts }}>


          <ReactNotification />
          <Router>
            <div>
              {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
              <Switch>
                <Route exact path="/">
                  <Main />
                </Route>
                <Route exact path="/product">
                  <AllProducts />
                </Route>
                <Route path="/product/insert">
                  <InsertProduct />
                </Route>
                <Route exact path="/catalogs">
                  <ViewCatalogs />
                </Route>
                <Route exact path="/catalogs/insert">
                  <InsertCatalogs />
                </Route>
                <Route exact path="/customer">
                  <Customer />
                </Route>
                <Route exact path="/order">
                  <Order />
                </Route>
                <Route exact path="/admin">
                  <ViewAdmin />
                </Route>
                <Route exact path="/admin/insert">
                  <InsertAdmin />
                </Route>
                <Route exact path="/type-instrument/insert">
                  <InsertInstrument />
                </Route>
                <Route exact path="/type-instrument">
                  <ViewInstrument />
                </Route>
              </Switch>
            </div>
          </Router>
        </ProductProvider>
      </CatalogsProvider>
    </div>
  );
}

export default App;
