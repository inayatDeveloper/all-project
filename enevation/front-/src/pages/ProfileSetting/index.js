import React from 'react';
import PropTypes from 'prop-types';

import { Route, Switch, withRouter } from 'react-router-dom';

import MainLayout from './MainLayout';
import { PersonalInfo, ChangePassword } from 'components/ProfileSetting';
import Notifications from './Notifications';

import * as Routes from 'routes';

const route = ({ refetch, match }) => {
  return (
    <MainLayout>
      <Switch>
        <Route
          exact
          path={`${match.path}/change-password`}
          render={props => <ChangePassword {...props} />}
        />
        <Route
          exact
          path={`${match.path}/notifications`}
          render={props => <Notifications {...props} />}
        />

        <Route
          path={Routes.SETTINGS}
          render={props => <PersonalInfo {...props} refetch={refetch} />}
        />
      </Switch>
    </MainLayout>
  );
};

route.propTypes = {
  match: PropTypes.object.isRequired,
};

export default withRouter(route);
