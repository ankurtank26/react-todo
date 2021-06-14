import React from "react";
import { connect } from "react-redux";
import ToDoItem from "./ToDoItem";

function ToDo(props) {
  let TaskList = props.tasks.map(task => (
    <ToDoItem
      key={task.id}
      id={task.id}
      title={task.title}
      date={task.date}
      status={task.status}
    />
  ));

  return <div>{props.tasks.length !== 0 ? TaskList : <h3>No Tasks!!</h3>}</div>;
}

const mapStateToProps = state => {
  return {
    tasks: state.tasks
  };
};

export default connect(mapStateToProps)(ToDo);
