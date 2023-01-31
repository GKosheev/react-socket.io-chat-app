import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Checkbox,
  Center,
  Stack,
} from "@chakra-ui/react";
import { useState } from "react";
import { useContacts } from "../contexts/ContactsProvider";
import { useConversations } from "../contexts/ConversationsProvider";

const NewConversationModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [selectedContactIds, setSelectedContactIds] = useState([]);
  const { createConversation } = useConversations();
  const { contacts } = useContacts();

  function handleCheckboxChange(contactId) {
    setSelectedContactIds((prevSelectedContactIds) => {
      if (prevSelectedContactIds.includes(contactId)) {
        return prevSelectedContactIds.filter((prevId) => {
          return contactId !== prevId;
        });
      } else {
        return [...prevSelectedContactIds, contactId];
      }
    });
  }

  function handleConversationCreate(e) {
    e.preventDefault();
    if (selectedContactIds.length) {
      createConversation(selectedContactIds);
      setSelectedContactIds([]);
    }
    onClose();
  }

  return (
    <>
      <Button w="full" colorScheme={"blue"} rounded="none" onClick={onOpen}>
        New Conversation
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Center>New Conversation</Center>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack p={4} spacing={5} direction="column">
              {contacts.map((contact) => (
                <Checkbox
                  key={contact.id}
                  onChange={() => {
                    handleCheckboxChange(contact.id);
                  }}
                >
                  {contact.name}
                </Checkbox>
              ))}
            </Stack>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={handleConversationCreate}
            >
              Create
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default NewConversationModal;
