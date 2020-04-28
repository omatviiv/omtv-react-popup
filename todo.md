[//]: # ()

- move to @ompy
- make handleClickOutside in capturing phase
- move default theme to theme.js
- scp2 lodash vulnerability (not critical because scp2 is only used for
  deploy script)
  in future scp should be replaced with ci/cd and some docker setup
  https://github.com/spmjs/node-scp2/issues/116
  https://github.com/spmjs/node-scp2/pull/123

# 0.0.2 -
+ npm audit fix
+ webpack to show only warnings and erros
+ fix rest in args
+ use rest instead className
  since it will include all extra props like event handlers className etc.
+ add className to support extenging styles with styled components

# 0.0.1 - initial component version
+ update docs with specific instructions for a component(s)
+ make demo
+ fix tests
+ implement component
+ update package.json with project specific data
  name (unique on npmjs), description, repository, bugs and homepage urls
