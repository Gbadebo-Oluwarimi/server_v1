import {
  Controller,
  Get,
  Post,
  Body,
  UseGuards,
  Response,
  Request,
  RawBody,
} from '@nestjs/common';
import { UserService } from './User.services';
import { CreateClientDto, CreateUserDto } from './User.dto';
import { AuthenticatedGuard } from 'src/auth/authenticated.guards';

@Controller('User')
export class UserController {
  constructor(private readonly userservice: UserService) {}

  // route to create clients under a particular User
  @UseGuards(AuthenticatedGuard)
  @Post('create_client')
  async CreateClient(
    @Body() CreateClientDto,
    @Request() req,
    @Response() res,
  ): Promise<any> {
    console.log('Testing the create client route', req.user._id);
    return res.send({ message: 'Create Client Route Works' });
  }

  // route to update client detaills in the future we might add client logo upload etc

  // route to delete a particular client

  //route to fetch all the clients of a particular user

  //route to fetch the particular details of a particular client
}
