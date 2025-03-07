import bcrypt from 'bcrypt';

const saltRounds = 8;

export async function hash(password) {
    return await bcrypt.hash(password, saltRounds);
}

export async function sameHash(password, hashedPassword) {
    return await bcrypt.compare(password, hashedPassword);
}