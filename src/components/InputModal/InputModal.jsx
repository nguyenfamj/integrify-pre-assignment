import { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Select,
  Input,
  Button,
} from '@chakra-ui/react';

const InputModal = ({ isOpen, onClose, setTodos, inputToDoState, setFormState }) => {
  const [todo, setTodo] = useState({
    title: inputToDoState.title,
    deadline: inputToDoState.deadline,
    status: inputToDoState.status,
  });

  console.log(inputToDoState);

  const statusOptions = [
    { id: 1, value: 'Planned', title: 'Planned' },
    { id: 2, value: 'On-going', title: 'On-going' },
    { id: 3, value: 'Done', title: 'Done' },
  ];

  //   Handle add todo
  const handleSubmit = () => {
    if (inputToDoState.type === 'create') {
      if (window.confirm('Are you sure you want to add this to-do?')) {
        setTodos((prevState) => [...prevState, todo]);
        onClose();
      }
    }
    if (inputToDoState.type === 'update') {
      if (window.confirm('Are you sure you want to update this to-do?')) {
        setTodos((prevState) => {
          const updatedTodo = [...prevState];
          updatedTodo[inputToDoState.index] = todo;
          return updatedTodo;
        });

        onClose();
      }
    }
    // Revert formState initially
    setFormState({
      title: '',
      deadline: new Date().toISOString().substring(0, 16),
      status: 'Planned',
      type: 'create',
      index: null,
    });
  };

  //   handle onChange
  const handleInputChange = (event) => {
    setTodo({ ...todo, [event.target.id]: event.target.value });
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{inputToDoState.type === 'create' ? 'Add new' : 'Update'} to-do</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel htmlFor='title'>Title</FormLabel>
              <Input
                id='title'
                type='text'
                placeholder='React'
                value={todo.title}
                onChange={handleInputChange}
              />
              <FormLabel htmlFor='deadline'>Deadline</FormLabel>
              <Input
                id='deadline'
                type='datetime-local'
                value={todo.deadline}
                onChange={handleInputChange}
              />
              <FormLabel htmlFor='status'>Status</FormLabel>
              <Select id='status' value={todo.status} onChange={handleInputChange}>
                {statusOptions.map((status) => (
                  <option key={status.id} value={status.value}>
                    {status.title}
                  </option>
                ))}
              </Select>
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' type='button' mr={3} onClick={handleSubmit}>
              {inputToDoState.type === 'create' ? 'Add' : 'Update'}
            </Button>
            <Button colorScheme='gray' type='button' variant='outline' onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default InputModal;
