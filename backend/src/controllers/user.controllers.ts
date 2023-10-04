import { Body, Controller, Delete, Get, HttpCode, Param, ParseIntPipe, Post, HttpException, HttpStatus, Put} from "@nestjs/common";
import { UserService } from "src/services/user.service";
import { get } from "http";
import { User } from "src/entities/user.entity";



@Controller('users')
export class UserController {
    constructor(private readonly service: UserService) { }

    @Get()
    findAll(): Promise<User[]> {
        return this.service.findAll();
    }

    @Get(':id')
    async findById(@Param('id', ParseIntPipe) id: number): Promise<User> {
        const found  = await this.service.findById(id);

        if (!found){
            throw new HttpException('User not found', HttpStatus.NOT_FOUND)
        }

        return found;
    }
    @Get(':username')
    async findByUsername(@Param('id', ParseIntPipe) username: string): Promise<User> {
        const found = await this.service.findByUsername(username);

        if (!found){
            throw new HttpException('User not found', HttpStatus.NOT_FOUND)
        }

        return found;
    }

    @Post('')
    create(@Body() user: User): Promise<User> {
        return this.service.create(user)
    }

    @Delete(':id')
    @HttpCode(204)
    async delete(@Param('id', ParseIntPipe) id: number): Promise<void> {
        const found  = await this.service.findById(id);

        if (!found){
            throw new HttpException('User nor found', HttpStatus.NOT_FOUND)
        }

        return this.service.delete(id);

    }

    @Put(':id')
    async updateById(@Param('id', ParseIntPipe) id: number, @Body() user: User): Promise<User> {
        const found = this.service.findById(id);

        if (!found){
            throw new HttpException('User nor found', HttpStatus.NOT_FOUND)
        }

        return found;
    }
}