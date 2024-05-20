import { GameTitle } from "./ui/game-title";
import { BackLink } from "./ui/back-link";
import { GameInfo } from "./ui/game-info";
import { GameLayout } from "./ui/game-layout";
import { PlayerInfo } from "./ui/player-info";
import { PLAYERS } from "./ui/constants";
import { GameMoveInfo } from "./ui/game-move-info";
import { useGameState } from "./model/use-game-state";
import { GameCell } from "./ui/game-cell";
import { GameOverModal } from "./ui/game-over-modal";

const PLAYERS_COUNT = 2;

export function Game() {
  const { cells, currentMove, nextMove, handleCellClick, winnerSequence, winnerSymbol } = useGameState(PLAYERS_COUNT);

  const winnerPlayer = PLAYERS.find(player => player.symbol === winnerSymbol)

  return (
    <>
        <GameLayout
          backLink={<BackLink />}
          title={<GameTitle />}
          gameInfo={
            <GameInfo isRatingGame playersCount={4} timeMode={"1 min per stap"} />
          }
          playersList={PLAYERS.slice(0, PLAYERS_COUNT).map((players, index) => (
            <PlayerInfo
              key={players.id}
              avatar={players.avatar}
              isRight={index % 2 === 1}
              name={players.name}
              rating={players.rating}
              seconds={60}
              symbol={players.symbol}
            />
          ))}
          gameMoveInfo={<GameMoveInfo currentMove={currentMove} nextMove={nextMove} />}
          gameCells={cells.map((cell, index) => (
            <GameCell
              key={index}
              index={index}
              onClick={() => {
                handleCellClick(index);
              }}
              isWinner={winnerSequence?.includes(index)}
              disabled={!!winnerSymbol}
              symbol={cell}
            />
          ))}
        />

        <GameOverModal
          winnerName={winnerPlayer?.name}
          players={
            PLAYERS.slice(0, PLAYERS_COUNT).map((players, index) => (
              <PlayerInfo
                key={players.id}
                avatar={players.avatar}
                isRight={index % 2 === 1}
                name={players.name}
                rating={players.rating}
                seconds={60}
                symbol={players.symbol}
              />
            ))
          }
        />
    </>
  );
}
