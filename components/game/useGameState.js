import { useReducer, useState } from "react";
import { GAME_SYMBOLS } from "./constants";
import { getNextMove } from "../game-new/model/get-next-move";
import { computeWinner } from "../game-new/model/compute-winner";

export const GAME_STATE_ACTIONS = {
  CELL_CLICK: "cell-click",
};

const gameStateReduser = (state, action) => {
  console.log(action);
  return state;
};

const initGameState = ({}) => ({
  cells: new Array(19 * 19).fill(null),
  currentMove: GAME_SYMBOLS.CROSS,
});

export function useGameState(playersCount) {
  const [gameState, dispatch] = useReducer(gameStateReducer, {}, initGameState);

  const winnerSequence = computeWinner(gameState.cells);
  const nextMove = getNextMove(gameState.currentMove, playersCount);
  const winnerSymbol =
    nextMove === gameState.currentMove
      ? gameState.currentMove
      : gameState.cells[winnerSequence?.[0]];

  return {
    cells: gameState.cells,
    currentMove: gameState.currentMove,
    nextMove,
    winnerSequence,
    winnerSymbol,
    dispatch,
  };
}

/*
  const [{ cells, currentMove, playersTimeOver }, setGameState] = useState(
    () => ({
      cells: new Array(19 * 19).fill(null),
      currentMove: GAME_SYMBOLS.CROSS,
      playersTimeOver: [],
    }),
  );

  const winnerSequence = computeWinner(cells);
  const nextMove = getNextMove(currentMove, playersCount, playersTimeOver);

  const winnerSymbol =
    nextMove === currentMove ? currentMove : winnerSequence?.[0];

  const handleCellClick = (index) => {
    setGameState((lastGameState) => {
      if (lastGameState.cells[index]) {
        return lastGameState;
      }

      return {
        ...lastGameState,
        currentMove: getNextMove(
          lastGameState.currentMove,
          playersCount,
          lastGameState.playersTimeOver,
        ),
        cells: lastGameState.cells.map((cell, i) =>
          i === index ? lastGameState.currentMove : cell,
        ),
      };
    });
  };

  const handlePlayerTimeOver = (symbol) => {
    setGameState((lastGameState) => {
      return {
        ...lastGameState,
        playersTimeOver: [...lastGameState.playersTimeOver, symbol],
        currentMove: getNextMove(
          lastGameState.currentMove,
          playersCount,
          lastGameState.playersTimeOver,
        ),
      };
    });
  };
  */
