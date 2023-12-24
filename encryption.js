const crypto = require('crypto');

const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
  modulusLength: 2048,
  publicKeyEncoding: { type: 'spki', format: 'pem' },
  privateKeyEncoding: { type: 'pkcs8', format: 'pem' },
});

function encrypt(data, publicKey) {
    return crypto.publicEncrypt(publicKey, Buffer.from(data)).toString('base64');
}

function decrypt(encryptedData, privateKey) {
    const buffer = Buffer.from(encryptedData, 'base64');
    return crypto.privateDecrypt({ key: privateKey, passphrase: '' }, buffer).toString('utf-8');
}

const plainText = 'Wussup';
const encryptedData = encrypt(plainText, publicKey);
console.log('Encrypted:', encryptedData);

const decryptedData = decrypt(encryptedData, privateKey);
console.log('Decrypted:', decryptedData);



