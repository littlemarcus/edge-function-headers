const helloFunction = () => new Response("Hello, World!", {
    headers: { "test-header": "hello" }
  });

export default helloFunction;