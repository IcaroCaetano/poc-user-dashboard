import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
        About this Project
      </h1>

      <p className="mb-4 text-gray-700 dark:text-gray-300">
        This is a simple user dashboard built with <strong>Next.js</strong>, <strong>React</strong> and <strong>TypeScript</strong>.
        It demonstrates routing, data handling, pagination, and styling using <strong>Tailwind CSS</strong>.
      </p>

      <p className="mb-4 text-gray-700 dark:text-gray-300">
        All user data is mocked and stored in memory. No backend is used.
        It also supports automatic dark mode using <code>prefers-color-scheme</code>.
      </p>

      <p className="mb-6 text-gray-700 dark:text-gray-300">
        This project was created as a proof of concept (PoC) to practice full-stack fundamentals in the frontend.
      </p>

      <Link href="/" className="text-blue-600 hover:underline">
        ⬅ Back to Home
      </Link>
    </div>
  )
}
