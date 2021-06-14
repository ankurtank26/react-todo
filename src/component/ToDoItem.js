import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { DELETE_TODO } from "../redux/actionTypes";
import { BsFillTrashFill, BsPencil } from "react-icons/bs";

export class ToDoItem extends Component {
  deleteToDo = id => {
    if (window.confirm("Are you sure to Delete the item?")) {
      this.props.dispatch({
        type: DELETE_TODO,
        payload: id
      });
    }
  };

  render() {
    return (
      <div className="grow">
        <div
          style={{
            background:
              this.props.status === "active"
                ? "rgba(0, 255, 0, 0.1)"
                : "rgba(255, 0, 0, 0.1)",
            width: "90%",
            maxWidth: "80%",
            margin: "0 auto",
            marginTop: "10px",
            marginBottom: "10px",
            color: "white",
            height: "25px",
            padding: "10px"
          }}
        >
          <span className="title">{this.props.title}</span>
          <span className="date">{this.props.date}</span>
          <span
            onClick={() => this.deleteToDo(this.props.id)}
            style={{ float: "right", padding: "5px" }}
          >
            <BsFillTrashFill />
          </span>
          <span
            style={{
              float: "right",
              padding: "5px"
            }}
          >
            <Link
              to={{
                pathname: "/add",
                search: "?edit=" + this.props.id,
                params: {
                  edit: "edit",
                  toDo: {
                    id: this.props.id,
                    title: this.props.title,
                    date: this.props.date,
                    status: this.props.status
                  }
                }
              }}
              style={{ textDecoration: "none", color: "white" }}
            >
              <BsPencil />
            </Link>
          </span>
        </div>
      </div>
    );
  }
}

export default connect()(ToDoItem);
