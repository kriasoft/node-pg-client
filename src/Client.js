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

/**
 * Promise-based wrapper for pg.Client
 * https://github.com/brianc/node-postgres/wiki/Client
 */
function Client(client) {
  this._client = client;
  this.query = this.query.bind(this);
  this.end = this.end.bind(this);
}

Client.prototype.query = function query(sql, ...args) {
  return new Promise((resolve, reject) => {
    if (args.length) {
      this._client.query(sql, args, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    } else {
      this._client.query(sql, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    }
  });
};

Client.prototype.end = function end() {
  this._client.end();
};

export default Client;
