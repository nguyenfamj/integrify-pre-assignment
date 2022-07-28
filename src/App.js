import './App.css';
import { useState } from 'react';

// Import components
import AppBar from './components/AppBar/AppBar';
import InputModal from './components/InputModal/InputModal';
import ToDoList from './components/ToDoList/ToDoList';

import { useDisclosure } from '@chakra-ui/react';

function App() {
  // Control Input Modal
  const { isOpen: isModalOpen, onOpen: onModalOpen, onClose } = useDisclosure();

  // Control formState
  const [formState, setFormState] = useState({
    title: '',
    deadline: new Date().toISOString().substring(0, 16),
    status: 'Planned',
    type: 'create',
    index: null,
  });

  // Control the state of all todos
  const [todos, setTodos] = useState([
    {
      title: 'Hiiii',
      deadline: new Date().toISOString().substring(0, 16),
      status: 'Planned',
    },
    {
      title: 'New',
      deadline: new Date().toISOString().substring(0, 16),
      status: 'On-going',
    },
  ]);

  const onModalClose = () => {
    setFormState({
      title: '',
      deadline: new Date().toISOString().substring(0, 16),
      status: 'Planned',
      type: 'create',
      index: null,
    });
    onClose();
  };

  return (
    <div className='App'>
      <div className='page-wrapper'>
        <AppBar onModalOpen={onModalOpen} />
        {isModalOpen && (
          <InputModal
            isOpen={isModalOpen}
            onClose={onModalClose}
            setTodos={setTodos}
            inputToDoState={formState}
            setFormState={setFormState}
          />
        )}
        <ToDoList
          todos={todos}
          onClose={onModalClose}
          onModalOpen={onModalOpen}
          setFormState={setFormState}
        />
      </div>
    </div>
  );
}

export default App;
