import { MOVE_ORDER } from "../ui/constants";

export function getNextMove(currentmove, playersCount, playersTimeOver) {
  const slicedMoveOrder = MOVE_ORDER.slice(0, playersCount).filter(
    (symbol) => !playersTimeOver.includes(symbol),
  );

  const nextMoveIndex = slicedMoveOrder.indexOf(currentmove) + 1;
  return slicedMoveOrder[nextMoveIndex] ?? slicedMoveOrder[0];
}
