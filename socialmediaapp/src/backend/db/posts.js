import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    user_id: 1,
    post_id:1,
    imgSrc:"https://th.bing.com/th/id/OIP.yTU4CZ3Jovk2d6Vzd-88ZQHaEK?w=277&h=180&c=7&r=0&o=5&dpr=1.6&pid=1.7",
    firstName: "adarsh",
    lastName: "balika",
    username: "adrshikablika",
    password: "adrshika123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    isFollowing:false,
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
      likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: uuid(),
        username: "shubhamsoni",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "sohamshah",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },

   {
    user_id: 1,
    post_id:2,
    imgSrc:"https://th.bing.com/th/id/OIP.yTU4CZ3Jovk2d6Vzd-88ZQHaEK?w=277&h=180&c=7&r=0&o=5&dpr=1.6&pid=1.7",
    firstName: "adarsh",
    lastName: "balika",
    username: "adrshikablika",
    password: "adrshika123",
    isFollowing:false,
    createdAt: formatDate(),
    updatedAt: formatDate(),
    isFollowing:false,
    content:
      "the prison of life and bondage of sorrow are same , so why man shouold be free of sorrow before death",
      likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: uuid(),
        username: "shubhamsoni",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "sohamshah",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    user_id: 2,
    post_id:3,
    imgSrc:"https://th.bing.com/th/id/OIP.jNjUF8szRiXc8UxMyEtfxwHaHa?w=170&h=180&c=7&r=0&o=5&dpr=1.6&pid=1.7",
    firstName: "daniel",
    lastName: "shifman",
    username: "danielShifman",
    password: "danielShifman123",
    isFollowing:false,
    createdAt: formatDate(),
    updatedAt: formatDate(),
    content:
    "lets learn animation and creation in  p5.js today",
      likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: uuid(),
        username: "shubhamsoni",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "sohamshah",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },

   {
    user_id: 2,
    post_id:4,
    imgSrc:"https://th.bing.com/th/id/OIP.jNjUF8szRiXc8UxMyEtfxwHaHa?w=170&h=180&c=7&r=0&o=5&dpr=1.6&pid=1.7",
    firstName: "daniel",
    lastName: "shifman",
    username: "danielShifman",
    password: "danielShifman123",
    isFollowing:false,
    createdAt: formatDate(),
    updatedAt: formatDate(),
    content:
      "wanna deep dive in the creative sea of p5js but learn js first please",
      likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: uuid(),
        username: "shubhamsoni",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "sohamshah",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
 

  {
    user_id: 3,
    post_id:5,
    imgSrc:"https://th.bing.com/th/id/OIP.SsNo1TQldcw0amlglwC1zAHaLJ?w=194&h=292&c=7&r=0&o=5&dpr=1.6&pid=1.7",
    firstName: "aditay",
    lastName: "raj",
    username: "aditayraj",
    password: "aditayraj123",
    isFollowing:false,
    createdAt: formatDate(),
    updatedAt: formatDate(),
    content:
    "Sun Salutation Version B is here , click on the video below ",
      likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: uuid(),
        username: "shubhamsoni",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "sohamshah",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },

   {
    user_id: 3,
    post_id:6,
    imgSrc:"https://th.bing.com/th/id/OIP.SsNo1TQldcw0amlglwC1zAHaLJ?w=194&h=292&c=7&r=0&o=5&dpr=1.6&pid=1.7",
    firstName: "aditay",
    lastName: "raj",
    username: "aditayraj",
    password: "aditayraj123",
    isFollowing:false,
    createdAt: formatDate(),
    updatedAt: formatDate(),
    content:
      "Want to do HandStand , here is the 4 tricks to do handstand in short time",
      likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: uuid(),
        username: "shubhamsoni",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "sohamshah",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },


  {
    user_id: 4,
    post_id:7,
    imgSrc:"https://th.bing.com/th/id/OIP.tUhzmIAKsi_iCzGBvgzF6wAAAA?w=132&h=150&c=7&r=0&o=5&dpr=1.6&pid=1.7",
    firstName: "brad",
    lastName: "traversy",
    username: "bradtraversy",
    password: "traversymedia123",
    isFollowing:false,
    createdAt: formatDate(),
    updatedAt: formatDate(),
    content:
    "i have created a great series to learn react --react under the hoos ,, check it out on the internet ",
      likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: uuid(),
        username: "shubhamsoni",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "sohamshah",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },

   {
    user_id: 4,
    post_id:8,
    imgSrc:"https://th.bing.com/th/id/OIP.tUhzmIAKsi_iCzGBvgzF6wAAAA?w=132&h=150&c=7&r=0&o=5&dpr=1.6&pid=1.7",
    firstName: "brad",
    lastName: "traversy",
    username: "bradtraversy",
    password: "traversymedia123",
    isFollowing:false,
    createdAt: formatDate(),
    updatedAt: formatDate(),
    content:
      "want to start your journey into software development and production , check out my new course --full stack web dev by brad",
      likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: uuid(),
        username: "shubhamsoni",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "sohamshah",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
];
