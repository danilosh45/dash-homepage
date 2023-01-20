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
  <Layout title="heycreativos">
    <Container>
      <Title>
        mimi <Badge>2017-2019</Badge>
      </Title>
      <P>
        Developed and maintained the backend of a website for HeyCreativos using
        HTML, JavaScript, Adobe Muse for design and PHP for the backend.
      </P>
      <UnorderedList my={4}>
        <ListItem>Proficient in HTML, JavaScript, Adobe Muse, and PHP</ListItem>
        <ListItem>
          Experience with database management and optimization
        </ListItem>
        <ListItem>Strong debugging and problem-solving skills</ListItem>
      </UnorderedList>

      <List ml={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Python discord.py, </span>
          <span>PHP, </span>
          <span>Javascript, </span>
          <span>Adobe Muse, </span>
        </ListItem>
      </List>
      <Divider />
      <WorkImage src="/images/works/heycreativos_1.png" alt="heycreativos" />
      <WorkImage src="/images/works/heycreativos_2.png" alt="heycreativos" />
      <SimpleGrid columns={2} gap={2}></SimpleGrid>
    </Container>
    <Footer />
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
