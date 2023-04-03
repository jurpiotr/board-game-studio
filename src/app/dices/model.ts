import { Type } from "@angular/core"

export interface Dice {
   component: Type<any> | null;
   data: DataDice;
 }

interface DataDice {
   name: string;
   value?: number;
   model?: boolean;
   img?: string;
   amount?: number;
}