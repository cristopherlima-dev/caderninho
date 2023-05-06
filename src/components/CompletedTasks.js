// components/CompletedTasks.js
import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';

const CompletedTasks = ({ tasks, onTaskToggle }) => {
  return (
    <div>
      {tasks.length > 0 && <h4 className="mt-4">Concluídas</h4>}
      <ListGroup className="mt-2">
        {tasks.map((task, index) => (
          <ListGroup.Item key={index}>
            <Form>
              <Form.Check
                type="switch"
                id={`completed-task-switch-${index}`}
                label={task}
                checked
                onChange={() => onTaskToggle(index, true)}
              />
            </Form>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default CompletedTasks;
