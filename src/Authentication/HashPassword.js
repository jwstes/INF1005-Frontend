

export async function hashPassword(password, salt) {
    const encoder = new TextEncoder();
    const dataToHash = encoder.encode(password + salt);
    const hashBuffer = await crypto.subtle.digest('SHA-256', dataToHash);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashedPassword = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

    return hashedPassword;
}