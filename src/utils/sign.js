import crypto from 'crypto';

export const sign = (value) => {
    const private_key = `-----BEGIN PRIVATE KEY-----
    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
    8jrtGTZZZw358bu0phNrDMjExy47wrf+Gsj6YcMkEXZKbThfkUPCxRq3cU6VcXwF
    YFM2xhmv79kdbPZQIoSyevtbhxn++qr6lE12sRN+ANPkr4Un0qdpad0TXzzsVJvi
    3umShqq3C2Qk6z7CvTq6i80B/KmFXwJS4UzxawKCAQEAgbiyAvUjeP5SmTNC1Cwr
    cXVfhm7zllDVxgngn75HEdhmMJV/ca9NtrlvZbTAKldAZX8MnjHv/uBhlHbOwjtN
    Uc2IW8/eZ2U028SfR0VMv/ptxLn7wZdL8G+9MltSzq6+X4rvBF68Fg5ASPoSBKrM
    DC6ukI1LWR1m42C/TsJBoMHDe+A0UZYgPc12D8cNB7CxX6CH8B6VLgxAD8+oPD2A
    TmTUVfqUxAE0AqhUcIcTvq8Uy6yhsc/EzpoJpGt3HGP/gM7DrWiQlshtlnJbxHta
    bOyZB2/OiB157RbeBIdgddWKyNDZF2LMBqvA5ImitmsHVi6QNUbXYAU/lSrTkYjN
    fwKCAQEAyJtp75VfhP56/pF1VXm46fSyGxcvGhdyX3E23+T9L02lO6KIZF22lXCJ
    /OVMHPpj9ljXS/bkeZPMtsJR5kDvLY8PpWpYbkiMfWhj0/m5DaVvFbeo0f2VpGzZ
    k+87ynj1W9XN4QnjbDGkr6fn0YG3LLNelM+lbu0tDaTtl0DAJ4Rwys4XXbQuiZcX
    AE6e5AqLPlTWUgJR+IkVEMXyQITj7L4T0TAqHBFVW3nJFT0mH3sYU+zc3X58y2fm
    smLGbU3K7uSeyTMKs4tO9j5+SmO1srcgzktuCBp6/83o2F4/ppWWYOYiOqh9NYUW
    zahSYSeHlhFMmccTwP6UqGfDHIHrYw==
    -----END PRIVATE KEY-----
    `

    // Signing
    signer = crypto.createSign('RSA-SHA256');
    try {
        a = signer.write(value);
        console.log(a);
        signa = signer.sign(private_key, 'base64')
        console.log(signa)
    } catch (e) {
        console.log(e)
    }
    signer.end();


    console.log('Digital Signature: ', signa);

    return signa
}