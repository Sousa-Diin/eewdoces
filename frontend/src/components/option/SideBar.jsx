import React from "react";

import './sidebar.css';
import Options from "../card/opcoes/Options";

const SideBar = ({visible, handleVisibleContainer}) => {

  return (
    <aside className={`cantainer-main-option ${visible ? 'open' : ''}`}>
      <Options handleVisibleContainer={handleVisibleContainer}/>
    </aside>
  )

}

export default SideBar;