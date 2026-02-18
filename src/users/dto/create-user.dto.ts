import { Role } from '@prisma/client';

export class CreateUserDto {
  firstname: string;
  lastname: string;
  employeeId: string;
  email: string;
  passwordHash: string;
  role: Role;
}
