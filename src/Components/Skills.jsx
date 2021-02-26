import React from 'react'
import { Center, Avatar, Wrap, WrapItem, Container, Box, Grid, Heading} from "@chakra-ui/react"





export const Skills = () => {
    return (
    <div>
        <Center bg="#343A40" h="200px" color="white">
            <Wrap>
                <WrapItem>
                    <Avatar className="avatar-uno" size="2xl" src="https://avatars.githubusercontent.com/u/69437054?s=400&u=db6f7673da053e1f5bd7d80c791e27f9925ba1de&v=4" />
                </WrapItem>
            </Wrap>
        </Center>


        <Container maxW="xl" centerContent>
            <Box padding="10" bg="#343A40" maxW="3x2" marginBottom="10" textAlign="center" color="white">
            <h3 className="titule-h" >Proactivo, responsable y con aspiracion de crecimiento profesional en el campo IT, con alta capacidad para trabajar en equipo comunicando y resolviendo problemas eficazmente.</h3>
            </Box>
        </Container>

        <Heading className="heading-2 mx-5" as="h2" size="3x2" isTruncated >
            Skills
        </Heading>

        <Grid templateColumns="repeat(5, 1fr)" gap={1} marginBottom="50px" className="mx-5">
            <Box className="box-uno" w="100%" h="10"  />
            <Box className="box-dos" w="100%" h="10" />
            <Box className="box-tres" w="100%" h="10" />
            <Box className="box-cuatro" w="100%" h="10" />
            <Box className="box-cinco" w="100%" h="10" />
        </Grid>
    </div>
    )
}

export default Skills