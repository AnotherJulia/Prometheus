import { Blocks, Bot } from "lucide-react";
import Link from "next/link";

const NavLogo = () => {
  return (
    <Link className="flex z-40 font-semibold items-center mb-1" href="/">
      <Blocks className="text-primary h-8 w-8" />
      <h1 className="ml-3 text-xl">Prometheus</h1>
    </Link>
  );
};

export default NavLogo;
