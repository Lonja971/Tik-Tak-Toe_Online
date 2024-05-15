import clsx from "clsx";
import { UiButton } from "../uikit/ui-button";
import { GameSymbol } from "./game-symbol";

export function GameField({
  className,
  cells,
  currentMove,
  nextMove,
  handleCellClick,
  winnerSequence,
}) {
  const actions = (
    <div className="flex gap-3">
      <UiButton className="w-22" size="md" variant="primary">
        Gelijkspel
      </UiButton>
      <UiButton className="w-22" size="md" variant="outline">
        Opgeven
      </UiButton>
    </div>
  );

  return (
    <GameFieldLayout className={className}>
      <GameMoveInfo
        actions={actions}
        currentMove={currentMove}
        nextMove={nextMove}
      />
      <GameGrid>
        {cells.map((symbol, index) => (
          <GameCell
            key={index}
            index={index}
            onClick={() => {
              handleCellClick(index);
            }}
            isWinner={winnerSequence?.includes(index)}
          >
            {symbol && <GameSymbol symbol={symbol} className="w-5 h-5" />}
          </GameCell>
        ))}
      </GameGrid>
    </GameFieldLayout>
  );
}

function GameCell({ index, children, onClick, isWinner }) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "border border-slate-200 -ml-px -mt-px flex items-center justify-center",
        isWinner && 'bg-orange-600/10'
      )}
    >
      {children}
    </button>
  );
}

function GameFieldLayout({ children, className }) {
  return (
    <div
      className={clsx(
        className,
        "bg-white rounded-2xl shadow-md px-8 pt-5 pb-7",
      )}
    >
      {children}
    </div>
  );
}

function GameMoveInfo({ actions, currentMove, nextMove }) {
  return (
    <div className="flex justify-between items-center">
      <div>
        <div className="flex items-center gap-1 text-xl leading-tight">
          Zet: <GameSymbol symbol={currentMove} className="w-5 h-5" />
        </div>
        <div className="flex items-center gap-1 text-slate-400 text-xs leading-tight">
          Volgende: <GameSymbol symbol={nextMove} className="w-3 h-3" />
        </div>
      </div>
      {actions}
    </div>
  );
}

function GameGrid({ children }) {
  return (
    <div className="mt-3 grid grid-cols-[repeat(19,_30px)] grid-rows-[repeat(19,_30px)] pl-px pt-px">
      {children}
    </div>
  );
}
