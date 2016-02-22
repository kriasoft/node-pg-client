/**
 * ES7 Async/Await Client for PostgreSQL
 * https://github.com/kriasoft/node-pg-client
 *
 * Copyright © 2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import pg from 'pg';
import { describe, it } from 'mocha';
import { expect } from 'chai';
import Database from '../src/Database';

describe('Database', () => {
  it('Should connect to a database.', () => {
    // TODO: Write some unit tests.
    const db = new Database(pg);
    expect(db).to.be.ok;
  });
});
