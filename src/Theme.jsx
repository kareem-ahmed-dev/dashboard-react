export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    primary: {
      main: mode === "light" ? "#2563eb" : "#60a5fa",
      dark: mode === "light" ? "#1d4ed8" : "#3b82f6",
      contrastText: "#ffffff"
    },
    secondary: {
      main: mode === "light" ? "#7c3aed" : "#a78bfa",
      dark: mode === "light" ? "#6d28d9" : "#8b5cf6",
      contrastText: "#ffffff"
    },
    success: {
      main: mode === "light" ? "#15803d" : "#4ade80"
    },
    warning: {
      main: mode === "light" ? "#b45309" : "#fbbf24"
    },
    error: {
      main: mode === "light" ? "#b91c1c" : "#f87171"
    },
    ...(mode === "light"
      ? {
          background: { default: "#f4f7fb", paper: "#ffffff" },
          text: { primary: "#172033", secondary: "#596579" },
          divider: "#dbe3ef"
        }
      : {
          background: { default: "#111827", paper: "#1f2937" },
          text: { primary: "#f3f4f6", secondary: "#b8c2d1" },
          divider: "#374151"
        })
  },
  shape: {
    borderRadius: 8
  },
  typography: {
    fontFamily: '"Roboto", sans-serif'
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          transition: "background-color 160ms ease, box-shadow 160ms ease, transform 160ms ease",
          "&:hover": { transform: "translateY(-1px)" }
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: { backgroundImage: "none" }
      }
    },
    MuiDataGrid: {
      styleOverrides: {
        root: {
          borderColor: mode === "light" ? "#dbe3ef" : "#374151",
          "& .MuiDataGrid-row:hover": {
            backgroundColor: mode === "light" ? "#eef4ff" : "#263449"
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: mode === "light" ? "#eef4ff" : "#263449"
          }
        }
      }
    }
  }
});
