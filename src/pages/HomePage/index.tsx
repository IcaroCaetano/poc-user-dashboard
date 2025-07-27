import { GetServerSideProps } from "next"
import { getUsers } from "../../services/userService"
import { User } from "../../types/User"
import { UserCard } from "@/components/UserCard/UserCard"
import Link from "next/link"
import { homePageStyles } from "@/pages/HomePage/HomePage.styles"
import { useRouter } from "next/router"
import { useState } from "react"

interface Props {
  users: User[]
  page: number
  search: string
}

export default function Home({ users, page, search }: Props) {
  const router = useRouter()
  const [searchInput, setSearchInput] = useState(search)

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    router.push(`/HomePage?page=1&search=${encodeURIComponent(searchInput)}`)
  }

  return (
    <div className={homePageStyles.container}>
      <h1 className={homePageStyles.title}>Users - Page {page}</h1>

      <form onSubmit={handleSearch} className={homePageStyles.searchForm}>
        <input
          type="text"
          placeholder="Search by name or email"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className={homePageStyles.searchInput}
        />
        <button
          type="submit"
          className={homePageStyles.searchButton}
        >
          Search
        </button>
      </form>

      <Link href="/AddUserPage" className={homePageStyles.addUserButton}>
        ➕ Add User
      </Link>

      <ul className={homePageStyles.userList}>
        {users.map((user) => (
          <li key={user.id}>
            <UserCard user={user} />
          </li>
        ))}
      </ul>

      <div className={homePageStyles.paginationWrapper}>
        {page > 1 ? (
          <Link
            href={`/HomePage?page=${page - 1}&search=${encodeURIComponent(search)}`}
            className={homePageStyles.paginationLink}
          >
            ⬅️ Previous
          </Link>
        ) : (
          <div />
        )}

        <Link
          href={`/HomePage?page=${page + 1}&search=${encodeURIComponent(search)}`}
          className={homePageStyles.paginationLink}
        >
          Next ➡️
        </Link>
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const page = Number(ctx.query.page) || 1
  const search = String(ctx.query.search || "")
  const users = getUsers(page, 5, search)
  return {
    props: { users, page, search },
  }
}
