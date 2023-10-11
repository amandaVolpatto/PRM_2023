import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { Request } from "express";
import { read } from "fs";
import {Observable} from "rxjs";
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/services/user.service';

@Injectable()
export class AuthGuard implements CanActivate {

        constructor(
        private readonly JwtService : JwtService,
        private readonly UserService : UserService
        ){}

    async canActivate(context: ExecutionContext): Promise<boolean>{

        const request = context.switchToHttp().getRequest();
        const token = this.extractTokenFromHeader(request);
        //Verifico se o token existe
        if (!token){
            throw new UnauthorizedException('Token inexistente')
        }

        //verifica se o token é valido
        let username = '';

        try {
            const payload = await this.JwtService.verifyAsync(token)
            username = payload.userName;
        } catch {
            throw new UnauthorizedException('Token inválido')
        }

        //Verificar se usuário do payload está cadastrado
        const found = await this.UserService.findByUsername{username};

        if (!token){
            throw new UnauthorizedException('Usuário não cadastrado')
        }

        return true;
    }

    extractTokenFromHeader(request: Request): string | undefined{
        const [type, token] = request.headers.authorization?.split(' ') ?? [];

        return type === 'Bearer' ? token : undefined;

        //Bearer kkklklkajidsfdhsdf.sdhshdushu.sdsudhsad
        //Basic dsjfsidfhdsfaf
    }
}