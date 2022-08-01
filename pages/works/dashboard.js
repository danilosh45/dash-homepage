import {
  Container,
  Badge,
  Link,
  List,
  Heading,
  ListItem

} from '@chakra-ui/react'
import Footer from '../../components/footer'
import Layout from '../../components/layouts/article'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => ( 
  <Layout title="dashboard">
    <Container>
      <Title>
        dashboard <Badge>2019</Badge>
      </Title>
      <Heading>Soon complete info</Heading>
      <P>Sooner possible</P>
    </Container>
      <Footer />
  </Layout>
)

export default Work
export {getServerSideProps} from '../../components/chakra'
