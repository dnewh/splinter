/**
 * Copyright 2018-2020 Cargill Incorporated
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import NavItem from './NavItem';

function SideNav(props) {
  const { userSaplingRoutes } = props;
  const userSaplingTabs = userSaplingRoutes.map(
    ({ path, displayName, logo }) => {
      return <NavItem key={path} path={path} label={displayName} logo={logo} />;
    }
  );

  return (
    <div className="side-nav">
      <a href="/" className="brand">
        <div />
      </a>
      <div className="nav-items">
        {userSaplingTabs}
        <hr />
        <div className="nav-tab">
          <FontAwesomeIcon className="icon" icon="leaf" />
          <div className="label">Saplings</div>
        </div>
      </div>
      <div className="canopy-items">
        <ProfileTab />
      </div>
    </div>
  );
}

function ProfileTab() {
  const profileClasses = classnames('profile-tab', 'tab', {
    'page-active': `${window.location.pathname.split('/')[1]}` === 'profile'
  });

  return (
    <a href="/profile" className={profileClasses}>
      <FontAwesomeIcon className="icon" icon="user-circle" />
    </a>
  );
}

SideNav.propTypes = {
  userSaplingRoutes: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      displayName: PropTypes.string.isRequired
    })
  )
};

SideNav.defaultProps = {
  userSaplingRoutes: []
};

export default SideNav;
