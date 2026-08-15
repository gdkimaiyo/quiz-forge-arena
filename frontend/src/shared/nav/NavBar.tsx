import { useState, useEffect, useCallback } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";
import { Flex, Spacer, Heading, Image, Container, Button } from "@chakra-ui/react";

import surveyLogo from "@/assets/survey-logo.svg";

const navItems = [
  { id: "home", name: "Home", link: "/" },
  { id: "about", name: "About Us", link: "/about" },
  { id: "faqs", name: "FAQs", link: "/faqs" },
];

export default function NavBar() {
  const location = useLocation();
  const path = location.pathname;

  const [scrolled, setScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <Flex
      as="nav"
      position="fixed"
      top={0}
      left={0}
      right={0}
      height="72px"
      align="center"
      bg={scrolled ? "rgba(255, 255, 255, 0.9)" : "transparent"}
      backdropFilter={scrolled ? "blur(10px)" : "none"}
      borderBottom={scrolled ? "1px solid" : "1px solid transparent"}
      borderColor="var(--brand-gray-border)"
      transition="all 0.25s ease-in-out"
      zIndex={1000}
    >
      <Container maxW="1200px" px={6} w="100%">
        <Flex align="center" justify="space-between" w="100%">
          {/* Navigation Links */}
          <Flex align="center" gap={6}>
            {/* Brand Logo & Name */}
            <ChakraLink asChild _hover={{ textDecoration: "none" }}>
              <RouterLink to="/">
                <Image src={surveyLogo} alt="QuizForge Logo" h="48px" w="auto" />
                <Heading size="lg" color="var(--brand-slate-dark)">
                  QuizForge<span style={{ color: "var(--brand-primary)" }}>Arena</span>
                </Heading>
              </RouterLink>
            </ChakraLink>

            {navItems.map((item) => (
              <ChakraLink
                key={item.id}
                asChild
                fontSize={"14px"}
                color={path === item.link ? "var(--brand-primary)" : "var(--brand-slate)"}
                _hover={{ color: "var(--brand-primary)", textDecoration: "none" }}
              >
                <RouterLink to={item.link}>{item.name}</RouterLink>
              </ChakraLink>
            ))}
          </Flex>

          <Spacer />

          {/* Navigation Links */}
          <Flex align="center" gap={8}>
            {/* CTA Action */}
            <Button asChild bg="var(--brand-primary)" color="white" borderRadius="full">
              <RouterLink to="/quizzes">Enter Arena</RouterLink>
            </Button>
          </Flex>
        </Flex>
      </Container>
    </Flex>
  );
}
