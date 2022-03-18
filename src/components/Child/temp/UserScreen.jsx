import React, { useEffect, useState } from "react";
import ListUser from "./../ListUser";
import { getAPI } from "./../../utils/api";
import { API_USER_USERS } from "../../utils/const";

function UserScreen() {
  const [data, setData] = useState([]);
  const [user, setUser] = useState([]);

  const [selectedPost, setSelectedPost] = useState(undefined);
  const [isFetchData, setIsFetchData] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    console.log("UseEffect");

    fetchAPIUser();
  }, [isFetchData]);

  const fetchAPIUser = async () => {
    const result = await getAPI(API_USER_USERS);
    //kiem tra du lieu truoc khi lay
    if (result) {
      setUser(result);
      console.log(result);
    }
  };
  return (
    <React.Fragment>
      <ListUser data={user} />
    </React.Fragment>
  );
}

export default UserScreen;
