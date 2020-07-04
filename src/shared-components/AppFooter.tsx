import * as moment from 'moment';
import * as React from 'react';
import {
  Small,
  Toolbar,
} from 'rebass';

const AppFooter = () => (
  <Toolbar bg="white">
    <Small ml="auto">
      <a href="https://603.nz" style={{ cursor: 'pointer', color: 'black' }}>
        {`SECRET: ${window.env.APP_SECRET} | © 603.nz ${moment().year()}`}
      </a>
    </Small>
  </Toolbar>
);

export default AppFooter;
