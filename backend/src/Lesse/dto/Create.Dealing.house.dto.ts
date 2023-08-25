/* eslint-disable prettier/prettier */

import { IsBoolean } from "class-validator";

export class CreateDealingHouseDto{
  @IsBoolean()
  Is_deal?:boolean; 
  @IsBoolean()
  Is_report?:boolean; 
  @IsBoolean()
  Is_like:boolean;

}