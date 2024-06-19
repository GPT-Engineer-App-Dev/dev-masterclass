import { Container, Text, VStack, Box, Heading, Button, Flex, Image } from "@chakra-ui/react";
import { FaCode, FaLaptopCode, FaChalkboardTeacher } from "react-icons/fa";
import CodeEditor from '../components/CodeEditor';

const Index = () => {
  return (
    <Container centerContent maxW="container.xl" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" p={4}>
      <VStack spacing={8} width="100%">
        <Heading as="h1" size="2xl" textAlign="center">
          Welcome to CodeMaster
        </Heading>
        <Text fontSize="xl" textAlign="center">
          Your ultimate platform to learn coding from scratch to advanced levels.
        </Text>
        <Flex justifyContent="center" wrap="wrap" spacing={8} width="100%">
          <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md" m={2} maxW="sm">
            <FaCode size="3em" />
            <Heading fontSize="xl" mt={4}>Learn to Code</Heading>
            <Text mt={4}>Start with the basics and build your way up to advanced coding skills.</Text>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md" m={2} maxW="sm">
            <FaLaptopCode size="3em" />
            <Heading fontSize="xl" mt={4}>Practice Projects</Heading>
            <Text mt={4}>Work on real-world projects to apply what you've learned.</Text>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md" m={2} maxW="sm">
            <FaChalkboardTeacher size="3em" />
            <Heading fontSize="xl" mt={4}>Expert Instructors</Heading>
            <Text mt={4}>Learn from industry experts with years of experience.</Text>
          </Box>
        </Flex>
        <CodeEditor />
        <Button colorScheme="teal" size="lg" mt={8}>
          Get Started
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;