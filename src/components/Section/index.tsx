import { Flex } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { Name } from "../Name/index"
import { Bio } from '../Bio/index'


export function Section() {
  const [widthValue, setWidthValue] = useState(50);

  useEffect(() => {
    function scrollEvent(){
      if(document.documentElement.scrollTop === 0){
        window.document.body.style.overflowY = 'hidden';
      }

      console.log(document.documentElement.scrollTop);
    }

    function wheelEvent(evt: WheelEvent) {
      const delta = Math.sign(evt.deltaY);
      if (delta === 1) {
        setWidthValue(90)
      } else {
        setWidthValue(50);
      }

      if(widthValue === 90){
        window.document.body.style.overflowY = 'auto';
      } 
    }

    window.addEventListener("wheel", wheelEvent)
    window.addEventListener("scroll", scrollEvent)
    
    return () => {
      window.removeEventListener("wheel", wheelEvent)
      window.removeEventListener("scroll", scrollEvent)
    }
  }, [widthValue])

  return (
    <>
      <Flex
        backgroundColor="var(--green)"
        marginTop="3rem"
        h="40rem"
        padding="1rem"
        justifyContent="space-between"
        borderRadius=" 0 2.5rem 2.5rem 0"
        transition="0.9s"
        style={{ width: `${widthValue}%` }}
      >        
          <Bio 
            widthValue={widthValue}
          />
          <Name 
            widthValue={widthValue}
          />
      </Flex>
    </>
  );
}