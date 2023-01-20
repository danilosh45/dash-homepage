import {
  Container,
  Badge,
  List,
  ListItem,
  SimpleGrid,
  UnorderedList,
  Divider
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
//import { ExternalLinkIcon } from '@chakra-ui/icons'
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
        Mimi is a discord bot written in python, useful for adding functionality
        to your server. And provide a pleasant experience to users
      </P>
      <UnorderedList my={4}>
        <ListItem>Relevant server information</ListItem>
        <ListItem>Invitation assistant</ListItem>
        <ListItem>Voice control channel</ListItem>
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
      <SimpleGrid columns={2} gap={2}></SimpleGrid>
    </Container>
    <Footer />
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
