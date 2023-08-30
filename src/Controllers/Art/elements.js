import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

export const Background = styled.div({
  position: "fixed",
  bottom: 0,
  right: 0,
  width: "100vw",
  height: "100vh",
  backgroundColor: "#191919",
  zIndex: -999,
});

export const Column = styled.div({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  margin: "0 0 20% 0",
});

export const ProjectImage = styled.img((props) => ({
  width: props.width || "60vw",
  margin: "10% 0 0 0",
  filter: "grayscale(100%)",
  "&:hover": {
    filter: "none",
  },
  // "@media(max-width: 1100px)": {
  //   filter: "none",
  // },
}));

const loaderAnimation = keyframes({
  "0%": {
    transform: "rotate(0deg)",
  },
  "100%": {
    transform: "rotate(360deg)",
  },
});

export const ProjectLoadingImageWrapper = styled.div((props) => ({
  position: "relative",
  width: props.width || "60vw",
  margin: "5% 0 0 0",
  img: {
    filter: "grayscale(100%) brightness(30%)",
    "&:hover": {
      filter: "none",
    },
  },
  "&::after": {
    content: '""',
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "75px",
    height: "75px",
    marginTop: "-25px",
    marginLeft: "-25px",
    borderRadius: "50%",
    border: "10px solid rgba(255,255,255,0.7)",
    borderTopColor: "transparent",
    animation: `${loaderAnimation} 1s linear infinite`,
    display: "block",
  },
}));

export const SectionHeader = styled.div({
  fontSize: "8vw",
  fontWeight: 600,
  color: "#fff",
  margin: "20% 0 0 0",
});

export const DescriptionContainer = styled.div((props) => ({
  width: props.width || "60vw",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  margin: ".5% 0 0 0",
}));

export const Description = styled.div({
  textAlign: "left",
  fontSize: "1.5vw",
  color: "#fff",
});

export const Year = styled.div({
  fontSize: "1.5vw",
  color: "#fff",
  textAlign: "left",
});
