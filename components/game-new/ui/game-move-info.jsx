import { GameSymbol } from "./game-symbol";

export function GameMoveInfo({ actions, currentMove, nextMove }) {
  return (
    <>
      <div className="flex items-center gap-1 text-xl leading-tight">
        Zet: <GameSymbol symbol={currentMove} className="w-5 h-5" />
      </div>
      <div className="flex items-center gap-1 text-slate-400 text-xs leading-tight">
        Volgende: <GameSymbol symbol={nextMove} className="w-3 h-3" />
      </div>
    </>
  );
}
