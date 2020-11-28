
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
import { CatalogsProvider } from './ContextApi/CatalogsContext'
import { ProductProvider } from './ContextApi/ProductContext'
import { useEffect, useState } from 'react';
import { MusicalInstrumentProvider } from './ContextApi/MusicalInstrumentContext';

import Login from './components/Login/Login';
import Axios from 'axios';
import { OrderListContext, OrderListProvider } from './ContextApi/OrderContext';
import { UserProvider } from './ContextApi/UserContext';
function App() {
  const [allCatalogs, setAllCatalogs] = useState([])
  const [allProducts, setAllProducts] = useState([])
  const [allInstrument, setAllInstrument] = useState([]);
  const [allOrder, setAllOrder] = useState([]);
  const [latestOrder, setLatestOrder] = useState([])
  const [userData, setUserData] = useState({
    tokenAdmin: undefined,
    admin: undefined
  })

  useEffect(() => {
    fetchDataCatalogs();
    fetchDataProduct();
    fetchDataInstrument();
  }, [userData.tokenAdmin])

  useEffect(() => {
    async function fetchDataOrder() {
      await Axios.get('http://localhost:3000/api/admin-donhang', {
        headers: { 'x-auth-token-admin': userData.tokenAdmin }
      }).then(res => res.data)
        .then(data => {
          console.log(data.length)
          setAllOrder(data)
          setLatestOrder(data.sort((a, b) => a.createAt - b.createAt).slice(0, 3));
        }).catch(err => {
          console.log(err);
        })
    }
    fetchDataOrder();
  }, [userData.tokenAdmin])
  // Check login
  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem('auth-admin-token');
      if (!token) {
        token = "";
        localStorage.setItem('token', '')
      }
      const tokenRes = await Axios.post('http://localhost:3000/admin-login/isValidToken', null, {
        headers: { 'x-auth-token-admin': token }
      })
      if (tokenRes.data.tokenAdmin) {
        setUserData(tokenRes.data)
      } else {
        console.log("loi")
      }
    }
    checkLoggedIn()
  }, [])
  async function fetchDataCatalogs() {
    await fetch('http://localhost:3000/api/catalogs')
      .then(res => res.json())
      .then(data => {
        setAllCatalogs(data)
      }).catch(err => {
        console.log(err)
      })
  }
  async function fetchDataProduct() {
    await fetch('http://localhost:3000/api/all-product', {
      headers: { 'x-auth-token-admin': userData.tokenAdmin }
    })
      .then(res => res.json())
      .then(data => {
        setAllProducts(data)
      }).catch(err => {
        console.log(err)
      })
  }
  async function fetchDataInstrument() {
    await fetch('http://localhost:3000/api/group')
      .then(res => res.json())
      .then(data => {
        setAllInstrument(data)
      }).catch(err => {
        console.log(err)
      })
  }
  return (
    <div className="App">
      <UserProvider value={{userData}}>

        <CatalogsProvider value={{ allCatalogs, setAllCatalogs }}>
          <ProductProvider value={{ allProducts, setAllProducts }}>
            <MusicalInstrumentProvider value={{ allInstrument, setAllInstrument }}>
              <OrderListProvider value={{ allOrder, setAllOrder, latestOrder }}>

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
                      <Route exact path="/login">
                        <Login />
                      </Route>
                    </Switch>
                  </div>
                </Router>
              </OrderListProvider>

            </MusicalInstrumentProvider>
          </ProductProvider>
        </CatalogsProvider>

      </UserProvider>
    </div>
  );
}

export default App;
