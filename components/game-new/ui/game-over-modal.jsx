import { UiButton } from "../../uikit/ui-button";
import { UiModal } from "../../uikit/ui-modal";

export function GameOverModal({ winnerName, players }) {
  return (
    <UiModal
      width="md"
      isOpen={winnerName}
      onClose={() => console.log("close")}
    >
      <UiModal.Header>Spel is over!</UiModal.Header>
      <UiModal.Body>
        <div className="text-sm">
          Winnaar: <span className="text-teal-600">{winnerName}</span>
        </div>
        <div className="justify-between grid grid-cols-2 gap-3 mt-2">{players}</div>
      </UiModal.Body>
      <UiModal.Footer>
        <UiButton size="md" variant="outline">
          Terug
        </UiButton>
        <UiButton size="md" variant="primary">
          Speel opnieuw
        </UiButton>
      </UiModal.Footer>
    </UiModal>
  );
}
