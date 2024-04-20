// Import the 'route' object from the '@fal-ai/serverless-proxy/nextjs' package.
// This object provides methods for handling different HTTP methods in a Next.js serverless function.
import { route } from "@fal-ai/serverless-proxy/nextjs";

// Destructure the 'GET' and 'POST' methods from the 'route' object and export them.
// These methods can be used to handle GET and POST requests in your serverless functions.
export const { GET, POST } = route;