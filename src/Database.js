/**
 * ES7 Async/Await Client for PostgreSQL
 * https://github.com/kriasoft/node-pg-client
 *
 * Copyright © 2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import Promise from 'bluebird';
import Client from './Client';

/**
 * Promise-based wrapper for `node-postgres`
 * https://github.com/brianc/node-postgres/wiki/pg
 */
function Database(pg) {
  this.pg = pg;
  this.defaults = pg.defaults;
  this.connect = this.connect.bind(this);
  this.end = this.end.bind(this);
}

Database.prototype.connect = function connect(connString, callback) {
  return new Promise((resolve, reject) => {
    const options = typeof connString === 'function' ? connString() : connString;
    this.pg.connect(options, (err, client, done) => {
      if (err) {
        if (client) {
          // Remove the client from the connection pool.
          done(client);
        }
        reject(err);
      } else {
        callback(new Client(client)).then(result => {
          done();
          resolve(result);
        }, error => {
          done(client);
          reject(error);
        });
      }
    });
  });
};

Database.prototype.end = function end() {
  this.pg.end();
};

export default Database;
