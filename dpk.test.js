const { deterministicPartitionKey, createHash } = require('./dpk');

describe('deterministicPartitionKey', () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe('0');
  });
  it('Returns given partition key when it has length less than or equal to max partition key length', () => {
    const shortKey = deterministicPartitionKey({ partitionKey: 'shortKey' });
    expect(shortKey).toBe('shortKey');
  });
  it('Returns hash of partition key when it is longer than max partition key length', () => {
    const hashedKey = deterministicPartitionKey({
      partitionKey: 'a'.repeat(257),
    });
    expect(hashedKey).toBe(createHash('a'.repeat(257)));
  });
  it('Returns hash of stringified event when no partition key is passed', () => {
    const key = deterministicPartitionKey({ differentKey: 'differentKey' });
    expect(key).toBe(
      createHash(JSON.stringify({ differentKey: 'differentKey' }))
    );
  });
  it('Returns stringified partition key when it is not a string, and has length less or equal to max partition key length', () => {
    const shortKey = deterministicPartitionKey({ partitionKey: { test: 0 } });
    expect(shortKey).toBe(JSON.stringify({ test: 0 }));
  });
  it('Returns hash of stringified partition key when it is not a string, and has length greater than max partition key length', () => {
    const shortKey = deterministicPartitionKey({
      partitionKey: { test: 'a'.repeat(257) },
    });
    expect(shortKey).toBe(
      createHash(JSON.stringify({ test: 'a'.repeat(257) }))
    );
  });
});
