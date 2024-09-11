import type { Context } from "@netlify/edge-functions";
export default async (request: Request, context: Context) => {
return Response.json({ geo: context.geo, ip: context.ip, XFF: request.headers.get('X-Forwarded-For') });
}

export const config = {path: "/geo"};