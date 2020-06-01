import gql from 'graphql-tag';
import {
  postCommentsPayload,
  postAuthorPayload,
  postLikesPayload,
} from './post';

/**
 * Records to select from user
 */
const userPayload = `
id
firstName
lastName
email
username
location
phone
gender
bio
birthday
password
image
imagePublicId
coverImage
coverImagePublicId
isOnline
isVerified
isBanned
isGuru
isPick
role
level
accountPoints
likePoints
commentPoints
sharePoints
referralPoints
gamePoints
totalPoints
pagesViewed
createdAt
updatedAt
`;

/**
 * Gets specific user by email
 */
export const GET_USER = gql`
  query($username: String, $id: ID) {
    getUser(username: $username, id: $id) {
      ${userPayload}
      posts {
        id
      }
      following {
        id
        user
        follower
      }
      followers {
        id
        user
        follower
      }
      notifications {
        id
        author {
          id
          username
        }
        follow {
          id
          user
        }
        like {
          id
        }
        comment {
          id
        }
      }
    }
  }
`;

/**
 * Gets user posts
 */
export const GET_USER_POSTS = gql`
  query($username: String!, $skip: Int, $limit: Int) {
    getUserPosts(username: $username, skip: $skip, limit: $limit) {
      count
      posts {
        id
        content
        image
        imagePublicId
        createdAt
        ${postAuthorPayload}
        ${postCommentsPayload}
        ${postLikesPayload}

        post {
          id
          content
          image
          imagePublicId
          createdAt
          author {
            id
            firstName
            lastName
            username
          }
          ${postLikesPayload}
          ${postCommentsPayload}
        }
        user {
          id
          firstName
          lastName
          username
        }
      }
    }
  }
`;

/**
 * Gets authenticated user
 */
export const GET_AUTH_USER = gql`
  query {
    getAuthUser {
      ${userPayload}
      newNotifications {
        id
        createdAt
        author {
          id
          firstName
          lastName
          username
          image
          role
        }
        follow {
          id
        }
        comment {
          id
          post {
            id
            image
          }
        }
        like {
          id
          post {
            id
            image
          }
        }
      }
      newConversations {
        id
        username
        firstName
        lastName
        image
        lastMessage
        lastMessageCreatedAt
      }
      likes {
        id
        user
        post
      }
      posts {
        id
      }
      following {
        id
        user
        follower
      }
      followers {
        id
        user
        follower
      }
    }
  }
`;

/**
 * Gets all available users
 */
export const GET_USERS = gql`
  query($userId: String!, $skip: Int, $limit: Int) {
    getUsers(userId: $userId, skip: $skip, limit: $limit) {
      count
      users {
        id
        firstName
        lastName
        username
        image
        role
        following {
          id
          user
        }
        followers {
          id
        }
        notifications {
          id
          author {
            id
            username
          }
          follow {
            id
          }
        }
      }
    }
  }
`;

/**
 * Searches users by username or name
 */
export const SEARCH_USERS = gql`
  query($searchQuery: String!) {
    searchUsers(searchQuery: $searchQuery) {
      id
      firstName
      lastName
      username
      image
      role
    }
  }
`;

/**
 * Uploads user photo
 */
export const UPLOAD_PHOTO = gql`
  mutation($input: UploadUserPhotoInput!) {
    uploadUserPhoto(input: $input) {
      id
    }
  }
`;

/**
 * Sign up user
 */
export const SIGN_UP = gql`
  mutation($input: SignUpInput!) {
    signup(input: $input) {
      token
    }
  }
`;

/**
 * Sign in user
 */
export const SIGN_IN = gql`
  mutation($input: SignInInput!) {
    signin(input: $input) {
      token
    }
  }
`;

/**
 * Request reset password
 */
export const REQUEST_PASSWORD_RESET = gql`
  mutation($input: RequestPasswordResetInput!) {
    requestPasswordReset(input: $input) {
      message
    }
  }
`;

/**
 * Verify reset password token
 */
export const VERIFY_TOKEN = gql`
  query($email: String!, $token: String!) {
    verifyToken(email: $email, token: $token) {
      message
    }
  }
`;

/**
 * Reset password
 */
export const RESET_PASSWORD = gql`
  mutation($input: ResetPasswordInput!) {
    resetPassword(input: $input) {
      token
    }
  }
`;

/**
 * Reset password
 */
export const VERIFY_ACCOUNT = gql`
  mutation($input: VerifyAccountInput!) {
    verifyAccount(input: $input) {
      token
    }
  }
`;

/**
 * People suggestions for auth user
 */
export const USER_SUGGESTIONS = gql`
  query($userId: String!) {
    suggestPeople(userId: $userId) {
      id
      firstName
      lastName
      username
      image
    }
  }
`;

/**
 * People suggestions for auth user
 */
export const GET_TOP_USERS = gql`
  query($userId: String!, $skip: Int, $limit: Int) {
    getTopUsers(userId: $userId, skip: $skip, limit: $limit) {
      id
      firstName
      lastName
      username
      image
    }
  }
`;

/**
 * Get users with whom authUser had a conversation
 */
export const GET_CONVERSATIONS = gql`
  query($authUserId: ID!) {
    getConversations(authUserId: $authUserId) {
      id
      username
      firstName
      lastName
      image
      isOnline
      seen
      lastMessage
      lastMessageSender
      lastMessageCreatedAt
    }
  }
`;

/**
 * Checks if user is online in real time
 */
export const IS_USER_ONLINE_SUBSCRIPTION = gql`
  subscription($authUserId: ID!, $userId: ID!) {
    isUserOnline(authUserId: $authUserId, userId: $userId) {
      userId
      isOnline
    }
  }
`;

/**
 * Checks if user is online in real time
 */
export const EDIT_ACCOUNT = gql`
  mutation($id: ID!, $input: EditAccountInput!) {
    editAccount(id: $id, input: $input) {
      firstName
      lastName
      email
      username
      location
      phone
      gender
      bio
      birthday
      password
      image
      imagePublicId
      coverImage
      coverImagePublicId
      isBanned
      isGuru
      isPick
      role
      level
      accountPoints
      likePoints
      commentPoints
      sharePoints
      referralPoints
      gamePoints
      totalPoints
      pagesViewed
      updatedAt
    }
  }
`;
