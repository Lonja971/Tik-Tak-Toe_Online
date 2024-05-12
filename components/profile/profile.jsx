import Image from "next/image";
import avatarSrc from "./avatar.jpg";
import clsx from "clsx";

export function Profile({ className }) {
  return (
    <div className={clsx("flex items-center gap-2 text-teal-600", className)}>
      <Image
        className="h-12 w-auto rounded-full"
        src={avatarSrc}
        alt="avatar"
        unoptimized
      />
      <div className="text-left">
        <div className=" text-lg leading-tight">Paromovevg</div>
        <div className="text-slate-400 text-xs leading-tight">
          Beoordeling: 1234
        </div>
      </div>
    </div>
  );
}
