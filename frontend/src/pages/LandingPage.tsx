import { useEffect, useState } from "react";
import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Spinner,
  Image,
  Container,
  Flex,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/trace_logo_only.svg";
import { apiFetch } from "@/utilities/apiClient";

type Conversation = {
  referenceId: string;
  title: string;
};

export default function LandingPage() {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  // TODO - remove mockResponse
  const mockResponse = [
    {
      referenceId: "first-date",
      title: "First Dates",
      description: "To help you figure out if you're on the same page",
    },
    {
      referenceId: "couples-seeking-a-deeper-connection",
      title: "Couples Seeking A Deeper Connection",
      description:
        "To help you figure out if you're on the same page. To help you figure out if you're on the same page. To help you figure out if you're on the same page",
    },
    {
      referenceId: "networking-events",
      title: "Networking events",
      description: "To help you figure out if you're on the same page",
    },
    {
      referenceId: "networking-events",
      title: "Networking events",
      description: "To help you figure out if you're on the same page",
    },
    {
      referenceId: "networking-events",
      title: "Networking events",
      description: "To help you figure out if you're on the same page",
    },
    {
      referenceId: "networking-events",
      title: "Networking events",
      description: "To help you figure out if you're on the same page",
    },
    {
      referenceId: "networking-events",
      title: "Networking events",
      description: "To help you figure out if you're on the same page",
    },
    {
      referenceId: "networking-events",
      title: "Networking events",
      description: "To help you figure out if you're on the same page",
    },
    {
      referenceId: "networking-events",
      title: "Networking events",
      description: "To help you figure out if you're on the same page",
    },
  ];

  useEffect(() => {
    // TODO - dynamically retrieve from env var
    // fetch("http://localhost:8000/api/conversations")
    apiFetch<Conversation[]>(`/api/conversations`).then((data) => {
      setConversations(data);
      setIsLoading(false);
    });
  }, []);

  return (
    <Container maxW="1440px" px="2rem">
      <Flex as="header" align="center" direction="column" py="2rem">
        <Flex align="center" gap={3}>
          <Image
            src={logo}
            maxH={{ base: "39px", sm: "50px", md: "70px", lg: "80px" }}
            maxW="100%"
            fit="contain"
          />
          <Text
            textAlign="center"
            fontSize={{ base: "4xl", sm: "5xl", md: "6xl", lg: "7xl" }}
          >
            ConvoCues
          </Text>
        </Flex>

        <Text
          py="2rem"
          fontSize={{ base: "xl", sm: "2xl", md: "3xl", lg: "4xl" }}
        >
          Turn small talk into real talk
        </Text>
      </Flex>

      {isLoading ? (
        <Flex justify="center">
          <Spinner size="xl" />
        </Flex>
      ) : (
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} gap={6}>
          {mockResponse.map((convo) => (
            <Box
              key={convo.referenceId}
              p={6}
              minH="250px"
              borderWidth="2px"
              borderRadius="lg"
              cursor="pointer"
              _hover={{ bg: "gray.100" }}
              onClick={() => navigate(`/conversation/${convo.referenceId}`)}
            >
              <Heading size="md" py="0.5rem">
                {convo.title}
              </Heading>
              <Text py="0.5rem">{convo.description}</Text>
            </Box>
          ))}
        </SimpleGrid>
      )}
    </Container>
  );
}
