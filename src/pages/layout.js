import NavBar from "@/components/NavBar/NavBar";
import { Box, Container } from "@chakra-ui/react";

export default function Layout({ children }) {
  return (
    <Box
      position={"relative"}
      style={{
        backgroundImage: "url('/pattern.png')",
        backgroundAttachment: "fixed",
      }}
    >
      <NavBar />
      <Container maxW={"1000px"} mt={"4rem"}>
        <main>{children}</main>
      </Container>
    </Box>
  );
}
