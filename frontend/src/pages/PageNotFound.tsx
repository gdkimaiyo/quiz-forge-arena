import { Button, Flex, Text } from "@chakra-ui/react";
import { HiMiniHome } from "react-icons/hi2";
import { Link as RouterLink } from "react-router-dom";

export default function PageNotFound() {
  return (
    <Flex
      h="100vh"
      w="full"
      direction="column"
      align="center"
      justify="center"
      gap="40px"
      bg="var(--bg-app)"
    >
      <Text fontSize="14px" color="gray.500" textAlign="center" maxW="80%">
        Page not found!
      </Text>

      <Flex direction="column" textAlign="center" my={2} gap={2} align="center">
        <Button
          asChild
          bg="var(--brand-primary)"
          color="white"
          border="none"
          _hover={{ opacity: 0.9 }}
          borderRadius="24px"
          fontSize="14px"
          w="fit-content"
          px="20px"
          py={2}
        >
          <RouterLink to="/">
            <HiMiniHome /> Go to Homepage
          </RouterLink>
        </Button>
      </Flex>
    </Flex>
  );
}
