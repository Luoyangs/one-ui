exports.package = {
  path: 'packages/index.ts',
  temp:
`
<% for %>
export { default as <%COMPONENT%> } from './<%component%>/index';
<% /for %>
`
}

exports.typing = {
  path: 'types/one-ui.d.ts',
  temp:
`
<% for %>
export { default as <%COMPONENT%> } from './<%component%>';
<% /for %>
`
}

exports.index = {
  path: 'src/index.ts',
  temp:
`
  <% for %>
  <%COMPONENT%>,
  <% /for %>
`
}
