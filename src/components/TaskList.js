// components/TaskList.js
import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';

const TaskList = ({ tasks, onTaskToggle }) => {
  return (
    <>
      {tasks.length > 0 && <h4 className="mt-4">Pendentes</h4>}
      <ListGroup className="mt-2">
        {tasks
        .filter(task => task)
        .map((task, index) => (
          <ListGroup.Item key={task.id}>
            <Form>
              <Form.Check
                type="switch"
                id={`task-switch-${task.id}`}
                label={task.text}
                onChange={() => onTaskToggle(task.id, false)}
              />
            </Form>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
};

export default TaskList;
