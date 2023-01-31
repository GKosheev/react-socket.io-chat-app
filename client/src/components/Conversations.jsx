import { Box, Button, Flex, Stack } from "@chakra-ui/react";
import React from "react";
import { useConversations } from "../contexts/ConversationsProvider";

const Conversations = () => {
  const { conversations, selectConversationIndex } = useConversations();
  return (
    <Flex direction="column" gap={1}>
      {conversations.map((conversation, index) => (
        <Stack key={index}>
          <Button
            colorScheme={"blue"}
            variant="outline"
            onClick={() => {
              selectConversationIndex(index);
            }}
            isActive={conversation.selected}
            _active={{ bg: "blue.100" }}
          >
            {conversation.recipients.map((r) => r.name).join(", ")}
          </Button>
        </Stack>
      ))}
    </Flex>
  );
};

export default Conversations;
