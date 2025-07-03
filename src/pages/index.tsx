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
    <div style={{ padding: "1rem" }}>
      <h1>Usuários - Página {page}</h1>
      <Link href="/add-user">➕ Adicionar Usuário</Link>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link href={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
      <div style={{ marginTop: "1rem" }}>
        <Link href={`/?page=${page - 1}`} style={{ marginRight: 10 }} scroll={false}>
          {page > 1 && "⬅️ Anterior"}
        </Link>
        <Link href={`/?page=${page + 1}`} scroll={false}>
          ➡️ Próxima
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
