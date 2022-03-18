import React, { useState } from "react";
import { Button, Form, Input } from "semantic-ui-react";

function PopupUpdateUser({ item, onSubmit }) {
  const { username, password, role, name, email, _id, onEdit, onRemove } = item;

  const [post, setPost] = useState({
    username: item.username || "",
    password: item.password || "",
    role: item.role || "",
    email: item.email || "",
    name: item.name || "",
  });

  const onChangeText = (event) => {
    console.log("onChangeName", event.target.name);
    setPost({ ...post, [event.target.name]: event.target.value });
  };

  const onClickButton = (e) => {
    e.preventDefault();
    console.log("e" + post);
    onSubmit({ ...item, ...post, id: item._id });
  };

  return (
    <React.Fragment>
      <div style={{ textAlign: "left" }} class="modal-dialog modal-login">
        <div class="modal-content">
          <div class="modal-header">
            <h1
              style={{
                textAlign: "center",
                color: "rgb(71, 71, 71)",
              }}
            >
              Update User
            </h1>
          </div>
          <div class="modal-body">
            <Form>
              <Form.Group widths="equal">
                <Form.Field
                  id="form-input-control-first-name"
                  control={Input}
                  label="UserName"
                  placeholder="UserName"
                  name="username"
                  onChange={onChangeText}
                  defaultValue={username}
                />

                <Form.Field
                  id="form-input-control-last-name"
                  control={Input}
                  label="PassWord"
                  placeholder="PassWord"
                  name="password"
                  onChange={onChangeText}
                  defaultValue={password}
                />
              </Form.Group>
              <Form.Field
                id="form-input-control-last-name"
                control={Input}
                label="Email"
                placeholder="Email "
                name="email"
                onChange={onChangeText}
                defaultValue={email}
              />

              <Form.Field
                id="form-input-control-last-name"
                control={Input}
                label="Role"
                placeholder="Role "
                name="role"
                onChange={onChangeText}
                defaultValue={role}
              />

              {/* <Form.Field
              id="form-textarea-control-opinion"
              control={TextArea}
              label="Category"
              placeholder="Category"
              name="__v"
              onChange={onChangeText}
            /> */}

              <Form.Field
                id="form-textarea-control-opinion"
                control={Input}
                label="Name"
                placeholder="Name"
                name="name"
                onChange={onChangeText}
                defaultValue={name}
              />

              <div style={{ textAlign: "right" }}>
                <Form.Field
                  id="form-button-control-public"
                  control={Button}
                  content="Update"
                  style={{ color: "white", background: "blue" }}
                  class="btn btn-secondary"
                  data-dismiss="modal"
                  onClick={onClickButton}
                />
              </div>
            </Form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default PopupUpdateUser;
