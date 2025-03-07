import NavbarTes from "./NavbarTes";

function App() {
  return (
    <div className="relative bg-zinc-900 text-zinc-400 min-h-screen">
      <NavbarTes />
      <div className="mx-auto max-w-full px-4 pb-6 pt-6 text-lg sm:px-12 md:px-16">
        <div className="mt-6">
          <h1 className="text-white text-3xl">Welcome to My Website Login with google</h1>
          <p className="text-zinc-400 mt-2">
            This is a sample React app with Firebase Authentication.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
