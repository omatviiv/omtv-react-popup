// @flow
import React, { useState } from 'react';
import {
  Article, Header, Comment, Component, Code,
} from 'omtv-theme/theme/demoArticle';

import Popup from 'componnt';

const Artcl = () => {
  const [{ popupVisible }, setPopupVisible] = useState({ popupVisible: false });

  const openPopup = () => setPopupVisible({ popupVisible: true })
  const closePopup = () => setPopupVisible({ popupVisible: false })

  return (
    <Article>
      <Component>
        <button onClick={ openPopup }>
          show popup
        </button>
        <Popup visible={ popupVisible } onClose={ closePopup }>
          Popup content...<br/><br/>
          Click outside to close the popup.
        </Popup>
      </Component>
      <Comment>
        Click on the button above to show the popup.
      </Comment>
      <Code>{ `
import React, { useState } from 'react';
import Popup from 'omtv-react-popup';

const App = () => {
  const [{ popupVisible }, setPopupVisible] = useState({
    popupVisible: false,
  });

  const openPopup = () => setPopupVisible({ popupVisible: true })
  const closePopup = () => setPopupVisible({ popupVisible: false })

  return (
    <button onClick={ openPopup }>
      show popup
    </button>
    <Popup visible={ popupVisible } onClose={ closePopup }>
      Popup content...<br/><br/>
      Click outside to close the popup.
    </Popup>
  );
};
      ` }</Code>
    </Article>
  );
};

export default Artcl;
