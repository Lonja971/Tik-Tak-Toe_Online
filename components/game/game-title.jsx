import Link from "next/link";
import { ArrowLeftIcon } from "./icons/arrow-left-icon";
import { StarIcon } from "./icons/star-icon";
import { UserIcon } from "./icons/user-icon";
import { TimerIcon } from "./icons/timer-icon";

export function GameTitle( {playersCount}) {
  return (
    <div className="pl-2">
      <Link
        href="#"
        className="flex items-center gap-2 text-xs text-teal-600 -mb-0.5"
      >
        <ArrowLeftIcon />
        Naar de hoofdpagina
      </Link>
      <h1 className="text-4xl leading-tight">Tik Tak Toe</h1>
      <div className="flex items-center gap-3 text-xs text-slate-400">
        <StarIcon />
        <div className="flex items-center gap-1">
          <UserIcon />{playersCount}
        </div>
        <div className="flex items-center gap-1">
          <TimerIcon />1 min per stap
        </div>
      </div>
    </div>
  );
}
