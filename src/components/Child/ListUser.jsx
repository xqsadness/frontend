import React, { useEffect, useState } from "react";
import User from "./User";
import PopupCreateUser from "./PopupCreateUser";
import { toast } from "react-toastify";
import { API_USER_REGISTER, API_USER_USERS } from "./../utils/const";
import { deleteAPI, getAPI, postAPI, putAPI } from "./../utils/api";
import axios from "axios";
import PopupUpdateUser from "./PopupUpdateUser";

function ListUser({ data }) {
  const [user, setUser] = useState([]);
  const [selectedPost, setSelectedPost] = useState(undefined);
  const [isFetchData, setIsFetchData] = useState(false);
  const [show, setShow] = useState(1);

  useEffect(() => {
    fetchAPI();
  }, [isFetchData]);
  
  const fetchAPI = async () => {
    const result = await getAPI(API_USER_USERS);
    console.log("UseEffecttttttttttttttttt");
    // check dữ dữ liệu trước khi lấy
    console.log(result);
    if (result) {
      setUser(result);
    }
  };

  const onSubmit = async (user) => {
    console.log(user);
    const response = await axios.post(API_USER_REGISTER, user);
    if (response && response.status === 200) {
      toast.success("Thêm thành công", { autoClose: 1500 });
      fetchAPI();
    }
    fetchAPI();
  };

  const onSubmitEdit = async (user) => {
    console.log("id", user);
    const response = await putAPI(`${API_USER_USERS}/${user._id}`, user);

    if (response && response.status === 200) {
      toast.success("Cập nhập thành công", { autoClose: 1500 });
      setSelectedPost(undefined);
    }
    fetchAPI();
  };

  const onEdit = async (user) => {
    setSelectedPost(user);
  };

  const onRemove = async (id) => {
    const response = await deleteAPI(`${API_USER_USERS}/${id}`);
    if (response && response.status === 200) {
      toast.success("Xóa thành công", { autoClose: 1500 });
      fetchAPI()
    }
    // setIsFetchData(!isFetchData);
   fetchAPI()
  };

  return (
    <>
      <button
        style={{ width: "120px", height: "30px", margin: "20px 0px 20px 0px" }}
        class="trigger-btnn"
        data-toggle="modal"
        href="#myModalPopup"
      >
        Create
      </button>

      {selectedPost && (
        <PopupUpdateUser item={selectedPost} onSubmit={onSubmitEdit} />
      )}

      <div style={{ textAlign: "left" }} id="myModalPopup" class="modal fade">
        <PopupCreateUser onSubmit={onSubmit} />
      </div>
      <table
        style={{ width: "90%", margin: "auto" }}
        class="table table-borderless table-shopping-cart"
      >
        <thead class="text-muted">
          <tr class="small text-uppercase">
            <th scope="col" width="120">
              Username
            </th>

            <th scope="col">Password</th>
            <th scope="col" width="120">
              Email
            </th>
            <th scope="col" width="120">
              Role
            </th>
            <th scope="col" width="120">
              Name
            </th>

            <th scope="col" class="text-right" width="200">
              {" "}
            </th>
          </tr>
        </thead>
        <tbody>
          <React.Fragment>
            {user &&
              user.map((item, index) => {
                return <User key={index} {...item} onRemove={onRemove} onEdit={onEdit} />;
              })}
          </React.Fragment>
        </tbody>
      </table>
    </>
  );
}

export default ListUser;
