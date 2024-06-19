import { useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Heading, Text, Button, Alert, AlertIcon } from "@chakra-ui/react";

const CourseDetails = () => {
  const { courseId } = useParams();
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [error, setError] = useState(null);

  const handleEnroll = () => {
    // Simulate an API call to enroll in the course
    try {
      // Assuming the enrollment is successful
      setIsEnrolled(true);
    } catch (err) {
      setError("Failed to enroll in the course. Please try again.");
    }
  };

  return (
    <Container centerContent maxW="container.md" p={4}>
      <Heading as="h2" size="xl" mb={4}>
        Course Details for {courseId}
      </Heading>
      <Text fontSize="lg" mb={4}>
        Detailed information about the course goes here.
      </Text>
      {isEnrolled ? (
        <Alert status="success" mb={4}>
          <AlertIcon />
          You have successfully enrolled in the course!
        </Alert>
      ) : (
        <Button colorScheme="teal" size="lg" onClick={handleEnroll}>
          Enroll
        </Button>
      )}
      {error && (
        <Alert status="error" mt={4}>
          <AlertIcon />
          {error}
        </Alert>
      )}
    </Container>
  );
};

export default CourseDetails;