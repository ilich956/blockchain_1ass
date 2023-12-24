const crypto = require('crypto');

const privateKey= ''

function sign(data, privateKey) {
    const sign = crypto.createSign('SHA256');
    sign.write(data);
    sign.end();
    return sign.sign(privateKey, 'base64');
}

function verify(data, signature, publicKey) {
    const verify = crypto.createVerify('SHA256');
    verify.write(data);
    verify.end();
    return verify.verify(publicKey, signature, 'base64');
}

const dataToSign = 'Hello, World!';
const signature = sign(dataToSign, privateKey);
console.log('Signature:', signature);

const isSignatureValid = verify(dataToSign, signature, publicKey);
console.log('Is Signature Valid:', isSignatureValid);
