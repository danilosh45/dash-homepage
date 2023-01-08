import {
  Container,
  Badge,
  Link,
  List,
  Heading,
  ListItem
} from '@chakra-ui/react'

import Layout from '../../components/layouts/article'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Footer from '../../components/footer'

const Work = () => (
  <Layout title="heycreativos">
    <Container>
      <Title>
        heycreativos <Badge>2018</Badge>
      </Title>
      <Heading>Soon complete info</Heading>
      <P>Sooner possible</P>
    </Container>
    <Footer />
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
