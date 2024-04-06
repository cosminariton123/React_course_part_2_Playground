import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import App from "./App";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

//global options if needed
const queryClient = new QueryClient();
//  {
//  defaultOptions: {
//    queries: {
//      retry: 3, //It is the default value, but here we use it as an example
//      gcTime: 300_000, //5 minutes default, used to be called cacheTime
//      staleTime: 10 * 1000, //10 seconds now, 0 default
//      //If stale => autorefresh when network reconnected || when a component is mounted || when the window is refocused
//      refetchOnWindowFocus: true, //default true
//      refetchOnReconnect: true, //default true
//      refetchOnMount: true, //default true
//    },
//  },
//}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools></ReactQueryDevtools>
    </QueryClientProvider>
  </React.StrictMode>
);
