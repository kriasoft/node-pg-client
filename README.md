# ES7 Async/Await Client for PostgreSQL

[![NPM version](http://img.shields.io/npm/v/pg-client.svg?style=flat-square)](https://www.npmjs.com/package/pg-client)
[![NPM downloads](http://img.shields.io/npm/dm/pg-client.svg?style=flat-square)](https://www.npmjs.com/package/pg-client)
[![Build Status](http://img.shields.io/travis/kriasoft/node-pg-client/master.svg?style=flat-square)](https://travis-ci.org/kriasoft/node-pg-client)
[![Dependency Status](http://img.shields.io/david/kriasoft/node-pg-client.svg?style=flat-square)](https://david-dm.org/kriasoft/node-pg-client)
[![DevDependency Status](http://img.shields.io/david/dev/kriasoft/node-pg-client.svg?style=flat-square)](https://david-dm.org/kriasoft/node-pg-client#info=devDependencies)

> Promise-based wrapper for [node-postgres](https://github.com/brianc/node-postgres)
> library designed for easy use with ES7 async/await.

### How to Install

```
$ npm install pg-client --save
```

### Getting Started

Usage sample in a Node.js/Express web app:

```js
import db from 'pg-client';
import { Router } from 'express';
import { connectionString } from '../config';

const router = new Router();

router.get('/users', (req, res, next) => {
  db.connect(connectionString, async ({ query }) => {
    const result = await query('SELECT id, email FROM users WHERE id = $1', 123);
    if (result.rowCount) {
      res.send(result.rows[0]);
    } else {
      res.sendStatus(404);
    }
  }).catch(next);
});

export default router;
```

### Related Projects

 * [Membership Database](https://github.com/membership/membership.db) — SQL database schema boilerplate for building web apps
 * [React Starter Kit](https://github.com/kriasoft/react-starter-kit) — Isomorphic web app boilerplate

### License

The MIT License © 2016 Kriasoft, LLC. All rights reserved. Made with ♥ by
Konstantin Tarkus ([@koistya](https://twitter.com/koistya)) and
[contributors](https://github.com/kriasoft/node-pg-client/graphs/contributors)
