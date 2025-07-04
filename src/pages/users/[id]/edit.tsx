import { GetServerSideProps } from "next"
import { getUserById, updateUser } from "@/services/userService"
import { User } from "@/types/User"
import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import Link from "next/link"

interface Props {
  user: User | null
}

export default function EditUser({ user }: Props) {
  const router = useRouter()

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [website, setWebsite] = useState("")

  useEffect(() => {
    if (user) {
      setName(user.name)
      setEmail(user.email)
      setPhone(user.phone)
      setWebsite(user.website ?? "")
    }
  }, [user])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!user) return

    const updated = updateUser(user.id, {
      name,
      email,
      phone,
      website,
    })

    if (updated) {
      alert("User updated successfully!")
      router.push(`/users/${user.id}`)
    } else {
      alert("Failed to update user.")
    }
  }

  if (!user) {
    return (
      <div className="p-6">
        <p>User not found.</p>
        <Link href="/">⬅ Back</Link>
      </div>
    )
  }

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Edit User</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-semibold">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Phone</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Website</label>
          <input
            type="url"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div className="flex gap-4 mt-6">
          <button
            type="submit"
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
          >
            Save
          </button>

          <Link
            href={`/users/${user.id}`}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 transition"
          >
            Cancel
          </Link>
        </div>
      </form>
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
