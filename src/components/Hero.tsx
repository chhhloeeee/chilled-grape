import NavBar from "./NavBar";

interface HeroProps {
  className?: string;
}

const Hero = ({ className }: HeroProps) => {
  return (
    <div className={className}>
      <NavBar />
    </div>
  );
};

export default Hero;
