import { GameTitle } from "./ui/game-title";
import { BackLink } from "./ui/back-link";
import { GameInfo } from "./ui/game-info";
import { GameLayout } from "./ui/game-layout";
import { PlayerInfo } from "./ui/player-info";
import { PLAYERS } from "./ui/constants";

export function Game() {
  return (
    <GameLayout
      backLink={<BackLink />}
      title={<GameTitle />}
      gameInfo={
        <GameInfo isRatingGame playersCount={4} timeMode={"1 min per stap"} />
      }
      playersList={PLAYERS.map((players, index) => (
        <PlayerInfo key={players.id} avatar={players.avatar} isRight={index % 2 === 1} name={players.name} rating={players.rating} seconds={60} symbol={players.symbol}/>
      ))}
    />
  );
}
