import React, { useState } from "react";
import { Form, Input, TextArea, Button } from "semantic-ui-react";

function PopupCreate({ item, onSubmit }) {
  const [data, setData] = useState(
    item || {
      images: "",
      name: "",
      price: "",
      __v: "",
    }
  );

  const [show, setshow] = useState(true);

  const showPopup = () => {
    setshow(true);
  };

  const onChangeText = (event) => {
    console.log("onChangeText", event);
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const onClickButton = (event) => {
    onSubmit(data);
    setshow(false);
  };

  return (
    <React.Fragment>
      <div class="modal-dialog modal-login">
        <div class="modal-content">
          <div class="modal-header">
            <h1
              style={{
                textAlign: "center",
                color: "rgb(71, 71, 71)",
              }}
            >
              Create Product
            </h1>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-hidden="true"
            >
              &times;
            </button>
          </div>
          <div class="modal-body">
            <Form>
              <Form.Group widths="equal">
                <Form.Field
                  id="form-input-control-first-name"
                  control={Input}
                  label="Name"
                  placeholder="Name"
                  name="name"
                  onChange={onChangeText}
                  defaultValue={""}
                />

                <Form.Field
                  id="form-input-control-last-name"
                  control={Input}
                  label="Images"
                  placeholder="Images"
                  name="images"
                  onChange={onChangeText}
                />
              </Form.Group>
              <Form.Field
                id="form-input-control-last-name"
                control={Input}
                label="Price"
                placeholder="Price $"
                name="price"
                onChange={onChangeText}
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
                control={TextArea}
                label="Descriptions"
                placeholder="Descriptions"
                name="descriptions"
                onChange={onChangeText}
              />

              <div style={{ textAlign: "right" }}>
                <Form.Field
                  id="form-button-control-public"
                  control={Button}
                  content="Create"
                  style={{ color: "white", background: "blue" }}
                  onClick={onClickButton}
                  class="btn btn-secondary"
                  data-dismiss="modal"
                />
              </div>
            </Form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default PopupCreate;
