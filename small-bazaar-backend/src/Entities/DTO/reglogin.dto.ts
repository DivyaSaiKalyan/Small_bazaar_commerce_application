import { ApiProperty } from '@nestjs/swagger';

export class RegLoginDto {
  @ApiProperty()
  firstname: string;

  @ApiProperty()
  lastname: string;

  @ApiProperty()
  gender: string;

  @ApiProperty()
  dateofbirth: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;
}
