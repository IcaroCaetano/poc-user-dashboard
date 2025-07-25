/**
 * Tailwind CSS classes for styling the UserDetail page component.
 */
export const userDetailStyles = {
/* @property {string} container - Sets a maximum width (max-w-xl), centers the container horizontally (mx-auto),
 * and adds padding (p-6) for spacing around the content.
 */
  container: "max-w-xl mx-auto p-6",

/* @property {string} backButton - Adds bottom margin (mb-4), sets link color to blue (text-blue-600),
 * and adds underline on hover (hover:underline).
 */
  backButton: "mb-4 text-blue-600 hover:underline",

/* @property {string} header - Applies a flex container (flex), aligns items vertically (items-center),
 * adds horizontal spacing between items (space-x-6), and bottom margin (mb-6).
 */
  header: "flex items-center space-x-6 mb-6",

/* @property {string} avatar - Styles the user's avatar with rounded edges (rounded-full) and a border (border).
 */
  avatar: "rounded-full border",

/* @property {string} name - Styles the user's name with a large font size (text-3xl) and bold weight (font-bold).
 */
  name: "text-3xl font-bold",

/* @property {string} info - Adds vertical spacing between child elements (space-y-2) to group user info sections.
 */
  info: "space-y-2",

/* @property {string} websiteLink - Sets the text color to blue (text-blue-600) and underlines the link on hover.
 */
  websiteLink: "text-blue-600 hover:underline",

/* @property {string} actions - Adds top margin (mt-8) to separate actions from content above,
 * and horizontal spacing between buttons (space-x-4).
 */
  actions: "mt-8 space-x-4",

/* @property {string} editButton - Styles the edit button with horizontal (px-4) and vertical (py-2) padding,
 * a yellow background (bg-yellow-400), rounded corners (rounded), a darker hover effect (hover:bg-yellow-500),
 * and a smooth transition animation (transition).
 */
  editButton: "px-4 py-2 bg-yellow-400 rounded hover:bg-yellow-500 transition",

/* @property {string} deleteButton - Styles the delete button with padding, red background (bg-red-500),
 * white text (text-white), rounded corners, a darker hover background (hover:bg-red-600),
 * and a transition effect.
 */
  deleteButton: "px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition",

/* @property {string} notFoundContainer - Adds padding (p-6) to the fallback container displayed when the user is not found.
 */
  notFoundContainer: "p-6",
}
