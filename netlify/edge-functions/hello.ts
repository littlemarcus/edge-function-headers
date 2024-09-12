const helloFunction = () => new Response("Hello, World!", {
    headers: { "x-nf-edge-functions": "hello" }
  });

export default helloFunction;

export const config = {path: "/hello"};