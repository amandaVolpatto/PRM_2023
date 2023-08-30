import { Injectable } from '@nestjs/common';


@Injectable()
export class ProfileService {

    profile() {

        return {
            fullname: 'Amanda Volpatto',
            username: 'amandinha',
            description: 'socorro, tcc quer me matar',
            createdAt: '2022-08-14'
        }
    }
}