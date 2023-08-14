import bcrypt from "bcrypt";

export function generatePassword(password: string): string | null {
  const salt = process.env.SALT;
  if (salt) {
    return bcrypt.hashSync(password, parseInt(salt));
  }
  return null;
}
