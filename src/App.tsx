import { Container, Flex } from '@chakra-ui/react'
import { type ReactElement } from 'react'
import Navbar from '~/components/Navbar/Navbar'
import EditorLayout from '~/components/EditorLayout/EditorLayout'

const App = (): ReactElement => {
  return (
    <Container px={0} maxW="container.xlg" h="100vh">
      <Flex h="100%" direction="column">
        <Navbar />
        <EditorLayout />
      </Flex>
    </Container>
  )
}

export default App
