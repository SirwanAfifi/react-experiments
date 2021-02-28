import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";

export default function Home() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  return (
    <ThemeProvider theme={themes[theme]}>
      <PrimaryButton
        onClick={(_) => setTheme((th) => (th === "dark" ? "light" : "dark"))}
      >
        This text is the primary color
      </PrimaryButton>
    </ThemeProvider>
  );
}

interface Theme {
  light: {
    colors: {
      primary: string;
      background: string;
    };
  };
  dark: {
    colors: {
      primary: string;
      background: string;
    };
  };
}

const themes: Theme = {
  light: {
    colors: {
      primary: "deeppink",
      background: "white",
    },
  },
  dark: {
    colors: {
      primary: "lightpink",
      background: "black",
    },
  },
};

interface IThemable {
  theme: Theme;
}

interface ButtonProps extends IThemable {}

const PrimaryButton = styled.button<ButtonProps>`
  padding: 20;
  color: ${(props) => props.theme.colors.primary};
  background-color: ${(props) => props.theme.colors.background};
`;
