import './App.css';
import { QueryClient, QueryClientProvider } from "react-query";
import Weather from "./components/Weather";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Weather />
    </QueryClientProvider>
  );
}