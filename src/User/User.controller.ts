import {
  Controller,
  Get,
  Post,
  Body,
  UseGuards,
  Response,
  Request,
  RawBody,
  Inject,
  Param,
} from '@nestjs/common';
import { UserService } from './User.services';
import { CreateClientDto, CreateUserDto } from './User.dto';
import { AuthenticatedGuard } from 'src/auth/authenticated.guards';
import { Client } from './user.interface';
import { Model } from 'mongoose';

@Controller('User')
export class UserController {
  constructor(
    private readonly userservice: UserService,
    @Inject('CLIENT_MODEL')
    private ClientModel: Model<Client>,
  ) {}

  // route to create clients under a particular User
  @UseGuards(AuthenticatedGuard)
  @Post('create_client')
  async CreateClient(
    @Body() CreateClientDto,
    @Request() req,
    @Response() res,
  ): Promise<any> {
    console.log('Testing the create client route', req.user._id);
    const {
      ClientAddress,
      ClientEmail,
      ClientContact,
      ClientDescription,
      ClientName,
    } = CreateClientDto;
    if (
      !ClientAddress ||
      !ClientEmail ||
      !ClientContact ||
      !ClientDescription ||
      !ClientName
    ) {
      return res.send({
        message: 'Please Fill in all the fields for the client',
      });
    } else {
      const createdClient = new this.ClientModel({
        ClientAddress,
        ClientContact,
        ClientDescription,
        ClientEmail,
        ClientName,
        UserId: req.user._id,
      });
      return createdClient.save();
    }
    // return res.send({ message: 'Create Client Route Works' });
  }

  // route to update client detaills in the future we might add client logo upload etc

  // route to delete a particular client

  //route to fetch all the clients of a particular user
  @UseGuards(AuthenticatedGuard)
  @Get('clients')
  async getUserClients(@Request() req, @Response() res) {
    console.log(req.user._id);
    try {
      const users = await this.ClientModel.find({ UserId: req.user._id });
      console.log(users);
      return users;
    } catch (err) {
      return res.send({ message: err.message });
    }
  }
  //route to fetch the particular details of a particular client

  @UseGuards(AuthenticatedGuard)
  @Get('/client/:id')
  async findOneUserClient(
    @Param('id') id: String,
    @Response() res,
    @Request() req,
  ): Promise<any> {
    try {
      const client = await this.ClientModel.findById(id);
      if (!client) {
        return res.send({ message: 'No Client with this id exists' });
      } else {
        return client;
      }
    } catch (error) {
      return res.send({ message: error.message });
    }
  }
}
