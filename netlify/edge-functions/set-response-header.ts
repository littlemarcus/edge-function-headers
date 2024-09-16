// import type { Context, Config } from "@netlify/edge-functions";

// export default async (request: Request, context: Context) => {
//     const response = await context.next();
//     response.headers.set("x-NF-Edge-Functions", "A custom value");
//     return response;
//   };

// export const config: Config = {
//   path: "/*",
// };