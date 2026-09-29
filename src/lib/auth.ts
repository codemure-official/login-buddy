export const DEMO_CREDENTIALS = {
  email: "demo@privacybuddy.dev",
  password: "privacy123",
} as const;

export async function authenticateDemo(email: string, password: string) {
  await new Promise((resolve) => setTimeout(resolve, 1250));
  return email.toLowerCase() === DEMO_CREDENTIALS.email && password === DEMO_CREDENTIALS.password;
}
