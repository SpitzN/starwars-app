import { useLogo } from "@/hooks/useLogo";
const Footer = () => {
  const { hollowLogo } = useLogo();
  return (
    <footer className="px-4 py-12 mt-8 border-muted-foreground border-t-2 w-full">
      <div className="container mx-auto text-center font-orbitron">
        <img src={hollowLogo} alt="Star Wars Footer Logo" className="h-8 mx-auto mb-4" />
        <p>© {new Date().getFullYear()} SpitzN</p>
        <p>
          Data provided by{" "}
          <a href="https://swapi.dev/" className="underline">
            SWAPI
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
