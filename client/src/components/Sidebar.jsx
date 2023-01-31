import {
  Box,
  Flex,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import Contacts from "./Contacts";
import Conversations from "./Conversations";
import NewContactsModal from "./NewContactsModal";
import NewConversationModal from "./NewConversationModal";

const Sidebar = ({ id }) => {
  const [isActive, setIsActive] = useState(true);
  return (
    <Box flexBasis={"30%"} pos="relative">
      <Flex direction="column">
        <Tabs
          variant="enclosed"
          colorScheme={"blue"}
          h="100vh"
          borderWidth="1px"
          borderColor="gray.100"
          borderTopRadius="9px"
          isFitted
        >
          <TabList>
            <Tab onClick={() => setIsActive(true)}>Conversations</Tab>
            <Tab onClick={() => setIsActive(false)}>Contacts</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Conversations />
            </TabPanel>
            <TabPanel>
              <Contacts />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
      <Flex position="absolute" direction="column" bottom="0" w="full">
        <Box p={2}>Your Id: {id}</Box>
        {isActive ? <NewConversationModal /> : <NewContactsModal />}
      </Flex>
    </Box>
  );
};

export default Sidebar;
