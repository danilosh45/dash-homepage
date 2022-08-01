import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  UnorderedList,
  Heading,
  Box,
  Image,
  Center,
  Divider
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Footer from '../../components/footer'

const Work = () => (
  <Layout title="mimi">
    <Container>
      <Title>
        mimi <Badge>2020-present</Badge>
      </Title>
      <P>
        Mimi is a discord bot written in python, useful for adding
        functionality to your server.
        And provide a pleasant experience to users
      </P>
      <P>
        So, you can check a shop info as soon as you found a promising ramen
        shop in a food magazine. Let&apos;s go out and have a delicious ramen!
      </P>
      <UnorderedList my={4}>
        <ListItem>Ramen shop recomendation based on photo</ListItem>
        <ListItem>Ramen shop recomendation based on photo</ListItem>
        <ListItem>Ramen shop recomendation based on photo</ListItem>
      </UnorderedList>

      <List ml={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Universal</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Python discord.py</span>
        </ListItem>
      </List>
      <Divider />
      <WorkImage src="/images/works/mimi_eyecatch.png" alt="mimi" />
      <SimpleGrid columns={2} gap={2}>
      </SimpleGrid>
    </Container>
    <Footer />
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
