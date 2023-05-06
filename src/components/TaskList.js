// components/TaskList.js
import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';

const TaskList = ({ tasks, onTaskToggle }) => {
  return (
    <div>
      {tasks.length > 0 && <h4 className="mt-4">Pendentes</h4>}
      <ListGroup className="mt-2">
        {tasks.map((task, index) => (
          <ListGroup.Item key={index}>
            <Form>
              <Form.Check
                type="switch"
                id={`task-switch-${index}`}
                label={task}
                onChange={() => onTaskToggle(index, false)}
              />
            </Form>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default TaskList;
