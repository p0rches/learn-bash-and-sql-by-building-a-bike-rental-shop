/*const assert = require('assert');
const { getLastCommand } = require('./utils');
const { Client } = require('pg');

const database = 'bikes';
const connectionString = `postgresql://postgres@localhost:5432/${database}`;
const client = new Client({
  connectionString: connectionString,
});

describe('You', () => {
  it('should run your script by executing it', async () => {
    const lastCommand = await getLastCommand();
    const query = `SELECT rental_id FROM customers INNER JOIN rentals USING(customer_id) WHERE phone = '000-0000' AND name = 'Test'`;

    try {
      await client.connect();
      const res = await client.query(query);

      assert(res.rowCount > 1 && lastCommand[0] === './bike-shop.sh' && (lastCommand[1] === undefined || lastCommand[1].op === ';'));
    } catch (err) {
      assert(false);
    } finally {
      await client.end();
    }
  });
});*/
