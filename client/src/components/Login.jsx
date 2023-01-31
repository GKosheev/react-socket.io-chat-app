import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { v4 as uuidV4 } from "uuid";

const Login = ({ onIdSubmit }) => {
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const createNewId = () => {
    onIdSubmit(uuidV4());
  };

  return (
    <Box>
      <Flex
        align="center"
        justify="center"
        direction="column"
        gap={3}
        h="100vh"
      >
        <FormControl display="flex" flexDirection="column" alignItems="center">
          <FormLabel>Enter your Id</FormLabel>
          <Input type="email" value={input} onChange={handleInputChange} />
        </FormControl>
        <Flex gap={3}>
          <Button colorScheme="blue" variant={"outline"}>
            Login
          </Button>
          <Button colorScheme="blue" onClick={createNewId}>
            Create a new Id
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Login;
