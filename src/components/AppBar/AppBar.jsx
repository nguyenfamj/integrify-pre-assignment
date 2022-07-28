import { Heading, Flex, Button } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';

const AppBar = ({ onModalOpen }) => {
  return (
    <>
      <Flex
        as='nav'
        align='center'
        justify='space-between'
        position='sticky'
        width='100vw'
        wrap='wrap'
        padding={3}
        bg='teal.400'
        color='white'
      >
        <Flex align='center' ml={5}>
          <Heading as='h1' size='lg' fontWeight={900} letterSpacing={'wide'}>
            REACT TO-DO LIST
          </Heading>
        </Flex>
        <Button
          onClick={onModalOpen}
          mr={5}
          leftIcon={<AddIcon color='white' />}
          colorScheme='teal'
          textColor='white'
        >
          ADD TO-DO
        </Button>
      </Flex>
    </>
  );
};

export default AppBar;
