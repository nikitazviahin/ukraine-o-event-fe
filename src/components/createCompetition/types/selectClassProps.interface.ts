import { EClass } from "../../../types/enums/class.enum";

export interface SelectClassProps {
  selectedClasses: EClass[];
  setSelectedClasses: React.Dispatch<React.SetStateAction<EClass[]>>;
}
