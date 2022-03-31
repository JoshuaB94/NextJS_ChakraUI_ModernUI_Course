import { 
VStack, Heading, Text, 
SimpleGrid, GridItem, FormControl, 
FormLabel, Input, Select, Checkbox, Button} from '@chakra-ui/react';

const Details = () => { 
    return (
        <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start">
            <VStack spacing={3} alignItems="flex-start">
             <Heading size="2xl">Your Details</Heading>
             <Text>If you already have an account, click here to login.</Text>
            </VStack>

            <SimpleGrid columns={2} columnGap={3} rowGap={6} w="full">
                <GridItem colSpan={1}>
                    <FormControl>
                        <FormLabel>First Name</FormLabel>
                        <Input placeholder="John" />
                    </FormControl>
                </GridItem>

                <GridItem colSpan={1}>
                    <FormControl>
                        <FormLabel>Last Name</FormLabel>
                        <Input placeholder="John" />
                    </FormControl>
                </GridItem>

                <GridItem colSpan={2}>
                    <FormControl>
                        <FormLabel>Address</FormLabel>
                        <Input placeholder="45678 NW 12th St." />
                    </FormControl>
                </GridItem>

                <GridItem colSpan={1}>
                    <FormControl>
                        <FormLabel>City</FormLabel>
                        <Input placeholder="Lincoln" />
                    </FormControl>
                </GridItem>

                <GridItem colSpan={1}>
                    <FormControl>
                        <FormLabel>Country</FormLabel>
                        <Select>
                            <option value="usa">United States of America</option>
                            <option value="pr">Puerto Rico</option>
                            <option value="uk">United Kingdom</option>
                        </Select>
                    </FormControl>
                </GridItem>

                <GridItem colSpan={2}>
                    <Checkbox defaultChecked>
                        Ship to Billing Address
                    </Checkbox>
                </GridItem>
                
                <GridItem colSpan={2}>
                    <Button size="lg" w="full">Place Order</Button>
                </GridItem>
            </SimpleGrid>
        </VStack>
    );
};

export default Details;