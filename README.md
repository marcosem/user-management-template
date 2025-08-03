## About the Project

### Built with
* [NodeJS v22.18.0][node-url]
* [Typescript][ts-url]
* [Docker][docker-url]
* [PostgreSQL][pg-url]
* [TypeORM][typeorm-url]

## Getting Started

To get a local copy up and running follow these simple example steps.

### Instalation
1. Clone the repo
[https://github.com/marcosem/user-management-template.git][usermng-repo]
<br />

2. Start a local docker for PostgresSQL
```sh
docker run --name usermng -e POSTGRES_PASSWORD=docker -e POSTGRES_DB=usermng -p 5432:5432 -d postgres
```
* Note: The default db name is "usermng", you can change it, its password, port, and so on, at typeORM DataSource file:

[./src/shared/infra/typeorm/index.ts][typeorm-init-file]
<br/>

3. Run typeORM migrations, by running the package.json script: 'migration:run'. ie:
```sh
yarn migration:run
```

## Contact
DEV: Marcos Mathias - marcos-github@memathias.com

[node-url]: https://nodejs.org/
[ts-url]: https://www.typescriptlang.org/
[docker-url]: https://www.docker.com/
[pg-url]: https://www.postgresql.org/
[typeorm-url]: https://typeorm.io/
[typeorm-init-file]: src/shared/infra/typeorm/index.ts
[usermng-repo]: https://github.com/marcosem/user-management-template.git
