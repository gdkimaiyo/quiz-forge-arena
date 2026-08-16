import { Box, Container, Heading, Text, Flex, Badge, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

// Icons
import { IoIosFlash } from "react-icons/io";
import { GrAchievement } from "react-icons/gr";
import { CiBookmarkCheck } from "react-icons/ci";

export default function LandingPage() {
  return (
    <Box
      as="section"
      position="relative"
      py="96px"
      bg="linear-gradient(180deg, var(--brand-primary-light) 0%, var(--bg-app) 100%)"
      borderBottom="1px solid"
      borderColor="var(--brand-gray-border)"
      textAlign="center"
      overflow="hidden"
    >
      <Container maxW="900px" px={6}>
        {/* Subtitle Badges */}
        <Flex justify="center" gap={2} wrap="wrap">
          <Badge
            bg="rgba(60, 116, 186, 0.1)"
            color="var(--brand-primary)"
            border="1px solid"
            borderColor="var(--brand-primary-border)"
            px={4}
            py={1.5}
            borderRadius="full"
            fontSize="13px"
            fontFamily="var(--font-mono)"
            fontWeight="600"
            mb={6}
            textTransform="none"
          >
            <IoIosFlash /> Real-Time
          </Badge>

          <Badge
            bg="rgba(60, 116, 186, 0.1)"
            color="var(--brand-primary)"
            border="1px solid"
            borderColor="var(--brand-primary-border)"
            px={4}
            py={1.5}
            borderRadius="full"
            fontSize="13px"
            fontFamily="var(--font-mono)"
            fontWeight="600"
            mb={6}
            textTransform="none"
          >
            <GrAchievement /> Competitive
          </Badge>

          <Badge
            bg="rgba(60, 116, 186, 0.1)"
            color="var(--brand-primary)"
            border="1px solid"
            borderColor="var(--brand-primary-border)"
            px={4}
            py={1.5}
            borderRadius="full"
            fontSize="13px"
            fontFamily="var(--font-mono)"
            fontWeight="600"
            mb={6}
            textTransform="none"
          >
            <CiBookmarkCheck /> Knowledge Platform
          </Badge>
        </Flex>

        {/* Main Title */}
        <Heading
          as="h1"
          fontSize={["38px", "52px", "64px"]}
          fontFamily="var(--font-heading)"
          fontWeight="800"
          color="var(--brand-slate-dark)"
          lineHeight="1.1"
          mb={6}
        >
          Forge Your Knowledge in the{" "}
          <Text as="span" color="var(--brand-primary)">
            Arena
          </Text>
        </Heading>

        {/* Supporting Text */}
        <Text
          fontSize={["16px", "18px", "20px"]}
          color="var(--text-secondary)"
          maxW="680px"
          mx="auto"
          mb={10}
          lineHeight="1.6"
        >
          Compete in live quizzes, climb global leaderboards and sharpen your skills. Correctly
          answer quizzes to earn points and claim victory.
        </Text>

        {/* Action Buttons */}
        <Flex justify="center" gap={4} wrap="wrap">
          <Button
            asChild
            bg="var(--brand-primary)"
            color="white"
            px={8}
            py={5}
            borderRadius="full"
            fontSize="16px"
            fontWeight="700"
            boxShadow="0 4px 14px rgba(60, 116, 186, 0.3)"
            _hover={{
              bg: "var(--brand-primary-hover)",
              transform: "translateY(-1px)",
              textDecoration: "none",
            }}
            transition="all 0.2s ease"
          >
            <RouterLink to={"/quizzes"}>Play Now</RouterLink>
          </Button>

          <Button
            asChild
            bg="white"
            color="var(--brand-slate)"
            border="1px solid"
            borderColor="var(--brand-gray-border)"
            px={8}
            py={5}
            borderRadius="full"
            fontSize="16px"
            fontWeight="600"
            _hover={{
              bg: "var(--brand-gray-light)",
              transform: "translateY(-1px)",
              textDecoration: "none",
            }}
            transition="all 0.2s ease"
          >
            <RouterLink to="/about">Learn More</RouterLink>
          </Button>
        </Flex>
      </Container>
    </Box>
  );
}
