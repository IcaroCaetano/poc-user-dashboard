import Link from "next/link"
import { User } from "@/types/User"
import Image from "next/image"
import { userCard } from "./UserCard.styles"

interface UserCardProps {
  user: User
}

export function UserCard({ user }: UserCardProps) {
  return (
    <Link href={`/users/${user.id}`} className={userCard.wrapper}>
      <div className={userCard.container}>
        {user.avatar && (
          <Image
            src={user.avatar}
            alt={user.name}
            width={48}
            height={48}
            className={userCard.avatar}
          />
        )}
        <div>
          <h2 className={userCard.name}>{user.name}</h2>
          <p className={userCard.email}>{user.email}</p>
        </div>
      </div>
    </Link>
  )
}
