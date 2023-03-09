import {Box, VStack,Stack,Heading, HStack, Button, Input,Text} from '@chakra-ui/react'
import {AiOutlineSend} from "react-icons/ai"
import React from 'react'

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p={'16'} color={'white'}>
        <Stack direction={['column', 'row']}>
        <VStack alignItems={'stretch'} w='full' px={'4'}  >
        <Heading size={'md'} textTransform={'uppercase'} textAlign={['center', 'left']}>
            Subscribe To Get UpDates
        </Heading>
        <HStack borderBottom={'2px solid white'} py='2'>
            <Input placeholder='Enter Email Here...' border={'none'} borderRadius={'none'} outline={'none'} focusBorderColor={'none'}/>
            <Button p={0} colorScheme={'purple'} variant={'ghost'} borderRadius={'0, 20px, 0, 20px' } >
                <AiOutlineSend size={20}/>
            </Button>
        </HStack>
        </VStack>
        <VStack 
        w={'full'}
         borderLeft={['none', '1px solid white']} 
         borderRight={['none', '1px solid white']}>
            <Heading textTransform={'uppercase'} textAlign={'center'}>VIDEO HUB</Heading>
            <Text>All Rights recevied</Text>
        </VStack>
        <VStack 
        w={'full'}>
            <Heading size={'md'} textTransform={'uppercase'}>
                Social Media
            </Heading>
            <Button variant={'link'} colorScheme={'white'}>
                <a target={'_blank'} href="https://github.com/AtulShinde9552">GitHub</a>
            </Button>
            <Button variant={'link'} colorScheme={'white'}>
                <a target={'_blank'} href="https://instagram.com/atulshinde129">Instagram</a>
            </Button>
            <Button variant={'link'} colorScheme={'white'}>
                <a target={'_blank'} href="https://linkedin.com/in/atul-shinde-5a9549204?trk=contact-info">Linkedin</a>
            </Button>
        </VStack>
        </Stack>
    </Box>
  )
}

export default Footer