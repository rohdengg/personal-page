import Head from 'next/head'
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  Button,
} from '@chakra-ui/react'


import Container from '@/components/Container'

export default function Contact() {
  const { colorMode } = useColorMode()
  const colorSecondary = {
    light: 'gray.700',
    dark: 'gray.400'
  }
  return (
    <>
      <Container>
        <Head>Contato - Gabriel Rohden</Head>
        <Stack
          as="main"
          spacing={8}
          justifyContent="center"
          alignItems="flex-start"
          m="0 auto 4rem auto"
          maxWidth="700px"
          px={2}
        >
          <Flex
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            maxWidth="700px"
          >
            <Heading mb={2}>Entre em contato comigo</Heading>
            <Text color={colorSecondary}>lorem ipsom, lore ipsom, lore lore...</Text>
          </Flex>
        </Stack>
      </Container>
    </>
  )
}
