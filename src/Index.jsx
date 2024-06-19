import React from 'react';
import { ChakraProvider, Box, Heading, Text, Button } from '@chakra-ui/react';

const Index = () => {
  return (
    <ChakraProvider>
      <Box textAlign="center" py={10} px={6}>
        <Heading as="h1" size="2xl" mb={4}>
          Welcome to the Bare-Bones App
        </Heading>
        <Text fontSize="lg" mb={6}>
          This is a minimal web application built with React and Chakra UI.
        </Text>
        <Button colorScheme="teal" size="lg">
          Get Started
        </Button>
      </Box>
    </ChakraProvider>
  );
};

export default Index;