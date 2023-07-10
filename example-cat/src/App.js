import './App.css';
import { Cat } from "./components/Cat";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useCount } from "./useCount";

function App() {

  const { count, increase, decrease, restart } = useCount();

  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: true,
      },
    },
  });

  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <Cat />
        {count}
        <button onClick={increase}> increase </button>
        <button onClick={decrease}> decrease </button>
        <button onClick={restart}> restart </button>
      </QueryClientProvider>
    </div>
  );
}

export default App;
