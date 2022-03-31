import { VStack, Heading, Text, Button, HStack, AspectRatio, Image, Stack, Divider } from '@chakra-ui/react';

const Cart = () => { 
    return (
        <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start" bg="gray.50">
            <VStack alignItems="flex-start" spacing={3}>
                <Heading size="2xl">Your Cart</Heading>
                <Text>
                    If your price is too hard on your eyes, {''}
                    <Button variant="link" colorScheme="black">
                        try changing the theme.
                    </Button>    
                </Text>
            </VStack>
            <HStack spacing={6} alignItems="center" w="full">
                <AspectRatio ratio={1} w={24}>
                    <Image src="/images/skateboard.jpeg" alt="red skateboard on black and white pinstripes" />
                </AspectRatio>

                <Stack spacing={0} w="full" direction="row" justifyContent="space-between" alignItems="center"> 
                    <VStack w="full" spacing={0} alignItems="flex-start">
                        <Heading size="md">Penny Board</Heading>
                        <Text color="gray.600">PNYCOMP27541</Text>
                    </VStack>
                    <Heading size="sm" textAlign="end">$119.00</Heading>
                </Stack>
            </HStack>

            <VStack spacing={4} alignItems="stretch" w="full">
                <HStack justifyContent="space-between">
                    <Text color="gray.600">Subtotal</Text>
                    <Heading size="sm">$119.00</Heading>
                </HStack>
                <HStack justifyContent="space-between">
                    <Text color="gray.600">Shipping</Text>
                    <Heading size="sm">$19.99</Heading>
                </HStack>
                <HStack justifyContent="space-between">
                    <Text color="gray.600">Taxes (estimated)</Text>
                    <Heading size="sm">$23.80</Heading>
                </HStack>
            </VStack>

            <Divider />

            <HStack justifyContent="space-between" w="full">
                <Text color="gray.600">Total</Text>
                <Heading size="lg">$162.79</Heading>
            </HStack>
        </VStack>
    );
};

export default Cart;