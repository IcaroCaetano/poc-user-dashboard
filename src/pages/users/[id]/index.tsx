import { GetServerSideProps } from "next"
import { getUserById } from "@/services/userService"
import { User } from "@/types/User"
import Link from "next/link"
import { useRouter } from "next/router"
import Image from "next/image"
import { userDetailStyles as styles } from "./UserDetail.styles"

interface Props {
  user: User | null
}

export default function UserDetail({ user }: Props) {
  const router = useRouter()

  if (!user) {
    return (
      <div className={styles.notFoundContainer}>
        <p>User not found.</p>
        <Link href="/" className={styles.backButton}>
          ⬅ Back
        </Link>
      </div>
    )
  }

  const avatarSrc = user.avatar ?? "/default-avatar.png"

  const handleDelete = () => {
    alert("User deleted (simulated)")
    router.push("/")
  }

  return (
    <div className={styles.container}>
      <button onClick={() => router.back()} className={styles.backButton}>
        ⬅ Back
      </button>

      <div className={styles.header}>
        <Image
          src={avatarSrc}
          alt={user.name}
          width={64}
          height={64}
          className={styles.avatar}
        />
        <h1 className={styles.name}>{user.name}</h1>
      </div>

      <div className={styles.info}>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        {user.website && (
          <p>
            <strong>Website:</strong>{" "}
            <a
              href={user.website}
              target="_blank"
              rel="noreferrer"
              className={styles.websiteLink}
            >
              {user.website}
            </a>
          </p>
        )}
      </div>

      <div className={styles.actions}>
        <Link
          href={`/users/${user.id}/edit`}
          className={styles.editButton}
        >
          Edit
        </Link>
        <button
          onClick={handleDelete}
          className={styles.deleteButton}
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
