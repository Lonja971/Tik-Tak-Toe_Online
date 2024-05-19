import { UiButton } from "../uikit/ui-button";
import { UiModal } from "../uikit/ui-modal";

export function GmaeOverModal() {
  return (
    <UiModal
      width="md"
      isOpen={winnerSymbol}
      onClose={() => console.log("close")}
    >
      <UiModal.Header>Spel is over!</UiModal.Header>
      <UiModal.Body>
        <div className="text-sm">
          Winnaar: <span className="text-teal-600">Mr.Stinger</span>
        </div>
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
