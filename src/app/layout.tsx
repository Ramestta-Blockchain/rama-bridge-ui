"use client";

import React, { useEffect, createContext, useMemo, useState, ReactNode } from "react";
import { Inter } from "next/font/google";
import { State, cookieToInitialState } from 'wagmi';
import { Providers, config } from '@/configs/providers';
import { CssBaseline, PaletteMode } from "@mui/material";
import createTheme from "@mui/material/styles/createTheme";
import { ThemeProvider } from "@mui/material/styles";
import "./globals.css";
import { ColorModeContext } from "@/context";

const inter = Inter({ subsets: ["latin"] });

// Define types for your custom palettes
interface CustomPalette {
  main: string;
  contrastText: string;
  light?: string;
  black?:string;
  white?:string;
}

interface LightPalette extends CustomPalette {
  primary: CustomPalette;
  secondary: CustomPalette;
  common:CustomPalette;
}

interface DarkPalette extends LightPalette { }

// Define custom palettes for light and dark modes
const lightPalette: LightPalette = {
  primary: {
    main: '#080808',
    contrastText: '#fff',
    light: '#1D1D20',
  },

  secondary: {
    main: '#1D1D20',
    contrastText: '#000',
    light: '#1D1D20'
  },
  common: {
    black: '#131315',
    white: '#1D1D20',
    main: "",
    contrastText: ""
  },
  main: "",
  contrastText: ""
};

const darkPalette: DarkPalette = {
  primary: {
    main: '#fff',
    contrastText: '#000',
    light: '#3DC1F2'
  },
  secondary: {
    main: '#FFFFFF',
    contrastText: '#F1F2F4',
    light: '#DCDFE4'
  },

  common: {
    black: '#F1F2F4',
    white: '#DCDFE4',
    main: "",
    contrastText: ""
  },
  
  main: "",
  contrastText: ""
};





const RootLayout = ({
  children,
}: {
  children: ReactNode;
}) => {
  const initialState = cookieToInitialState(config) as State;

  const getInitialMode = (): PaletteMode => {
    if (typeof window !== 'undefined') {
      const savedMode = window.localStorage.getItem('colorMode');
      return savedMode ? (savedMode as PaletteMode) : 'light';
    }
    return 'light';
  };

  const [mode, setMode] = useState<PaletteMode>(getInitialMode);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('colorMode', mode);
    }
  }, [mode]);

  const getDesignTokens = (mode: PaletteMode) => ({
    palette: {
      mode,
      ...(mode === 'dark' ? lightPalette : darkPalette),
    },
  });

  const colorMode = useMemo(() => ({
    toggleColorMode: () => {
      setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
    },
  }), []);

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <html lang="en">
      <head>
        <title>Ramestta Portal</title>
        <meta name="description" content={"Ramestta Portal is a comprehensive and user-friendly online platform designed to streamline various administrative and operational processes for businesses and organizations. It offers a range of features, including document management, workflow automation, and real-time collaboration tools, all aimed at enhancing efficiency and productivity. The portal's intuitive interface and robust security measures ensure that users can manage their tasks with ease and confidence. Additionally, Ramestta Portal integrates seamlessly with existing systems, providing a scalable solution that adapts to the evolving needs of its users. Whether you're a small business or a large enterprise, Ramestta Portal is your go-to solution for optimizing your workflow and achieving your operational goals."} />
      </head>
      <body className={inter.className}>
        <Providers initialState={initialState}>
          <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              {children}
            </ThemeProvider>
          </ColorModeContext.Provider>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
