import { Center, Spinner } from "@chakra-ui/react";

export const CenterSpinner = () => {
  return (
    <Center p={4} mt={4}>
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    </Center>
  );
};
