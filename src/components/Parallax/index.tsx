import { Text, Flex } from '@chakra-ui/react';
import { Parallax } from 'react-parallax';


export function ParallaxElement() {

  return (
    <>
      <Parallax

        bgImage="https://image.freepik.com/free-photo/old-black-background-grunge-texture-dark-wallpaper-blackboard-chalkboard-room-wall_1258-28312.jpg"
        strength={500}
        bgImageSizes="30rem"
        blur={{min: -10, max: 10 }}
        style={{
          height: "20rem",
        }}
      >
        <Text
          fontSize="10rem"
          color="var(--white)"
        >
          Olá
        </Text>
      </Parallax>
      <Flex
        w="full"
        height="30rem"
        marginTop="5rem"
      >
      </Flex>
      <Parallax
        bgImage="https://image.freepik.com/free-photo/old-black-background-grunge-texture-dark-wallpaper-blackboard-chalkboard-room-wall_1258-28312.jpg"
        strength={-500}
        bgImageSizes="30rem"
        blur={{min: -10, max: 10 }}
      >
        <Text
          fontSize="10rem"
          color="var(--white)"
        >
          Olá
        </Text>
      </Parallax>

    </>
  )
}