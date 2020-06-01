import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
} from 'react-router-dom';
import Home from '../pages/HomeContainer/Home';
import UserProfile from 'pages/UserProfile';
import ProfileSetting from 'pages/ProfileSetting';

import { Sidebar } from '../components/Sidebar/index';
import TopHeader from './TopHeader';
import Discover from 'pages/Discover';
import Reward from 'pages/Reward';
import Badges from 'pages/Badges';
import Messages from 'pages/Messages';
import Faqs from 'pages/Faqs';
import CommunityGuideline from 'pages/CommunityGuideline';
import TermsAndServices from 'pages/TermsAndServices';
import PrivacyPolicy from 'pages/PrivacyPolicy';
import FeedbackForm from 'pages/FeedbackForm';
import SinglePost from 'pages/SinglePost';

import * as Routes from 'routes';
/**
 * All other routes of Entire App
 * can be restructure depends on Complexity
 */
const AppLayout = ({ refetch, history }) => {
  return (
    <div className='page-has-left-panels page-has-right-panels pr-0'>
      <Sidebar refetch={refetch} isAuth={true} />
      <TopHeader refetch={refetch} />
      {history.location.pathname === Routes.SETTINGS || Routes.BADGES ? (
        <div className='header-spacer header-spacer-small'></div>
      ) : history.location.pathname === Routes.REWARDS ? (
        <div className='remove-header-spacer'></div>
      ) : (
        <div className='header-spacer'></div>
      )}
      <Switch>
        <Route path={Routes.DISCOVER} render={() => <Discover />} />
        <Route
          path={Routes.SETTINGS}
          render={() => <ProfileSetting refetch={refetch} />}
        />
        <Route path={Routes.REWARDS} render={props => <Reward {...props} />} />
        <Route
          path={Routes.MESSAGES}
          render={props => <Messages refetch={refetch} {...props} />}
        />
        <Route path={Routes.FAQ} render={props => <Faqs {...props} />} />

        <Route
          path={Routes.COMMUNITY_GUIDELINE}
          render={props => <CommunityGuideline {...props} />}
        />

        <Route
          path={Routes.TERM_AND_CONDITIONS}
          render={props => <TermsAndServices isAuth={true} {...props} />}
        />
        <Route
          exact
          path={Routes.PRIVACY_POLICY}
          render={props => <PrivacyPolicy isAuth={true} {...props} />}
        />
        <Route
          exact
          path={Routes.FORM}
          render={props => (
            <FeedbackForm refetch={refetch} isAuth={true} {...props} />
          )}
        />
        <Route path={Routes.BADGES} render={props => <Badges {...props} />} />
        <Route
          exact
          path={Routes.USER_PROFILE}
          render={props => <UserProfile refetch={refetch} {...props} />}
        />
        <Route
          exact
          path={Routes.POST}
          render={props => (
            <SinglePost refetch={refetch} isAuth={true} {...props} />
          )}
        />
        <Route path={Routes.HOME} render={props => <Home {...props} />} />
      </Switch>
    </div>
  );
};
export default withRouter(AppLayout);
