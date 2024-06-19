import React, { useState } from 'react';
import Editor from '@monaco-editor/react';
import { Box, Button, VStack, useToast } from '@chakra-ui/react';

const CodeEditor = () => {
  const [code, setCode] = useState('// Write your code here');
  const toast = useToast();

  const handleEditorChange = (value) => {
    setCode(value);
  };

  const handleRunCode = () => {
    try {
      // eslint-disable-next-line no-eval
      eval(code);
      toast({
        title: 'Code executed successfully.',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: 'Error executing code.',
        description: error.message,
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <VStack spacing={4} width="100%">
      <Box width="100%" height="400px">
        <Editor
          height="100%"
          defaultLanguage="javascript"
          defaultValue="// Write your code here"
          onChange={handleEditorChange}
        />
      </Box>
      <Button colorScheme="teal" onClick={handleRunCode}>
        Run Code
      </Button>
    </VStack>
  );
};

export default CodeEditor;