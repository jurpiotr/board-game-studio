import { Type } from "@angular/core"

interface DataDice {
   name: string;
   value?: number;
   model?: boolean;
   img?: string;
   amount?: number;
}

export interface Dice {
   component: Type<any> | null;
   data: DataDice;
}
export interface ResultDice extends DataDice {
   valuesDice: number
}

export interface newDice {
   values: number[];
}