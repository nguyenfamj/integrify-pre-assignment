import React from 'react';
import { Flex, Box, Text } from '@chakra-ui/react';
import { format } from 'date-fns';

const ToDoList = ({ todos, onModalOpen, setFormState }) => {
  const handleToDoClick = ({ todo, index }) => {
    setFormState({ ...todo, type: 'update', index });
    onModalOpen();
  };
  return (
    <>
      <Flex width='100vw' height='100vh' justifyContent='center'>
        <Box>
          {todos.map((todo, index) => (
            <Box
              key={index}
              marginTop={4}
              width='400px'
              minHeight='50px'
              borderTop='4px'
              padding={3}
              bgColor='gray.100'
              borderTopColor={
                todo.status === 'Planned'
                  ? 'orange.200'
                  : todo.status === 'On-going'
                  ? 'blue.400'
                  : todo.status === 'Done'
                  ? 'green.300'
                  : 'black'
              }
              onClick={() => handleToDoClick({ todo, index })}
            >
              <Text
                fontSize='lg'
                textColor={
                  todo.status === 'Planned'
                    ? 'orange.300'
                    : todo.status === 'On-going'
                    ? 'blue.500'
                    : todo.status === 'Done'
                    ? 'green.400'
                    : 'black'
                }
                fontWeight={600}
              >
                {todo.status}
              </Text>
              <Text fontSize='lg' fontWeight={500}>
                Title: {todo.title}
              </Text>
              <Text as='i' fontSize='lg' fontWeight={500}>
                Deadline: {format(new Date(todo.deadline), 'PPpp')}
              </Text>
            </Box>
          ))}
        </Box>
      </Flex>
    </>
  );
};

export default ToDoList;
