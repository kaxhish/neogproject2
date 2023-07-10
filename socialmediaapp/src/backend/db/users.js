import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    imgSrc:"https://th.bing.com/th/id/OIP.yTU4CZ3Jovk2d6Vzd-88ZQHaEK?w=277&h=180&c=7&r=0&o=5&dpr=1.6&pid=1.7",
    firstName: "adarsh",
    lastName: "balika",
    username: "adrshikablika",
    password: "adrshika123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    imgSrc:"https://th.bing.com/th/id/OIP.jNjUF8szRiXc8UxMyEtfxwHaHa?w=170&h=180&c=7&r=0&o=5&dpr=1.6&pid=1.7",
    firstName: "daniel",
    lastName: "shifman",
    username: "danielShifman",
    password: "danielShifman123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    imgSrc:"https://th.bing.com/th/id/OIP.SsNo1TQldcw0amlglwC1zAHaLJ?w=194&h=292&c=7&r=0&o=5&dpr=1.6&pid=1.7",
    firstName: "aditay",
    lastName: "rajishan",
    username: "aditayraj",
    password: "aditayraj123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    imgSrc:"https://th.bing.com/th/id/OIP.tUhzmIAKsi_iCzGBvgzF6wAAAA?w=132&h=150&c=7&r=0&o=5&dpr=1.6&pid=1.7",
    firstName: "brad",
    lastName: "traversy",
    username: "bradtraversy",
    password: "traversymedia123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
