## About the Project

This a user management template microservice.
It is built in Node JS 22.18.0, allowing manage users (CRUD - Create, Read, Update, Delete), and also manage user authentication by generate a JSON Web Token (JWT) and allowing user to login with it.

### Built with
* [NodeJS v22.18.0][node-url]
* [Typescript][ts-url]
* [Docker][docker-url]
* [PostgreSQL][pg-url]
* [TypeORM][typeorm-url]
* [JSON Web Token (JWT)][jwt-url]

## Getting Started

To get a local copy up and running follow these simple example steps.

### Instalation
1. Clone the repo
[https://github.com/marcosem/user-management-template.git][usermng-repo]
<br />

2. Create your own .env file based in the [./env.example][dotenv-file] file.
The file must contain a MD5 string for APP_SECRET and APP_ADMIN_SECRET.
<br/>

3. Start a local docker for PostgresSQL
```sh
docker run --name usermng -e POSTGRES_PASSWORD=docker -e POSTGRES_DB=usermng -p 5432:5432 -d postgres
```
* Note: The default db name is "usermng", you can change it, its password, port, and so on, at TypeORM DataSource file:
[./src/shared/infra/typeorm/index.ts][typeorm-init-file]
<br/>

4. Run TypeORM migrations, by running the package.json script: 'migration:run'. ie:
```sh
yarn migration:run
```

<br/>

## Contact
DEV: Marcos Mathias - marcos-github@memathias.com

[node-url]: https://nodejs.org/
[ts-url]: https://www.typescriptlang.org/
[docker-url]: https://www.docker.com/
[pg-url]: https://www.postgresql.org/
[typeorm-url]: https://typeorm.io/
[typeorm-init-file]: src/shared/infra/typeorm/index.ts
[jwt-url]: www.jwt.io
[dotenv-file]: /.env.example
[usermng-repo]: https://github.com/marcosem/user-management-template.git
