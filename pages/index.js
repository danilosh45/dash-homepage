import NextLink from 'next/link'
import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
  Link,
  Button,
  List,
  ListItem
} from '@chakra-ui/react'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
import Section from '../components/section'
import { BioSection, BioYear } from '../components/bio'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Footer from '../components/footer'
import Layout from '../components/layouts/article'

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={3}
          mb={6}
          align="center"
        >
          Hello I&apos;m a programmer based in Spain!
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Danilo Altamirano
            </Heading>
            <p>Digital builder (Artist / Developer / Bass player)</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor="wihiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/danilo.jpg"
              alt="Profile Image"
            />
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            Danilo is a freelance and Devop/Backend developer based in Spain
            with passion for building digital services/stuff he wants. When not
            online, he loves to play bass and take pictures with his 35mm film
            camera. Currently, he is building comercial websites out of La
            Rioja.
            <Link href="https://www.twitch.tv/danilosh45/about">
              Sometimes on twitch
            </Link>
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works" legacyBehavior>
              <Button rightIcon={<ChevronRightIcon />} colorScheme="pink">
                My portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>1995</BioYear>
            Born in Nicaragua.
          </BioSection>
          <BioSection>
            <BioYear>2017</BioYear>I leave the university to be self-taught
          </BioSection>
          <BioSection>
            <BioYear>2017</BioYear>
            Worked at HeyCreativosNicaragua
          </BioSection>
          <BioSection>
            <BioYear>2018 to present</BioYear>
            Works as a freelance
          </BioSection>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            🎵
          </Heading>
          <Paragraph>
            Art, Music,{' '}
            <Link href="https://instagram.com/milcordobas">Playing Bass</Link>,
            Nikon,{' '}
            <Link href="https://instagram.com/danilosh45">Photography</Link>
          </Paragraph>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            On the web
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/danilosh45" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="pink"
                  leftIcon={<IoLogoGithub />}
                >
                  @danilosh45
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://twitter.com/danilosh45" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="pink"
                  leftIcon={<IoLogoTwitter />}
                >
                  @danilosh45{' '}
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://instagram.com/danilosh45" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="pink"
                  leftIcon={<IoLogoInstagram />}
                >
                  @danilosh45
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
      <Footer />
    </Layout>
  )
}

export default Page
