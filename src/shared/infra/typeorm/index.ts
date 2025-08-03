import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'docker',
  database: 'usermng',
  entities: ['./src/modules/**/infra/typeorm/entities/*.ts'],
  migrations: ['./src/shared/infra/typeorm/migrations/*.ts'],
});

AppDataSource.initialize()
  .then(() => {
    // eslint-disable-next-line no-console
    console.log('Data Source has been initialized!');
  })
  .catch(err => {
    // eslint-disable-next-line no-console
    console.error('Error during Data Source initialization:', err);
  });
