const helloFunction = () => new Response("Hello world");

export default helloFunction;

export const config = {path: "/hello"};