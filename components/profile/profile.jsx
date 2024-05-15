import Image from "next/image";
import avatarSrc from "./avatar.jpg";
import clsx from "clsx";

export function Profile({ className, name, rating, avatar = avatarSrc }) {
  return (
    <div className={clsx("flex items-center gap-2 text-teal-600", className)}>
      <Image
        className="h-12 w-auto rounded-full"
        src={avatar}
        alt="avatar"
        unoptimized
      />
      <div className="text-left overflow-hidden">
        <div className="truncate text-lg leading-tight">{name}</div>
        <div className="text-slate-400 text-xs leading-tight">
          Beoordeling: {rating}
        </div>
      </div>
    </div>
  );
}
