import Image from "next/image";
import logoSrc from "./logo.svg";
import { Profile } from "../profile";
import { ArrowDownIcon } from "./icons/arrow-down-icon";
import { UiButton } from "../uikit/ui-button";

export function Header() {
  return (
    <header className="px-8 flex h-24 items-center bg-white shadow-lg">
      <Image className="h-18 w-auto" src={logoSrc} alt="logo" />
      <div className="w-px h-8 bg-slate-200 mx-8" />
      <UiButton className="w-44" size="lg" variant="primary">
        Spel
      </UiButton>
      <button className="ml-auto flex items-center gap-2 text-teal-600">
        <Profile name="Mr.Stinger" rating="1234" />
        <ArrowDownIcon />
      </button>
    </header>
  );
}
