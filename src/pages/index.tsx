import { GetServerSideProps } from "next"
import { getUsers } from "../services/userService"
import { User } from "../types/User"
import Link from "next/link"

interface Props {
  users: User[]
  page: number
}

export default function Home({ users, page }: Props) {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Users - Page {page}</h1>

      <Link
        href="/add-user"
        className="inline-block mb-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        ➕ Add User
      </Link>

      <ul className="space-y-4">
        {users.map((user) => (
          <li key={user.id}>
            <Link
              href={`/users/${user.id}`}
              className="block p-4 border rounded-lg shadow hover:bg-gray-50 transition"
            >
              {user.name}
            </Link>
          </li>
        ))}
      </ul>

      <div className="mt-8 flex justify-between">
        {page > 1 ? (
          <Link
            href={`/?page=${page - 1}`}
            className="text-blue-600 hover:underline"
          >
            ⬅️ Previous
          </Link>
        ) : <div />}

        <Link
          href={`/?page=${page + 1}`}
          className="text-blue-600 hover:underline"
        >
          Next ➡️
        </Link>
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const page = Number(ctx.query.page) || 1
  const users = getUsers(page, 5)
  return {
    props: { users, page },
  }
}
