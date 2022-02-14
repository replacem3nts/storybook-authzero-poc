import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { addons, types } from '@storybook/addons';

import { AddonPanel } from '@storybook/components';

const ADDON_ID = 'myaddon';
const PANEL_ID = `${ADDON_ID}/panel`;

// give a unique name for the panel
const MyPanel = () => {
  const { isAuthenticated, loginWithRedirect, isLoading, user } = useAuth0()
  console.log(isLoading, 'isLoading');
  console.log(isAuthenticated, 'isAuthenticated');
  console.log(user, 'user');
  return <div>HELLO</div>
};

addons.register(ADDON_ID, (api) => {
  addons.add(PANEL_ID, {
    type: types.PANEL,
    title: 'My Addon',
    render: ({ active, key }) => (
      <AddonPanel active={active} key={key}>
        <MyPanel >{console.log('I rendered')}</MyPanel>
      </AddonPanel>
    ),
  });
});