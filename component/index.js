// @flow
import React from 'react';
import styled from 'styled-components';

/*::
import type { Node } from 'react';

type Props = {|
  value: string,
  theme?: {|
    Main: * => Node,
    Strong: * => Node,
  |},
|}
*/
export const thm = {
  Main: styled.div`
    padding: 10px;
    border: 1px solid green;
  `,
  Strong: styled.strong``,
};
const Component = ({
  value,
  theme = thm,
}/*: Props*/) => (
  <theme.Main>
    Component with value '{ value }' and
    <theme.Strong> subwrapper</theme.Strong>
  </theme.Main>
);

export default Component;
