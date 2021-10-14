import { Text, Flex, Link } from '@chakra-ui/layout';

export function Header() {
  return (
    <>
      <Flex
        alignItems="center"
        justifyContent="space-between"
        padding="1.25rem 2rem"
      >
        <Text
          fontSize="1rem"
          fontWeight="500"
          fontFamily="Roboto"
        >
          hugo | portfolio
        </Text>
        <Flex>
          <Link
            color="var(--white)"
            fontSize="1rem"
            fontWeight="500"
            fontFamily="Roboto"
            w="2rem"
            h="2rem"
            backgroundColor="transparent"
            cursor="pointer"
            textDecoration="none"
            transition="0.5s"
            _hover={{
              color: "var(--green)",
            }}
          >
            EN.
          </Link>
          <Link
            fontSize="1rem"
            fontWeight="500"
            fontFamily="Roboto"
            color="var(--white)"
            w="2rem"
            h="2rem"
            backgroundColor="transparent"
            cursor="pointer"
            textDecoration="none"
            transition="0.5s"
            _hover={{
              color: "var(--green)",
            }}
          >
            PT.
          </Link>
        </Flex>
      </Flex>
    </>
  );
}