import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity';
import { Topic } from './topics/topic.entity';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from './users/user.module';
import { TopicModule } from './topics/topic.module';
import { AuthModule } from './auth/auth.module';
import { ProfileModule } from './profiles/profile.module';
import { CommentModule } from './comments/comment.module';
import { RepostModule } from './reposts/repost.module';
import { Onibus } from "./onibus.entity";
import { Assento }from "./assento.entity";
import { Usuario }from "./usuario.entity";

@Module({
  imports: [
  import { Assento } from './../../exame-final/exame-front/src/components/Assento/index';
  import { Onibus } from 'src/onibus/onibus.entity';
Jwimport { Usuario } from './../../exame-final/exame-back/src/usuarios/usuario.entity';
tModule.register({
      global: true,
      secret: 'materdei',
      signOptions: {expiresIn: '24h'}
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'prm_2023', 
      synchronize: true,
      autoLoadEntities: true
    }),
    UserModule,
    TopicModule,
    AuthModule,
    ProfileModule,
    CommentModule,
    RepostModule,
    Onibus,
    Assento,
    Usuario
    

  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
