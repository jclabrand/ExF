# ExF
## Introduction
Exams portal for schools and colleges

## How to use
First copy the repo into your disk.

```shell
$ git clone https://github.com/jclabrand/ExF.git
```

Install all dependencies.

```shell
$ npm install
```

Then precompile the project and start

```shell
$ npm run build
$ npm start
```

Edit config.json file inside dist/ folder (example...)

```json
{
	"port":"8080",
}

```

In production environment, use the following. (assuming you have the dist folder with precompiled files)

```shell
$ npm install --only=prod
$ npm start
```

In development enviroment, you can use the following commands in separate shells

```shell
$ npm run build-dev
```

```shell
$ npm run start-dev
```

```shell
$ npm run start-dev-sync
```

## License

License: GNU GENERAL PUBLIC LICENSE (See LICENSE file for details)
