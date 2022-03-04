import React, { useState } from "react";
import { Form, Input, TextArea, Button } from "semantic-ui-react";

function FormUpdate({ item, onSubmit }) {
  const [post, setPost] = useState({
    name: item.name || "",
    price: item.price || "",
    __v: item.__v || "",
    images: item.images || "",
    descriptions: item.descriptions || "",
  });

  const onChangeText = (event) => {
    console.log("onChangeName", event.target.name);
    setPost({ ...post, [event.target.name]: event.target.value });
  };

  const onClickButton = (e) => {
    console.log("e" + post);
    onSubmit({ ...item, ...post, id: item._id });
  };

  const { name, price, __v, images, id ,descriptions} = item;
  return (
    <Form>
      <h1
        style={{
          textAlign: "center",
          marginBottom: 30,
          color: "rgb(71, 71, 71)",
        }}
      >
        Update Product
      </h1>
      <Form.Group widths="equal">
        <Form.Field
          id="form-input-control-first-name"
          control={Input}
          label="Name"
          placeholder="Name"
          name="name"
          onChange={onChangeText}
          defaultValue={name}
        />
        <Form.Field
          id="form-input-control-last-name"
          control={Input}
          label="Price"
          placeholder="Price $"
          name="price"
          onChange={onChangeText}
          defaultValue={price}
        />
      </Form.Group>
      <Form.Field
        id="form-input-control-last-name"
        control={Input}
        label="images"
        placeholder="images"
        name="images"
        onChange={onChangeText}
        defaultValue={images}
      />
      {/* <Form.Field
        id="form-textarea-control-opinion"
        control={TextArea}
        label="__v"
        placeholder="__v"
        name="__v"
        onChange={onChangeText}
        defaultValue={__v}
      /> */}

      <Form.Field
        id="form-textarea-control-opinion"
        control={TextArea}
        label="Descriptions"
        placeholder="Descriptions"
        name="descriptions"
        onChange={onChangeText}
        defaultValue={descriptions}
      />

      <div style={{ textAlign: "right" }}>
        <Form.Field
          id="form-button-control-public"
          control={Button}
          content="Update"
          style={{ color: "white", background: "blue" }}
          onClick={onClickButton}
        />
      </div>
    </Form>
  );
}

export default FormUpdate;
