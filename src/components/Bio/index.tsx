import { Box, Fade, VStack} from "@chakra-ui/react";

interface BioProps {
  widthValue: number;
}

export function Bio({ widthValue }: BioProps) {
  return (
    <VStack
      width="80%"
    >
      <Fade
        in={widthValue === 90}
        delay={0.5}
        unmountOnExit={true}
      >
        <Box
          color="var(--dark-gray)"
          fontSize="3rem"
          fontWeight="700"
          fontFamily="Roboto"
          padding="4rem 0 0 3rem"
        >
          Seja bem vindo ao meu portfolio !
        </Box>
      </Fade>

      <Fade
        in={widthValue === 90}
        delay={0.8}
        unmountOnExit={true}
      >
        <Box
          color="var(--gray)"
          fontSize="2rem"
          fontWeight="700"
          fontFamily="Roboto"
          padding="4rem 0 0 3rem"
          marginTop="1rem"
        >
         Lorem ipsum dolor sit amet consectetur adipisicing elit.  
        </Box>
      </Fade>

      <Fade
        in={widthValue === 90}
        delay={0.8}
        unmountOnExit={true}
      >
        <Box
          color="var(--white)"
          fontSize="2rem"
          fontWeight="700"
          fontFamily="Roboto"
          padding="2rem 0 0 3rem"
          marginTop="5rem"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        </Box>
      </Fade>
    </VStack>
  )
}