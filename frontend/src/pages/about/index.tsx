import { Box, Container, SimpleGrid, Heading, Text } from "@chakra-ui/react";

export default function AboutView() {
  const features = [
    {
      title: "Real-Time Competition",
      desc: "Go head-to-head with other players and quiz enthusiasts worldwide with instant scoring.",
    },
    {
      title: "Curated Categories",
      desc: "Explore a variety of topics ranging from Geography to General Trivia.",
    },
    {
      title: "Climb the Ranks",
      desc: "Earn points, track your stats and secure your place on the global leaderboard.",
    },
  ];

  return (
    <Box bg="var(--bg-app)" minH="100vh">
      {/* Feature Section */}
      <Container maxW="1100px" py="80px" px={6}>
        <Box textAlign="center" mb="56px">
          <Heading
            as="h2"
            fontSize="32px"
            fontFamily="var(--font-heading)"
            color="var(--brand-slate-dark)"
            mb={3}
          >
            Why QuizForge Arena?
          </Heading>
          <Text color="var(--text-secondary)" fontSize="17px">
            Built for speed, accuracy and continuous learning.
          </Text>
        </Box>

        <SimpleGrid columns={[1, 1, 3]} gap={8}>
          {features.map((item, index) => (
            <Box
              key={index}
              bg="white"
              p={8}
              borderRadius="16px"
              border="1px solid"
              borderColor="var(--brand-gray-border)"
              boxShadow="0 2px 8px rgba(0, 0, 0, 0.03)"
              _hover={{
                borderColor: "var(--brand-primary-border)",
                boxShadow: "0 8px 24px rgba(60, 116, 186, 0.08)",
                transform: "translateY(-2px)",
              }}
              transition="all 0.25s ease"
            >
              <Heading
                as="h3"
                fontSize="20px"
                fontFamily="var(--font-heading)"
                color="var(--brand-slate-dark)"
                mb={3}
              >
                {item.title}
              </Heading>
              <Text color="var(--text-secondary)" fontSize="15px" lineHeight="1.6">
                {item.desc}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
