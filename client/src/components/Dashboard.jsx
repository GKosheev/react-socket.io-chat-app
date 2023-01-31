import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { useConversations } from "../contexts/ConversationsProvider";
import OpenConversation from "./OpenConversation";
import Sidebar from "./Sidebar";

const Dashboard = ({ id }) => {
  const { selectedConversation } = useConversations();
  return (
    <Box>
      <Flex justify={"space-between"} h="100vh">
        <Sidebar id={id} />
        <Box flexBasis={"70%"}>
          {selectedConversation && <OpenConversation />}
        </Box>
      </Flex>
    </Box>
  );
};

export default Dashboard;
