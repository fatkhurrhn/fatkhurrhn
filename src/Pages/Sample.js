import Navbar from "../components/Navbar";
import FooterComponent from "../components/Footer";

function Sample() {
  return (
    <div className="relative">
      <div className="bg-zinc-900 text-zinc-400 min-h-screen">
        <div className="mx-auto max-w-[750px] px-4 pb-1 pt-6 text-lg sm:px-12 md:px-16">
          <Navbar />
          <div>
            <br/>
            <br/>
            <h1>ini halaman Sample</h1>
            <br/>
          </div>
        </div>
        <FooterComponent />

      </div>
    </div>
  );
}
export default Sample;
