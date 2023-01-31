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
  Center,
  Input,
  Stack,
  Text,
  Box,
} from "@chakra-ui/react";
import { useRef } from "react";
import { useContacts } from "../contexts/ContactsProvider";

const NewContactsModal = () => {
  const idRef = useRef();
  const nameRef = useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { createContact } = useContacts();

  function handleSubmit() {
    createContact(idRef.current.value, nameRef.current.value);
    onClose();
  }

  return (
    <>
      <Button w="full" colorScheme={"blue"} rounded="none" onClick={onOpen}>
        New Contact
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Center>New Contact</Center>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack gap={3}>
              <Box>
                <Text mb="8px" fontWeight="bold">
                  Id
                </Text>
                <Input ref={idRef} />
              </Box>

              <Box>
                <Text mb="8px" fontWeight="bold">
                  Name
                </Text>
                <Input ref={nameRef} />
              </Box>
            </Stack>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
              Create
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default NewContactsModal;
