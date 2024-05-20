export function computeWinner(cells, sequenceSize = 5, fieldSize = 19) {
  const gap = Math.floor(sequenceSize / 2);

  function compareElements(indexes) {
    let result = true;

    for (let i = 1; i < indexes.length; i++) {
      result = result && !!cells[indexes[i]];
      result = result && cells[indexes[i]] === cells[indexes[i - 1]];
    }

    return result;
  }

  function getSequenceIndexes(i) {
    const res = [
      [], //   -
      [], //   \
      [], //   /
      [], //   |
    ];
    const x = i % fieldSize;
    const y = Math.floor(i / fieldSize);

    for (let j = 0; j < sequenceSize; j++) {
      const offset = j - gap;

      if (x >= gap && x < fieldSize - gap) {
        res[0].push(i + offset); //   -
      }
      if (x >= gap && x < fieldSize - gap && y >= gap && y < fieldSize - gap) {
        res[1].push(i + offset * (fieldSize + 1)); //   \
        res[2].push(i + offset * (fieldSize - 1)); //   /
      }
      if (y >= gap && y < fieldSize - gap) {
        res[3].push(i + offset * fieldSize); //   |
      }
    }

    return res;
  }

  for (let i = 0; i < cells.length; i++) {
    if (cells[i]) {
      const indexRows = getSequenceIndexes(i);
      const winnerIndexes = indexRows.find(
        (row) => row.length === sequenceSize && compareElements(row),
      );
      if (winnerIndexes) {
        return winnerIndexes;
      }
    }
  }

  return undefined;
}
