import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Icon,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { lazy, Suspense } from "react";
import { CenterSpinner } from "../components/center_spinner";
const ListContent = lazy(() => import("../components/listPage/list_content"));

export const ListPage = () => {
  return (
    <>
      <Box pl={4}>
        <Link to="/">
          <Icon as={ChevronLeftIcon} w={10} h={10} color="grey" />
        </Link>
      </Box>
      <Flex
        textAlign={"center"}
        justifyContent={"center"}
        direction={"column"}
        width={"full"}
        p={4}
      >
        <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
          <Heading fontSize={"3xl"}>This is the headline</Heading>
          <Text color={"gray.600"} fontSize={"xl"}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </Text>
        </Stack>
        <Suspense fallback={<CenterSpinner />}>
          <ListContent />
        </Suspense>
      </Flex>
    </>
  );
};
