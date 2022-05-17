import NextLink from 'next/link'
import {
  Heading,
  Box,
  Container,
  Image,
  useColorModeValue,
  Link,
  Button
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Logo from '../components/logo'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import { ChevronRightIcon } from '@chakra-ui/icons'

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whileAlpha.500', 'whileAlpha.200')}
          p={3}
          mb={6}
          align="center"
        >
          Hello yo.
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
          <Paragraph>
            Kok Sing is a full stack developer. He loves coding. asdasd sghsdad
            asdaksdj sdfsdf asds fdfs asjsa asdna as das d asd sad asdsd sdsds
            dsdsdsdsdsd sdsdsd sdsd ss dsd sd. he working a product called {''}
            <NextLink href="https://github.com/koksing456?tab=repositories">
              <Link>github</Link>
            </NextLink>
            .
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My Portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>2000</BioYear>
            Born in Perak, Malaysia 👶
          </BioSection>
          <BioSection>
            <BioYear>2020</BioYear>
            Completed Diploma in Computer Science 💻
          </BioSection>
          <BioSection>
            <BioYear>2020</BioYear>
            Workded as Softwar Engineer Intern at Agtive Sdn Bhd 👨‍💻
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            Completed Degree in Software Engineering at Tunku Abdul Rahman
            University College (TARUC) 🖥
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            Working as Softwar Engineer at Razer Inc 🕹💚
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I 💟💓❣🤎🤍 ♥
          </Heading>
          <Paragraph>
            Basketball, Music, Coding, Travelling, <Link href="/">LINK</Link>
          </Paragraph>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
