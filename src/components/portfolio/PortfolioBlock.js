import React from "react";
import IconLink from "./IconLink";
import { Box } from "@mui/material";
import styled from "styled-components";

const Container = styled.div`
  .mytext {
    font-size: 1rem;
  }
  img {
    width: 300px;
  }

  @media (min-width: 940px) {
    .mytext {
      font-size: 1.5rem;
    }
    img {
      width: 400px;
    }

    h1{

      font-size: 2rem;
    }
  }
`;
function PortfolioBlock(props) {
  const { image, live, source, title, readme } = props;
  return (
    <Container>
      <br />
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <a href={readme} title={title} target="_blank">
          <Box component={"img"} src={image} alt={"mockup"} maxWidth={400} />
        </a>
        <h1 >{title}</h1>
        <Box
          className={"portfolio mytext"}
          display={"flex"}
          flexDirection={"column"}
          gap={"0.5rem"}
          alignItems={"center"}
          // fontSize={"1.5rem"}
          py={"2rem"}
        >
          {live && (
            <Box p={1} border={"2px solid black"} borderRadius={"25px"}>
              <IconLink link={live} title={"Live Demo"} icon={"fa fa-safari"} />
            </Box>
          )}

          <Box p={1} border={"2px solid black"} borderRadius={"25px"}>
            <IconLink link={source} title={"Source Code"} icon={"fa fa-code"} />
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default PortfolioBlock;
