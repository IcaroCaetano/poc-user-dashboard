/**
 * Tailwind CSS classes for styling the Home page component.
 */
export const homePageStyles = {
  /** Container wrapper: max width, centered, padding */
  container: "max-w-4xl mx-auto p-6",

  /** Title styling: large text, bold font, bottom margin */
  title: "text-3xl font-bold mb-6",

  /** "Add User" button styling: inline block, margin bottom, padding, blue background, white text, rounded corners, hover effect */
  addUserButton:
    "inline-block mb-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition",

  /** User list styling: vertical spacing between list items */
  userList: "space-y-4",

  /** Pagination container: margin top, flex layout, space-between alignment */
  paginationWrapper: "mt-8 flex justify-between",

  /** Pagination links styling: blue text, underline on hover */
  paginationLink: "text-blue-600 hover:underline",
}
