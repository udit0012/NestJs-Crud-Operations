import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from 'src/dto/create-user.dto';
import { UpdateUserDto } from 'src/dto/update-user.dto';
import { IUser } from 'src/interface/user.interface';

@Injectable()
export class UserService {
    constructor(@InjectModel('User') private userModel:Model<IUser>){}

    async createUser(createUserDto:CreateUserDto): Promise<IUser>{
        const newUser = new this.userModel(createUserDto)
        return await newUser.save()
    }

    async getAllUser():Promise<IUser[]>{
        const allUser = await this.userModel.find()
        if(allUser && allUser.length){
            return allUser
        }
        throw new NotFoundException('Users data not found')
    }
    async getUser(userId:string):Promise<IUser>{
        const userData = await this.userModel.findById(userId)
        if(userData){
            return userData
        }
        throw new NotFoundException("User data not found")
    }
    async updateUser(userId:string,createUserDto:UpdateUserDto):Promise<IUser>{
        const updatedUserData = await this.userModel.findByIdAndUpdate(userId,createUserDto,{new:true})
        if(updatedUserData){
            return updatedUserData
        }
        throw new NotFoundException("User data not found")
    }
    async deleteUser(userId:string):Promise<IUser>{
        const  deletedUser = (await this.userModel.findByIdAndDelete(userId).lean())
        if(deletedUser){
            return deletedUser
        }
        throw new NotFoundException("User data not found")
    }
}
