import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  ParseIntPipe,
  Patch,
  Put,
} from '@nestjs/common';
import { UserServices } from '../user-service/user-service';

export class UpdateUserDto {}
import { CreateUserDto } from '../dto/user.dto';
import { updateUserDto } from '../dto/user.update.dto';

@Controller('users')
export class UserController {
  constructor(private userServices: UserServices) {}

  //get request to get all the data of users
  @Get('')
  getUser() {
    return this.userServices.getUsers();
  }
  @Post('')
  addUser(@Body() body: CreateUserDto) {
    return this.userServices.createuser(body);
  }
  @Get('/:id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    return this.userServices.getUserById(id);
  }
  @Put('/:id')
  updateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: updateUserDto,
  ) {
    return this.userServices.updateUserData(id, body);
  }
}
