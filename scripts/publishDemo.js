const client = require('scp2');
const componentName = require('../package.json').name;
const { pwd, host } = require('./secret');
const prompt = require('password-prompt');

const copy = (p) => {
  const path = `${ componentName }`;
  console.log(`copyting to ${ host }:${ path }`);
  client.scp(
    './demo/dist',
    `omatviiv:${ p }@${ host }:${ path }`,
    e => console.error(e),
  );
};

if (pwd) {
  copy(pwd);
} else {
  prompt('To publish demo enter password: ', { method: 'hide' })
  .then(copy)
  .catch(e => console.error(e));
};
