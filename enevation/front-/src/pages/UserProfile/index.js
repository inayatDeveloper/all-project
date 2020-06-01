import React from 'react';
import LeftSection from './LeftSidebar';
import ProfileHeader from './ProfileHeader';
import CreatePost from 'components/CreatePost';
import RightSection from './RightSidebar';
import Post from 'components/Post';

import { Query } from 'react-apollo';
import { GET_USER_POSTS, GET_USER } from 'graphql/user';

import { useStore } from 'store';

export default function Profile(props) {
  const [{ auth }] = useStore();
  const isSelma = !auth.user ? null : auth.user.role === 'selma';
  const isOwner = !auth.user
    ? null
    : auth.user.username === props.match.params.username;

  const queryOptions = {
    query: GET_USER_POSTS,
    variables: { username: props.match.params.username, skip: 0, limit: 15 },
    callback: 'getUserPosts',
  };
  return (
    <Query
      query={GET_USER}
      variables={{ username: props.match.params.username }}
      notifyOnNetworkStatusChange
    >
      {({ data, loading }) => {
        // TODO: Understand why data is null after verifying account and handle appropriately
        return loading || data == null ? (
          <h1></h1>
        ) : (
          <div className='container'>
            <div className='row ' style={{ paddingLeft: 0, paddingRight: 0 }}>
              <ProfileHeader
                isSelma={isSelma}
                isOwner={isOwner}
                auth={auth}
                username={props.match.params.username}
                user={data.getUser}
                refetch={props.refetch}
              />
              <div className='col col-xl-6 order-xl-2 col-lg-12 order-lg-1 col-md-12 col-sm-12 col-12'>
                <div id='newsfeed-items-grid'>
                  {isOwner || isSelma ? <CreatePost /> : null}

                  <Post queryOptions={queryOptions} isAuth={true} />
                </div>
              </div>
              <LeftSection user={data.getUser} />
              <RightSection user={data.getUser} />
            </div>
          </div>
        );
      }}
    </Query>
  );
}
