
import { Body, Controller, Post, UnauthorizedException } from '@nestjs/common';
import { AuthService } from 'src/services/auth.service';
import { HttpException } from '@nestjs/common';
import { HttpCode } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common';

@Controller('auth')
export class AuthController {

        constructor(
            private readonly service: AuthService
        ){}

        @Post(('signin'))
        @HttpCode(HttpStatus.OK)
        async signIn(@Body() credential: Record<string, string>){

            const found = await this.service.validateCredential(credential.username, credential.password)

            if (!found) {
                throw new UnauthorizedException();
            }

            return {
                "status" : "deu certo"
            }
        }

}

