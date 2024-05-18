import { Header } from "../components/header";
import {
  GameInfo,
  GameTitle,
  GameField,
  useGameState,
} from "../components/game";
import { useState } from "react";
import next from "next";
import { GameSymbol } from "../components/game/game-symbol";
import { UiModal } from "../components/uikit/ui-modal";
import { UiButton } from "../components/uikit/ui-button";

export default function HomePage() {
  const [playersCount] = useState(4);
  const {
    cells,
    currentMove,
    handleCellClick,
    nextMove,
    winnerSequence,
    handlePlayerTimeOver,
    winnerSymbol,
  } = useGameState(playersCount);

  return (
    <div className="bg-slate-50 min-h-screen">
      <Header />
      <main className="pt-6 mx-auto w-max">
        <GameTitle playersCount={playersCount} />
        <GameInfo
          playersCount={playersCount}
          className="mt-4"
          currentMove={currentMove}
          isWinner={!!winnerSymbol}
          onPlayerTimeOver={handlePlayerTimeOver}
        />
        {winnerSymbol && (
          <div className="my-4">
            <GameSymbol symbol={winnerSymbol} />
          </div>
        )}
        <UiModal width="md" isOpen={winnerSymbol} onClose={() => console.log('close')}>
          <UiModal.Header>Spel is over!</UiModal.Header>
          <UiModal.Body>
            <div className="text-sm">Winnaar: <span className="text-teal-600">Mr.Stinger</span></div>
          </UiModal.Body>
          <UiModal.Footer>
            <UiButton size="md" variant="outline">Terug</UiButton>
            <UiButton size="md" variant="primary">Speel opnieuw</UiButton>
          </UiModal.Footer>
        </UiModal>
        <GameField
          playersCount={playersCount}
          className="mt-6"
          cells={cells}
          currentMove={currentMove}
          handleCellClick={handleCellClick}
          nextMove={nextMove}
          winnerSequence={winnerSequence}
          winnerSymbol={winnerSymbol}
        />
      </main>
    </div>
  );
}
