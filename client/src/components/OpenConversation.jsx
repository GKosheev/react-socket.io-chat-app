import {
  Button,
  Flex,
  Input,
  Box,
  Stack,
  Text,
  HStack,
} from "@chakra-ui/react";
import React from "react";
import { useCallback } from "react";
import { useRef } from "react";
import { useConversations } from "../contexts/ConversationsProvider";

const OpenConversation = () => {
  const inputRef = useRef();
  const buttonRef = useRef();

  const setRef = useCallback((node) => {
    if (node) {
      node.scrollIntoView({ smooth: true });
    }
  }, []);

  const { sendMessage, selectedConversation } = useConversations();

  function send() {
    sendMessage(
      selectedConversation.recipients.map((r) => r.id),
      inputRef.current.value
    );

    inputRef.current.value = "";
  }

  return (
    <Flex
      pos="relative"
      direction="column"
      h="100vh"
      border={"1px solid black"}
    >
      <Flex overflow="auto" direction={"column"} h="100vh">
        {selectedConversation.messages.map((message, index) => (
          <Stack
            key={index}
            justify="flex-end"
            align={message.fromMe ? "flex-end" : "flex-start"}
            direction="column"
            p={4}
          >
            <Box
              ref={
                index === selectedConversation.messages.length - 1
                  ? setRef
                  : null
              }
              bg={message.fromMe ? "blue.400" : "white"}
              textColor={message.fromMe ? "white" : "black"}
              border={message.fromMe ? "none" : "1px solid black"}
              p={2}
              borderRadius="5px"
            >
              {message.text}
            </Box>
            <Box m="0 !important" textColor={"gray.400"}>
              <Text fontSize={"sm"}>
                {message.fromMe ? "You" : message.senderName}
              </Text>
            </Box>
          </Stack>
        ))}
      </Flex>
      <HStack w="full" p={8} border="1px solid black">
        <Input
          flexBasis={"90%"}
          h="75px"
          ref={inputRef}
          onKeyDown={(e) => {
            if (e.key === "Enter") buttonRef.current.click();
          }}
        />
        <Button
          ref={buttonRef}
          flexBasis={"10%"}
          colorScheme="blue"
          h="75px"
          onClick={send}
        >
          Send
        </Button>
      </HStack>
    </Flex>
  );
};

export default OpenConversation;
