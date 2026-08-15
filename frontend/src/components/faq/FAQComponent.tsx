import { Accordion, Box, Container, Heading, Text } from "@chakra-ui/react";

const questions = [
  {
    id: "about",
    question: "Tell me more about Quiz App",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tempus iaculis cursus. Sed egestas nulla sit amet dui tincidunt consectetur.",
  },
  {
    id: "points",
    question: "How do I earn points?",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tempus iaculis cursus. Sed egestas nulla sit amet dui tincidunt consectetur.",
  },
  {
    id: "participate",
    question: "How do I participate?",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tempus iaculis cursus. Sed egestas nulla sit amet dui tincidunt consectetur.",
  },
  {
    id: "help",
    question: "I need some help. How do I get help?",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tempus iaculis cursus. Sed egestas nulla sit amet dui tincidunt consectetur.",
  },
  {
    id: "privacy",
    question: "How do you deal with privacy?",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tempus iaculis cursus. Sed egestas nulla sit amet dui tincidunt consectetur.",
  },
  {
    id: "feedback",
    question: "I have some feedback. How do I provide feedback?",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tempus iaculis cursus. Sed egestas nulla sit amet dui tincidunt consectetur.",
  },
];

export default function FAQ() {
  return (
    <Container minH="100vh" maxW="5xl" py="80px" px={6}>
      <Box mb="8" textAlign="center">
        <Heading size="3xl" fontFamily="var(--font-heading)" color="var(--brand-slate-dark)" mb="2">
          Frequently Asked Questions
        </Heading>
        <Text color="var(--brand-slate-dark)" fontSize="lg">
          Everything you need to know about the platform.
        </Text>
      </Box>

      <Accordion.Root collapsible defaultValue={["about"]} variant="outline" size="lg">
        {questions.map(({ id, question, text }) => (
          <Accordion.Item key={id} value={id}>
            <Accordion.ItemTrigger cursor="pointer">
              <Text fontWeight="semibold" fontSize="md" textAlign="left" flex="1">
                {question}
              </Text>
            </Accordion.ItemTrigger>
            <Accordion.ItemContent>
              <Text color="fg.muted" pb="2">
                {text}
              </Text>
            </Accordion.ItemContent>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </Container>
  );
}
