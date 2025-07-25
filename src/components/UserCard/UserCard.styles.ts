/**
 * Utility styles for the UserCard component.
 */
export const userCard = {
  /** Main container of the user card */
  wrapper:
    "block p-4 bg-white dark:bg-zinc-900 rounded-lg shadow-md hover:bg-gray-100 dark:hover:bg-zinc-800 transition",

  /** Inner container that aligns the avatar and user info */
  container: "flex items-center space-x-4",

  /** Styling for the user's avatar image */
  avatar: "rounded-full border",

  /** Styling for the user's name text */
  name: "text-lg font-semibold",

  /** Styling for the user's email text */
  email: "text-sm text-gray-600 dark:text-gray-400",
}
