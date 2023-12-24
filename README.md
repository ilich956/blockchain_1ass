# Asymmetric Encryption and Digital Signature Implementation

This project involves the manual implementation of asymmetric encryption and the development of a digital signature mechanism without using pre-existing libraries.

## Tasks and Point Distribution

### Asymmetric Encryption Implementation 

In this task, we manually implement asymmetric encryption without relying on pre-existing libraries. Asymmetric encryption involves the use of a key pair (public and private) to encrypt and decrypt data securely.

#### Implementation Details

1. **Key Pair Generation:**
   - Use a secure method to generate an RSA key pair with a modulus length of 2048 bits.
   - Store the public key and private key.

2. **Encryption:**
   - Implement a function that takes plaintext as input and encrypts it using the public key.

3. **Decryption:**
   - Implement a function that takes the encrypted data and decrypts it using the private key.

#### Example Code

```javascript
const { publicKey, privateKey } = generateKeyPair();
const encryptedData = encrypt('Wussup', publicKey);
const decryptedData = decrypt(encryptedData, privateKey);
