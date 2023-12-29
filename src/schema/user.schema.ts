import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class User{
    @Prop()
    first_name:string

    @Prop()
    last_name:string

    @Prop()
    email:string

    @Prop()
    gender:string

    @Prop()
    password:string
}

export const UserSchema = SchemaFactory.createForClass(User)