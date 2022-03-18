import React, { useEffect, useState } from "react";
import ListProduct from "./../Child/ListProduct";
import FormUpdate from "./FormUpdate";
import PopupCreate from "./PopupCreate";
import ListProductAdmin from "./../Child/ListProductAdmin";
import "./../Child/css/admin.css";
import { deleteAPI, getAPI, postAPI, putAPI } from "./../utils/api";
import { API_PRODUCT_LOCAL } from "./../utils/const";
import ProductScreen from "./../pages/ProductScreen";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { Link } from 'react-router-dom';

function Admin() {
  const [data, setData] = useState([]);
  const [selectedPost, setSelectedPost] = useState(undefined);
  const [isFetchData, setIsFetchData] = useState(false);
  const [show, setShow] = useState(false);
  useEffect(() => {
    console.log("UseEffect");
    fetchAPI();
  }, [isFetchData]);
  const fetchAPI = async () => {
    const result = await getAPI(API_PRODUCT_LOCAL);
    // check dữ dữ liệu trước khi lấy
    console.log(result);
    if (result) {
      setData(result);
    }
  };

  const onSubmit = async (data) => {
    console.log(data);
    const response = await axios.post(API_PRODUCT_LOCAL, data);
    if (response && response.status === 200) {
      toast.success("Thêm thành công", {autoClose: 1500});
    }
    fetchAPI();
  };

  const onSubmitEdit = async (data) => {
    console.log("id", data.id);
    const response = await putAPI(`${API_PRODUCT_LOCAL}/${data._id}`, data);
    console.log(data.picture);
    if (response && response.status === 200) {
      toast.success("Cập nhập thành công", {autoClose: 1500});
      setSelectedPost(undefined);
     
    }
    fetchAPI();
  };

  const onEdit = async (post) => {
    // console.log('post', post);
    setSelectedPost(post);
  };

  const onRemove = async (id) => {
    const response = await deleteAPI(`${API_PRODUCT_LOCAL}/${id}`);
    if (response && response.status === 200) {
      toast.success("Xóa thành công", {autoClose: 1500});
    }
    setIsFetchData(!isFetchData);
  };

  return (
    <React.Fragment>
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
      <section className="section-main bg padding-y">
        <div className="container">
          <div className="row">
            <aside className="col-md-3">
              <nav className="card">
                <ul className="menu-category">
                  <li>
                    <a
                      class="trigger-btnn"
                      data-toggle="modal"
                      href="#myModalPopup"
                    >
                      Create Product
                    </a>
                  </li>
                  <li>
                    <Link to={'/user'}
                    >
                      User
                    </Link>
                  </li>
                  <div
                    style={{ textAlign: "left" }}
                    id="myModalPopup"
                    class="modal fade"
                  >
                    <PopupCreate onSubmit={onSubmit} />
                  </div>
                </ul>
              </nav>
            </aside>
            <div className="col-md-9">
              <article
                style={{
                  border: "1px solid #ddd",
                  padding: "30px",
                  textAlign: "left",
                }}
                className="banner-wrap"
              >
                {selectedPost && (
                  <FormUpdate item={selectedPost} onSubmit={onSubmitEdit} />
                )}
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="section-name padding-y-sm">
        <div className="container">
          <header className="section-heading">
            <a href="#" className="btn btn-outline-primary float-right">
              See all
            </a>
            <h3 className="section-title">Popular products</h3>
          </header>
          {console.log("data", data)}

          <ListProductAdmin onRemove={onRemove} data={data} onEdit={onEdit} />
        </div>
      </section>

      <section className="section-name padding-y bg">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h3>Download app demo text</h3>
              <p>Get an amazing app to make Your life easy</p>
            </div>
            <div className="col-md-6 text-md-right">
              <a href="#">
                <img src="assets/images/misc/appstore.png" height="40" />
              </a>
              <a href="#">
                <img src="assets/images/misc/appstore.png" height="40" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Admin;
