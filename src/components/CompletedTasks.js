// components/CompletedTasks.js
import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';

const CompletedTasks = ({ tasks, onTaskToggle }) => {
  return (
    <>
      {tasks.length > 0 && <h4 className="mt-4">Concluídas</h4>}
      <ListGroup className="mt-2">
        {tasks
        .filter(task => task)
        .map((task, index) => (
          <ListGroup.Item key={task.id}>
            <Form>
              <Form.Check
                type="switch"
                id={`completed-task-switch-${task.id}`}
                label={task.text}
                checked
                onChange={() => onTaskToggle(task.id, true)}
              />
            </Form>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
};

export default CompletedTasks;
