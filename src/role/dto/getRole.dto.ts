import { IsString, IsNumber, IsDate } from 'class-validator';
import { Expose } from 'class-transformer';

export class GetRoleDto {
  @Expose()
  @IsNumber()
  id: number;

  @Expose()
  @IsString()
  name_role: string;

  @Expose()
  @IsDate()
  createdAt: Date;

  @Expose()
  @IsDate()
  updatedAt: Date;
}
