import { RouterProvider } from "react-router";
import routes from "./routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={routes} />
      <Toaster richColors position="top-right" />
    </QueryClientProvider>
  );
}

export default App;
