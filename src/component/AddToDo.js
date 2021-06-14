import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import { connect } from "react-redux";
import moment from "moment";

import "react-datepicker/dist/react-datepicker.css";

import { ADD_TODO, EDIT_TODO } from "../redux/actionTypes";

function AddToDo(props) {
  let toDo;
  const [Title, setTitle] = useState("");
  const [TaskDate, setTaskDate] = useState(null);
  const [Status, setStatus] = useState("");

  const [editMode, setEditMode] = useState();

  const [titleError, setTitleError] = useState("");
  const [dateError, setDateError] = useState("");
  const [statusError, setStatusError] = useState("");

  useEffect(() => {
    if (props.location.params) {
      if (props.location.params.edit === "edit") {
        setEditMode(true);
        setTitle(props.location.params.toDo.title);
        setTaskDate(new Date(props.location.params.toDo.date));
        setStatus(props.location.params.toDo.status);
      }
    }
  }, [props.location.params]);

  function addToDoItem() {
    if (!Title) {
      setTitleError("Please enter Title");
    }
    if (!TaskDate) {
      setDateError("Please choose Task Date");
    }
    if (!Status) {
      setStatusError("Please choose Status");
    }

    if (!Title || !TaskDate || !Status) {
      return false;
    } else {
      if (editMode) {
        //form opened in Edit Mode
        toDo = {
          id: props.location.params.toDo.id,
          title: Title,
          date: moment(TaskDate).format("DD/MM/YYYY"),
          status: Status
        };
        props.dispatch({
          type: EDIT_TODO,
          payload: toDo
        });
      } else {
        //Add New To Do Item
        toDo = {
          id: props.tasks.length + 1,
          title: Title,
          date: moment(TaskDate).format("DD/MM/YYYY"),
          status: Status
        };
        props.dispatch({
          type: ADD_TODO,
          payload: toDo
        });
      }
    }
  }

  return (
    <div>
      <form>
        <h1>{editMode ? "Edit" : "Add"} Task</h1>
        <hr />
        <label>Title:</label>
        <input
          name="title"
          value={Title}
          onChange={e => setTitle(e.target.value.trim())}
          required
          maxLength="50"
        />
        <span className="error">{titleError}</span>

        <label>Date:</label>
        <DatePicker
          minDate={new Date()}
          dateFormat="dd/MM/yyyy"
          selected={TaskDate}
          onChange={date => setTaskDate(date)}
        />
        <span className="error">{dateError}</span>

        <label>Status:</label>
        <select
          name="status"
          value={Status}
          onChange={e => setStatus(e.target.value)}
          required
        >
          <option value="">--Select--</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
        <span className="error">{statusError}</span>

        <br />
        <input
          type="button"
          onClick={addToDoItem}
          value={editMode ? "edit" : "add"}
        />
      </form>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    tasks: state.tasks
  };
};

export default connect(mapStateToProps)(AddToDo);
