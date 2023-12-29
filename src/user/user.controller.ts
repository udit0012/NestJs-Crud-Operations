import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from 'src/dto/create-user.dto';
import { UpdateUserDto } from 'src/dto/update-user.dto';

@Controller('user')
export class UserController {
    constructor(private readonly userService:UserService){}

    @Post()
    async createUser(@Res() response, @Body() createUserDto:CreateUserDto){
        try {
            const newUser = await this.userService.createUser(createUserDto)
            return response.status(HttpStatus.CREATED).json({
                status:true,
                data:newUser,
                message:"User created"
            })
        } catch (error) {
            return response.status(HttpStatus.BAD_REQUEST).json({
                status:false,
                data:error,
                message:"User cannot be created"
            })
        }
    }

    @Get()
    async getAllUser(@Res() response){
        try {
            const allUser = await this.userService.getAllUser()
            return response.status(HttpStatus.OK).json({
                status:true,
                data:allUser,
                message:"Users found"
            })
        } catch (error) {
            return response.status(error.status).json({
                status:false,
                data:error,
                message:error.response
            })
        }
    }
    @Get('/:id')
    async getUser(@Res() response, @Param('id') userId:string){
        try {
            const userData = await this.userService.getUser(userId)
            
            return response.status(HttpStatus.OK).json({
                status:true,
                data:userData,
                message:"User found"
            })
        } catch (error) {
            return response.status(HttpStatus.BAD_REQUEST).json({
                status:false,
                data:error,
                message:error.response
            })
        }
    }
    @Put('/:id')
    async updateUser(@Res() response,@Param('id') userId:string,@Body() createUserDto:UpdateUserDto){
        try {
            const updatedUserData = await this.userService.updateUser(userId,createUserDto)
            return response.status(HttpStatus.OK).json({
                status:true,
                data:updatedUserData,
                message:"User found"
            })
        } catch (error) {
            return response.status(error.status).json({
                status:false,
                data:error,
                message:error.response
            })
        }
    }
    @Delete('/:id')
    async deleteUser(@Res() response, @Param('id') userId:string){
        try {
            const deletedUser = await this.userService.deleteUser(userId)
            return response.status(HttpStatus.OK).json({
                status:true,
                data:deletedUser,
                message:"User found"
            })
        } catch (error) {
            return response.status(error.status).json({
                status:false,
                data:error,
                message:error.message
            })
        }
    }
}
