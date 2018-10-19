import React from 'react';

import NavTop from '../components/nav-top';
import NavSide from '../components/nav-side';



export default({children}) => {
    return (
        <div className="wrapper">
            <NavTop/>
            <div className="content">
              <NavSide/>
              <div className="content_right">
                  <div className="main-content">
                      {children}
                  </div>
              </div>
            </div>
        </div>
    )
}