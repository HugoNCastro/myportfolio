import { Flex, Text} from '@chakra-ui/react'

interface NameProps {
  widthValue: number;
}

export function Name({ widthValue }: NameProps) {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      marginRight={
        widthValue === 50 ? "-20rem" : "-11rem"
      }
    >
      <Text
        fontWeight="bold"
        color={
          widthValue === 50 ? "var(--white)" : "var(--gray)"
        }
        fontSize={
          widthValue === 50 ? "10rem" : "9rem"
        }
        w={
          widthValue === 50 ? "60%" : "20%"
        }
        lineHeight={
          widthValue === 50 ? "0.8" : "0.8"
        }
      >
        {widthValue === 50 ?
        <>
          HUGO
          <span
            style={{
              color: "var(--green)",
              fontFamily: 'Roboto ',
              fontSize: "10rem",
            }}
          >
            .
          </span>
        </>
        :
        <>
          HELLO
        </>
        }
      </Text>
    </Flex>
  )
}