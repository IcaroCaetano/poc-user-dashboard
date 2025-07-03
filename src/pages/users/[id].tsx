import { GetServerSideProps } from "next"
import { getUserById } from "@/services/userService"
import { User } from "@/types/User"
import Link from "next/link"
import { useRouter } from "next/router"
import Image from "next/image"


interface Props {
  user: User | null
}

export default function UserDetail({ user }: Props) {
  const router = useRouter()

  if (!user) {
    return (
      <div className="p-6">
        <p>User not found.</p>
        <Link href="/">⬅ Back</Link>
      </div>
    )
  }

  const avatarSrc = user.avatar ?? "/default-avatar.png"

  const handleDelete = () => {
    // Here you can call a function that removes the user from the mock and then redirects
    alert("User deleted (simulated)")
    router.push("/")
  }

  return (
    <div className="max-w-xl mx-auto p-6">
      <button
        onClick={() => router.back()}
        className="mb-4 text-blue-600 hover:underline"
      >
        ⬅ Back
      </button>

      <div className="flex items-center space-x-6 mb-6">
       <Image
          src={avatarSrc}
          alt={user.name}
          width={64}
          height={64}
          className="rounded-full border"
        />

        <h1 className="text-3xl font-bold">{user.name}</h1>
      </div>

      <div className="space-y-2">
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        {user.website && (
          <p>
            <strong>Website:</strong>{" "}
            <a
              href={user.website}
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:underline"
            >
              {user.website}
            </a>
          </p>
        )}
      </div>

      <div className="mt-8 space-x-4">
        <Link
          href={`/users/${user.id}/edit`}
          className="px-4 py-2 bg-yellow-400 rounded hover:bg-yellow-500 transition"
        >
          Edit
        </Link>
        <button
          onClick={handleDelete}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
        >
          Delete
        </button>
      </div>
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
