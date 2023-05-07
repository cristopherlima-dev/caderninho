// Adicionar.js
import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import Modal from 'react-bootstrap/Modal';
import TaskList from "./TaskList";
import CompletedTasks from "./CompletedTasks";
import ThemeSwitcher from './ThemeSwitcher';
import { v4 as uuidv4 } from 'uuid';


function Adicionar() {
  const [inputValue, setInputValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [showResetModal, setShowResetModal] = useState(false);

  const handleSubmit = () => {
    if (inputValue.trim() === '') {
      setErrorMessage('Você não pode criar uma tarefa em branco');
    } else {
      setErrorMessage('');
      //setTasks([...tasks, inputValue]);
      setTasks([...tasks, { id: uuidv4(), text: inputValue }]);
      setInputValue('');
    }
  };

  const handleTaskToggle = (taskId, isCompleted) => {
  if (isCompleted) {
    const taskToMove = completedTasks.find(task => task.id === taskId);
    setTasks([...tasks, taskToMove]);
    setCompletedTasks(completedTasks.filter(task => task.id !== taskId));
  } else {
    const taskToMove = tasks.find(task => task.id === taskId);
    setCompletedTasks([...completedTasks, taskToMove]);
    setTasks(tasks.filter(task => task.id !== taskId));
  }
};

  const handleReset = () => {
    setShowResetModal(true);
  };

  const handleResetConfirm = () => {
    setTasks([]);
    setCompletedTasks([]);
    setShowResetModal(false);
  };

  const handleResetCancel = () => {
    setShowResetModal(false);
  };

  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <Container className="full-height"> 
      <Row className="align-items-center mb-3">
        <Col xs="auto">
          <ThemeSwitcher darkTheme={darkTheme} onThemeToggle={setDarkTheme} />
        </Col>
      </Row>      
      {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
      <Row className="align-items-center">
        <Col xs={12} md={6}>
          <Form.Control
            className="me-auto mb-3 mb-md-0"
            placeholder="Digite sua tarefa aqui..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </Col>
        <Col xs="auto">
          <Stack direction="horizontal" gap={3}>
            <Button variant="secondary" onClick={handleSubmit}>
              Submit
            </Button>
            <div className="vr" />
            <Button variant="outline-danger" onClick={handleReset}>
              Reset
            </Button>
          </Stack>
        </Col>
      </Row>
      <Col xs={12} md={6}>
        <TaskList tasks={tasks} onTaskToggle={handleTaskToggle} />
      </Col>
      <Col xs={12} md={6}>
        <CompletedTasks tasks={completedTasks} onTaskToggle={handleTaskToggle} />
      </Col>
      <Modal 
        show={showResetModal} 
        onHide={handleResetCancel}
        className={darkTheme ? "dark-theme-modal" : ""}>
        <Modal.Header closeButton>
          <Modal.Title>Descartar lista</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Deseja descartar essa lista?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleResetCancel}>
            Não
          </Button>
          <Button variant="danger" onClick={handleResetConfirm}>
            Sim
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default Adicionar;
