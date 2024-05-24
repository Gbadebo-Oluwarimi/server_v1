import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import * as session from 'express-session';
import * as passport from 'passport';

async function bootstrap() {
  dotenv.config();

  const app = await NestFactory.create(AppModule);
  app.use(
    session({
      secret: 'topsecret',
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 100000,
        httpOnly: true, // Helps prevent XSS attacks
        secure: false,
      },
    }),
  );
  app.use(passport.initialize());
  app.use(passport.session());
  //checing of the port is running right
  const Port = process.env.PORT || 3000;
  console.log(Port);

  await app.listen(Port);
}
bootstrap();
