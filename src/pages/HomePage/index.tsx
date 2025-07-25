import { GetServerSideProps } from "next"
import { getUsers } from "../../services/userService"
import { User } from "../../types/User"
import { UserCard } from "@/components/UserCard/UserCard"
import Link from "next/link"
import { homePageStyles } from "@/pages/HomePage/HomePage.styles"

interface Props {
  users: User[]
  page: number
}

export default function Home({ users, page }: Props) {
  return (
    <div className={homePageStyles.container}>
      <h1 className={homePageStyles.title}>Users - Page {page}</h1>

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
          <Link href={`/HomePage?page=${page - 1}`} className={homePageStyles.paginationLink}>
            ⬅️ Previous
          </Link>
        ) : (
          <div />
        )}

        <Link href={`/HomePage?page=${page + 1}`} className={homePageStyles.paginationLink}>
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
