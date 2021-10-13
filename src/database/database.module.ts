import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'postgres', // type of our database
        host: 'localhost', // database host
        port: 5432, // database host
        username: 'postgres', // username
        password: 'pass123', // user password
        database: 'postgres', // name of our database,
        autoLoadEntities: true, // models will be loaded automatically
        synchronize: true, // your entities will be synced with the database(recommended: disable in prod)
        entities: ["dist/**/*.entity.js"],
        migrations: ["dist/migrations/*.js"],
        cli: {
          migrationsDir: "src/migrations"
        }
      })
    }),
  ]
})
export class DatabaseModule {}
