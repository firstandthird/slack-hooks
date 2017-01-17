'use strict';
exports.home = {
  path: '/',
  method: 'GET',
  handler(request, reply) {
    reply('slack-hooks running');
  }
};

exports.hook = {
  path: '/hook/{hookName}',
  method: 'POST',
  handler(request, reply) {
    const server = request.server;
    console.log(request.params.hookName);
    console.log(server.methods);
    const hookName = request.params.hookName;
    if (server.methods[hookName]) {
      return server.methods[hookName](request, reply);
    }
    reply('not found').code(400);
  }
};
