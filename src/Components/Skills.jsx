import React from 'react'
import { Center, Avatar, Wrap, WrapItem, Container, Box, Grid } from "@chakra-ui/react"
import Typed from 'react-typed'




export const Skills = () => {
    return (
    <div>
        <Center bg="#343A40" h="200px" color="white">
            <Wrap>
                <WrapItem>
                    <Avatar size="2xl" name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />{" "}
                </WrapItem>
            </Wrap>
        </Center>

        <Container maxW="xl" centerContent>
            <Box padding="10" bg="#343A40" maxW="3x2" marginBottom="10" textAlign="center" color="white">
            <Typed className='typed-text-two mx-5'
        strings={["Mucho texto",]}
        typeSpeed={40}
        backSpeed={60} />
            </Box>
        </Container>
        <Grid templateColumns="repeat(5, 1fr)" gap={1} marginBottom="50px" className="mx-5">
            <Box className="box-uno" w="100%" h="10"  />
            <Box className="box-dos" w="100%" h="10" />
            <Box className="box-tres" w="100%" h="10" />
            <Box className="box-cuatro" w="100%" h="10" />
            <Box className="box-cinco" w="100%" h="10" />
        </Grid>
        <Grid templateColumns="repeat(5, 1fr)" gap={6} marginBottom="50px" className="mx-5">
            <Box className="box-seis" w="100%" h="10"  />
            <Box className="box-siete" w="100%" h="10" />
            <Box className="box-ocho" w="100%" h="10" />
            <Box className="box-nueve" w="100%" h="10" />
            <Box className="box-diez" w="100%" h="10" />
        </Grid>
    </div>
    )
}

export default Skills