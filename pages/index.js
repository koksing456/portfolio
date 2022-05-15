import {
  Heading,
  Box,
  Container,
  Image,
  useColorModeValue
} from '@chakra-ui/react'
import Logo from '../components/logo'
import Section from '../components/section'

const Page = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        bg={useColorModeValue('whileAlpha.500', 'whileAlpha.200')}
        p={3}
        mb={6}
        align="center"
      >
        Hello, this is my website.
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="pageTitle">
            Kok Sing
          </Heading>
          <p>Software Engineer | Web3 | Blockchain</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="images/profile-pic.jpg"
            alt="Profile Picture"
          />
        </Box>
      </Box>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <p>Paragraph</p>
      </Section>
    </Container>
  )
}

export default Page
