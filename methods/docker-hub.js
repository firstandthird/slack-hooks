module.exports = (request, reply) => {
  const payload = request.payload;
  const tag = payload.push_data.tag;
  const repo = payload.repository.repo_name;
  const url = payload.repository.repo_url;
  const image = `${repo}:${tag}`;
  request.server.log(['success', 'docker-hub', image], {
    message: `${image} has been pushed.`,
    url
  });
  reply('ok');
};
