import NextLink from 'next/link'
import { Heading, Box, Image, Link, Badge } from '@chakra-ui/react'
import { ChevronUpIcon } from '@chakra-ui/icons'
import Head from 'next/head'


export const Title = ({ children }) => (
  <Box>
    <NextLink href="/works" passHref legacyBehavior>
      <Link>Works</Link>
    </NextLink>
    <span>
      {''}
      <ChevronUpIcon />{''}
    </span>
    <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
      {children}
    </Heading>
  </Box>
)

export const WorkImage = ({ src, alt }) => (
  <Image borderRadius="lg" w="full" src={src} alt={alt} mb={4} />
)

export const Meta = ({ children }) => (
  <Badge colorScheme="green" mr={2}>
    {children}
  </Badge>
)
