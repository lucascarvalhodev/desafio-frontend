import { InputSearch } from "./InputSearch";
import { Logo } from "./Logo";
import { NavbarMenu } from "./NavbarMenu";

export function Navbar() {
  return (
    <>
      <div className="h-14 px-8 flex justify-between items-center gap-20 fixed top-0 left-0 right-0 z-50 bg-neutral-900">
        <Logo />
        <InputSearch />
        <NavbarMenu />
      </div>
      <div className="h-14"></div>
    </>
  );
}
