import { BackToDistrictButton } from "./BackToDistrictButton";
import { ZoomControls } from "./ZoomControls";

export function MapControls() {
  return (
    <div className="absolute left-4 top-4 z-10 flex flex-col gap-3">
      <BackToDistrictButton />
      <ZoomControls />
    </div>
  );
}
