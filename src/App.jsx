import { Link } from "react-router-dom";
import { ThemeToggle } from "./components/ThemeToggle";

function App() {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen dark:bg-zinc-950 dark:text-gray-50">
        <div className="flex flex-col gap-6">
          <h1 className="text-3xl font-semibold">DashApp.</h1>
          <button className="bg-zinc-950 text-gray-50 p-3 rounded-md dark:bg-gray-50 dark:text-zinc-950">
            <Link to="/dashboard">Let's Go</Link>
          </button>
        </div>
      </div>

      <div>
        <ThemeToggle />
      </div>
    </>
  );
}

export default App;
