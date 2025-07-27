/**
 * Tailwind CSS classes for styling the Home page component.
 */
export const homePageStyles = {
  /** Container wrapper: max width, centered, padding */
  container: "max-w-4xl mx-auto p-6",

  /** Title styling: large text, bold font, bottom margin */
  title: "text-3xl font-bold mb-6",

  /** "Add User" button styling */
  addUserButton:
    "inline-block mb-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition",

  /** User list styling */
  userList: "space-y-4",

  /** Pagination container */
  paginationWrapper: "mt-8 flex justify-between",

  /** Pagination links */
  paginationLink: "text-blue-600 hover:underline",

  /** Search form container */
  searchForm: "mb-4 flex gap-2",

  /** Search input field */
  searchInput: "border px-3 py-2 rounded w-full",

  /** Search button */
  searchButton:
    "px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition",
}
