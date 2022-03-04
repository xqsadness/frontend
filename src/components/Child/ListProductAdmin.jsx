import React from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import ProductAdmin from "./ProductAdmin";

function ListProductAdmin({ data, onEdit, onRemove }) {
  const css = {
    backgroundColor: "#51a700",
    borderRadius: "50%",
    display: "inline-block",
    height: "10px",
    marginRight: "2px",
    width: "10px",
  };
  return (
    <div className="row">
      {data &&
        data.length &&
        data.map((item, index) => {
          return (
            <div key={index} className="col-md-3 ani">
              <ProductAdmin  {...item} onEdit={onEdit} onRemove={onRemove} />
            </div>
          );
        })}
    </div>
  );
}

export default ListProductAdmin;
