import { useEffect, useState } from "react";
import { Box, Icon, useBreakpointValue } from "@chakra-ui/react";
import { FaAngleDoubleUp } from "react-icons/fa";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const position = useBreakpointValue({ base: "right", md: "left" });

  return (
    <Box
      as="button"
      width="48px"
      height="48px"
      borderRadius="50%"
      bg="gray.100"
      boxShadow="md"
      alignItems="center"
      justifyContent="center"
      display="flex"
      mt={"120px"}
      position="fixed"
      bottom="50px"
      zIndex={3}
      border="1.5px solid transparent"
      _hover={{
        borderColor: "highlight.primary",
      }}
      visibility={isVisible ? "visible" : "hidden"}
      right={position === "right" ? "20px" : "20px"}
      onClick={scrollToTop}
    >
      <Icon as={FaAngleDoubleUp} color="highlight.primary" boxSize={"18px"} />
    </Box>
  );
};

export default BackToTop;
