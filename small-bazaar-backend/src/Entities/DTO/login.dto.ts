import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;
}
