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
function Database(db) {
  this._db = db;
  this.defaults = db.defaults;
}

Database.prototype.connect = function connect(connString, callback) {
  return new Promise((resolve, reject) => {
    const options = typeof connString === 'function' ? connString() : connString;
    this._db.connect(options, (err, client, done) => {
      if (err) {
        if (client) {
          // Remove the client from the connection pool.
          done(client);
        }
        reject(err);
      } else {
        resolve(callback(new Client(client)).then((result) => {
          done();
          return result;
        }).catch(error => {
          done(client);
          throw error;
        }));
      }
    });
  });
};

Database.prototype.end = function end() {
  this._db.end();
};

export default Database;
