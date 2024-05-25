import { Box, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box as="footer" width="100%" py={4} textAlign="center" borderTop="1px" borderColor="gray.200">
      <Text>&copy; 2024 My Todo App</Text>
    </Box>
  );
};

export default Footer;
