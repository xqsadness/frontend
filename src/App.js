import "./App.css";
import React, { useEffect, useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./components/Child/Cart";
import Container from "./components/Child/Container";
import Footer from "./components/Child/Footer";
import Header from "./components/Child/Header";
import NotFound from "./components/Child/NotFound";
import Admin from "./components/adminPage/Admin";
import DetailProduct from "./components/Child/DetailProduct";
import ListProduct from "./components/Child/ListProduct";
import { getAPI, searchAPI } from "./components/utils/api";
import { API_PRODUCT_LOCAL, API_USER_USERS } from "./components/utils/const";
import axios from "axios";
import Loginn from './components/Child/temp/Loginn';
import Login from './components/Child/Login';
import { ToastContainer } from "react-toastify";
import User from './components/Child/User';
import ListUser from './components/Child/ListUser';
import UserScreen from './components/Child/temp/UserScreen';

function App() {
  const [data, setData] = useState([]);
  const [user, setUser] = useState([]);

  const [selectedPost, setSelectedPost] = useState(undefined);
  const [isFetchData, setIsFetchData] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    console.log("UseEffect");
    fetchAPI();
    fetchAPIUser();
  }, [isFetchData]);

  const fetchAPI = async () => {
    const result = await getAPI(API_PRODUCT_LOCAL);
    //kiem tra du lieu truoc khi lay
    if (result) {
      setData(result);
      console.log(result);
    }
  };

  const fetchAPIUser = async () => {
    const result = await getAPI(API_USER_USERS);
    //kiem tra du lieu truoc khi lay
    if (result) {
      setUser(result);
      console.log(result);
    }
  };

  const onSearch = async (name) => {
    const data = await axios.post(`http://localhost:4001/api/products/search`, {
      name,
    });
    setData(data.data);
  };

  return (
    <div className="App">
       <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Router>
        <Header onSearch={onSearch} />
        <Routes>
          <Route path="/cart" element={<Cart />} />
          <Route path="/" element={ <ListProduct  data={data}  />}  />
          <Route path="/*" element={<NotFound />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/user" element={<UserScreen />} />
          
          <Route path="/detail/:id" element={<DetailProduct />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
export default App;
