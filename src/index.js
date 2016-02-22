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
import Database from './Database';

export default new Database(pg);
