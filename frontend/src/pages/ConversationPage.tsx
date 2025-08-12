import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Box, Container, Text, Button, Spinner, Flex } from "@chakra-ui/react";
import { IoMdArrowBack } from "react-icons/io";
import { apiFetch } from "@/utilities/apiClient";

type ConversationPageResponse = {
  conversationTitle: string;
  questions: Question[];
};
type Question = { id: number; questionText: string };

export default function ConversationPage() {
  const { convoId } = useParams();
  const navigate = useNavigate();

  const [convoTitle, setConvoTitle] = useState("");
  const [questions, setQuestions] = useState<Question[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    apiFetch<ConversationPageResponse>(
      `/api/conversations/${convoId}/questions`
    ).then((data) => {
      if (data) {
        setConvoTitle(data.conversationTitle);
        setQuestions(data.questions);
        setIsLoading(false);
      }
    });
  }, []);

  const getNextCard = () => {
    setQuestions((prev) => {
      if (prev.length <= 1) return prev;
      return [...prev.slice(1), prev[0]];
    });
  };

  const currentCard = questions[0]?.questionText;

  // TODO:
  // - handle api errors

  return (
    <Container maxW="1440px" px="2rem">
      <Box py="1rem">
        <Button
          variant="outline"
          onClick={() => {
            navigate("/");
          }}
        >
          <IoMdArrowBack />
          Go back
        </Button>
      </Box>

      <Flex justify="center">
        <Text
          py="2rem"
          fontSize={{ base: "xl", sm: "2xl", md: "3xl", lg: "4xl" }}
        >
          {convoTitle}
        </Text>
      </Flex>

      {isLoading ? (
        <Flex justify="center">
          <Spinner size="xl" />
        </Flex>
      ) : (
        <>
          {questions ? (
            <>
              <Flex align="center" direction="column">
                <Box
                  w={{ base: "70%", xl: "40%" }}
                  minH="180px"
                  p={{ base: 10, md: 14 }}
                  borderWidth="1px"
                  borderRadius="xl"
                  borderColor="gray.200"
                  // bg={cardBg}
                  boxShadow="sm"
                >
                  <Text
                    fontSize={{ base: "lg", md: "xl" }}
                    lineHeight="tall"
                    fontWeight="bold"
                  >
                    {currentCard}
                  </Text>
                </Box>
                <Flex justify="content">
                  <Box w="50%" p={{ base: 6, md: 8 }}>
                    <Button onClick={getNextCard} size="xl" bg="#61A1A0">
                      Next card
                    </Button>
                  </Box>
                </Flex>
              </Flex>
            </>
          ) : (
            <Text>No questions found</Text>
          )}
        </>
      )}
    </Container>
  );
}
