import { GetServerSideProps } from "next"
import { getUserById, updateUser } from "@/services/userService"
import { User } from "@/types/User"
import { useRouter } from "next/router"
import Link from "next/link"
import { UserForm } from "@/components/UserForm/UserForm"
import { editUserStyles } from "./EditUser.styles"

interface Props {
  user: User | null
}

export default function EditUser({ user }: Props) {
  const router = useRouter()

  if (!user) {
    return (
      <div className={editUserStyles.notFoundContainer}>
        <p>User not found.</p>
        <Link href="/">⬅ Back</Link>
      </div>
    )
  }

  const handleSubmit = (data: Omit<User, "id" | "avatar">) => {
    const updated = updateUser(user.id, data)

    if (updated) {
      alert("User updated successfully!")
      router.push(`/users/${user.id}`)
    } else {
      alert("Failed to update user.")
    }
  }

  return (
    <div className={editUserStyles.container}>
      <h1 className={editUserStyles.title}>Edit User</h1>
      <UserForm initialUser={user} onSubmit={handleSubmit} submitLabel="Save" />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = Number(context.params?.id)
  const user = getUserById(id) ?? null

  return {
    props: { user },
  }
}
