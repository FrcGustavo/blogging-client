type OptionalEnvVar = string | undefined;

export const api: OptionalEnvVar = process.env.API;
export const apiKey: OptionalEnvVar = process.env.API_KEY;
export const githubProfile: OptionalEnvVar = process.env.NEXT_PUBLIC_GITHUB_PROFILE;
export const linkedinProfile: OptionalEnvVar = process.env.NEXT_PUBLIC_LINKEDIN_PROFILE;
export const contactEmail: OptionalEnvVar = process.env.NEXT_PUBLIC_CONTACT_EMAIL;
