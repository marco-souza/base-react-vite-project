import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  return (
    <>
      <div className="flex mx-auto my-12 justify-center gap-4">
        <a
          href="https://vitejs.dev"
          rel="noreferrer"
          target="_blank"
        >
          <img
            alt="Vite logo"
            className="logo"
            src={viteLogo}
          />
        </a>
        <a
          className="animate-spin"
          href="https://react.dev"
          rel="noreferrer"
          target="_blank"
        >
          <img
            alt="React logo"
            className="logo react"
            src={reactLogo}
          />
        </a>
      </div>
      <h1 className="text-3xl text-center">Vite + React</h1>
    </>
  );
}

export default App;
