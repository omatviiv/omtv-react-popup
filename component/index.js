// @flow
import React, {
  useRef, useEffect,
} from 'react';
import styled from 'styled-components';

/*::
import type { Node } from 'react';

type Props = {|
  visible?: boolean,
  onClose: * => any,
  children: Node,
  theme?: {|
    Main: * => Node,
  |},
  rest?: any,
|}
*/
export const thm = {
  Main: styled.div`
    display: ${ props => props.visible ? 'block' : 'none' };
    padding: 5px 10px;
    background: white;
    border: 1px solid grey;
    position: absolute;
  `,
};
const Component = ({
  visible = false,
  onClose,
  children,
  theme = thm,
  ...rest
}/*: Props*/) => {
  const node = useRef();

  const handleClickOutside = (e: any) => {
    if (node && node.current && node.current.contains(e.target)) {
      // inside click:
      return;
    };

    // outside click:
    onClose();
  };

  useEffect(() => {
    // register click outside handler
    document.addEventListener('mousedown', handleClickOutside);

    // remove event handlers from the document once component unmounts
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <theme.Main ref={node} visible={visible} {...rest}>
      {children}
    </theme.Main>
  );
};

export default Component;
