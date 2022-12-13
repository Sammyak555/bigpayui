import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Stack, Text } from '@chakra-ui/react'
import React from 'react'

const AddressCard = ({id,fname,lname,address,pin,phone,city,house,cardclick}) => {
    // console.log(id)
  return (
    <div>
        <Card maxW='sm'>
  <CardBody>
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Default Address : Home</Heading>
      <Text color='grey' >
       
       {fname} {lname},
        {house}, {address},
        {city}, {pin}
       Ph: {phone}
      
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
   
      <Button variant='solid' width='100%' onClick={()=>cardclick(id)} backgroundColor='rgb(132, 194, 37)'>
        DELIVER NOW
      </Button>
      
  </CardFooter>
</Card>

    </div>
  )
}

export default AddressCard