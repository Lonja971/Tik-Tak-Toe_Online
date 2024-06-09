import { MOVE_ORDER } from "../ui/constants";

export function getNextMove(currentmove) {
  const nextMoveIndex = MOVE_ORDER.indexOf(currentmove) + 1;
  return MOVE_ORDER[nextMoveIndex] ?? MOVE_ORDER[0];
}
