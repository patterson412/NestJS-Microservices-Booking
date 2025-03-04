import { Type } from "class-transformer";
import { IsDate, isDefined, IsDefined, IsNotEmpty, IsNotEmptyObject, IsNumber, IsString, ValidateNested } from "class-validator";
import { CardDto } from "@app/common";
import { CreateChargeDto } from "@app/common";

export class CreateReservationDto {
    @IsDate()
    @Type(() => Date)   // Transforms incoming string to date instance which the dto expects.
    startDate: Date;

    @IsDate()
    @Type(() => Date)
    endDate: Date;

    @IsDefined()
    @IsNotEmptyObject()
    @ValidateNested()
    @Type(() => CreateChargeDto)
    charge: CreateChargeDto;
}
