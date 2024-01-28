import "./App.css";
import ReactQueryDemo from "./components/ReactQueryDemo";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <ReactQueryDemo />
      </div>
    </QueryClientProvider>
  );
}

export default App;
