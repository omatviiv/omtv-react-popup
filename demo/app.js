// @flow
import React, { useState } from 'react';
import styled from 'styled-components';

import Component from 'componnt';

const App = () => {
  const [{ popupVisible }, setPopupVisible] = useState({ popupVisible: false });

  const openPopup = () => setPopupVisible({ popupVisible: true })
  const closePopup = () => setPopupVisible({ popupVisible: false })

  return (
    <>
      <button onClick={ openPopup }>
        show popup
      </button>
      <Component visible={ popupVisible } onClose={ closePopup }>
        Popup content...<br/><br/>
        Click outside to close the popup.
      </Component>
    </>
  );
};

export default App;
