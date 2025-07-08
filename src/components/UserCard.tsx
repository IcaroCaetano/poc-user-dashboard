import Link from "next/link"
import { User } from "@/types/User"
import Image from "next/image"

interface UserCardProps {
  user: User
}

export function UserCard({ user }: UserCardProps) {
  return (
    <Link
      href={`/users/${user.id}`}
      className="block p-4 bg-white rounded-lg shadow-md hover:bg-gray-100 transition"
    >
      <div className="flex items-center space-x-4">
        {user.avatar && (
          <Image
            src={user.avatar}
            alt={user.name}
            width={48}
            height={48}
            className="rounded-full border"
          />
        )}
        <div>
          <h2 className="text-lg font-semibold">{user.name}</h2>
          <p className="text-sm text-gray-600">{user.email}</p>
        </div>
      </div>
    </Link>
  )
}
