const crypto = require('crypto');

const TRIVIAL_PARTITION_KEY = '0';
const MAX_PARTITION_KEY_LENGTH = 256;

const createHash = (data) => {
  return crypto.createHash('sha3-512').update(data).digest('hex');
};

const deterministicPartitionKey = (event) => {
  if (!event) return TRIVIAL_PARTITION_KEY;

  let candidate;

  if (event.partitionKey) {
    candidate =
      typeof event.partitionKey === 'string'
        ? event.partitionKey
        : JSON.stringify(event.partitionKey);
  } else {
    const data = JSON.stringify(event);
    candidate = createHash(data);
  }
  if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
    return createHash(candidate);
  }
  return candidate;
};

exports.createHash = createHash;
exports.deterministicPartitionKey = deterministicPartitionKey;
