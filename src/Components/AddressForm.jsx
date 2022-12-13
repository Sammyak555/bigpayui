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
  FormControl,
  FormLabel,
  Input,
  Container,
  RadioGroup,
  Radio,
  Stack,
} from '@chakra-ui/react'
import React from 'react'
import "../Styles/Address.css"


const AddressForm = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)

  return (
    <>
      <Button className='add' onClick={onOpen} variant={"unstyled"}>Add Address</Button>
      <Container>
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
          size="5xl"
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Delivery Address</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <h2>Personal Details</h2>
              <FormControl className='inpname'>
                <div className='name'>
                  <FormLabel fontWeight={"normal"}>First Name</FormLabel>
                  <Input ref={initialRef} placeholder='First name' />
                </div>
                <div className='name'>
                  <FormLabel fontWeight={"normal"}>Last Name</FormLabel>
                  <Input ref={initialRef} placeholder='Last name' />
                </div>
                <div>
                  <FormLabel fontWeight={"normal"}>Phone Number</FormLabel>
                  <Input ref={initialRef} placeholder='Phone Number' />
                </div>
              </FormControl>
              <br />
              <h2>Address Details</h2>
              <FormControl className='inpname' mt={4}>
                <div className='name'>
                  <FormLabel fontWeight={"normal"}>House No.</FormLabel>
                  <Input placeholder='House Number' />
                </div>
                <div className='address'>
                  <FormLabel fontWeight={"normal"}>Address </FormLabel>
                  <Input placeholder='Address ' />
                </div>
              </FormControl>

              <FormControl className='inpname' mt={4}>
                <div className='name'>
                  <FormLabel fontWeight={"normal"}>City Name</FormLabel>
                  <Input placeholder='City' />
                </div>
                <div >
                  <FormLabel fontWeight={"normal"}>Pin Code</FormLabel>
                  <Input placeholder='Pin' />
                </div>
              </FormControl>
              <br />
              <label>Choose Nickname for this Address</label>
              <br />

              <RadioGroup defaultValue='home'>
                <Stack spacing={5} direction='row'>
                  <Radio colorScheme='green' value='home'>
                    HOME
                  </Radio>
                  <Radio colorScheme='green' value='office'>
                    OFFICE
                  </Radio>
                  <Radio colorScheme='green' value='other'>
                    OTHER
                  </Radio>
                </Stack>
              </RadioGroup>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="green" mr={3}>
                ADD ADDRESS
              </Button>
              <Button onClick={onClose}>CANCEL</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Container>
    </>
  )
}

export default AddressForm