import { Document } from "mongoose";

export interface IUser extends Document{
    readonly first_name:string,
    readonly last_name:string,
    readonly email:string,
    readonly password:string,
    readonly gender:string
}