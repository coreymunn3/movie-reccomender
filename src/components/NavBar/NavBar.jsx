import React from "react";
import { useRouter } from "next/router";
import { Box, Flex, IconButton, Input } from "@chakra-ui/react";
import { IoMdHome } from "react-icons/io";

const NavBar = (props) => {
  const router = useRouter();

  const search = (e) => {
    e.preventDefault();
    const searchTerm = e.target.searchTerm.value;
    router.push(`/search/${searchTerm}`);
  };

  return (
    <Flex
      direction={"row"}
      alignItems={"flex-end"}
      p={"1rem"}
      position={"sticky"}
      top={10}
      w={"95%"}
      maxW={"1000px"}
      marginLeft="auto"
      marginRight={"auto"}
      background={"rgba(255, 255, 255, 0.3)"}
      borderRadius={"150px"}
      boxShadow={"0 4px 30px rgba(0, 0, 0, 0.1)"}
      backdropFilter={"blur(8.8px)"}
      border={"1px solid rgba(255, 255, 255, 0.19)"}
      zIndex={500}
    >
      <IconButton
        icon={<IoMdHome />}
        size={"lg"}
        borderRadius={"100px"}
        onClick={() => router.push("/")}
      />
      <form style={{ width: "100%" }} onSubmit={search}>
        <Input
          name="searchTerm"
          placeholder="Search Movies"
          border="none"
          borderRadius={"0px"}
          borderBottom={"1px solid white"}
          outline="0px"
          background="none"
          color="white"
          _placeholder={{
            color: "white",
          }}
        />
      </form>
    </Flex>
  );
};

export default NavBar;
