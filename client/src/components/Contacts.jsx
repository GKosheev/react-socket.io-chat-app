import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { useContacts } from "../contexts/ContactsProvider";

const Contacts = () => {
  const { contacts } = useContacts();

  return (
    <Flex direction={"column"} justify="center" textAlign={"center"} gap={2}>
      {contacts.map((contact) => (
        <Box
          p={3}
          borderBottomWidth="1px"
          borderBottomColor="gray.100"
          key={contact.id}
        >
          {contact.name}
        </Box>
      ))}
    </Flex>
  );
};

export default Contacts;
