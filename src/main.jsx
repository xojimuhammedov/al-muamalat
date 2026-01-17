import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
import './i18n.jsx'
import "react-toastify/dist/ReactToastify.css";

// Optimize QueryClient with better defaults for performance
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // Reduce unnecessary refetches
      retry: 1, // Reduce retry attempts
      staleTime: 5 * 60 * 1000, // Cache data for 5 minutes
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <ToastContainer />
      <BrowserRouter>
        <Suspense fallback={
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            fontSize: '18px',
            color: '#1B4D3E'
          }}>
            Loading...
          </div>
        }>
          <QueryClientProvider client={queryClient}>
            <App />
          </QueryClientProvider>
        </Suspense>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
