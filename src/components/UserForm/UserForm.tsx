import { useState, FormEvent } from "react"
import { User } from "@/types/User"
import * as styles from "./UserForm.styles"

interface UserFormProps {
  initialUser?: Partial<User>
  onSubmit: (userData: Omit<User, "id" | "avatar">) => void
  submitLabel?: string
}

export function UserForm({ initialUser, onSubmit, submitLabel = "Save" }: UserFormProps) {
  const [name, setName] = useState(initialUser?.name ?? "")
  const [email, setEmail] = useState(initialUser?.email ?? "")
  const [phone, setPhone] = useState(initialUser?.phone ?? "")
  const [website, setWebsite] = useState(initialUser?.website ?? "")

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    onSubmit({ name, email, phone, website })
  }

  return (
    <form onSubmit={handleSubmit} className={styles.formWrapper}>
      <div>
        <label className={styles.label}>Name</label>
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          required
          className={styles.input}
        />
      </div>

      <div>
        <label className={styles.label}>Email</label>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          className={styles.input}
        />
      </div>

      <div>
        <label className={styles.label}>Phone</label>
        <input
          type="tel"
          value={phone}
          onChange={e => setPhone(e.target.value)}
          className={styles.input}
        />
      </div>

      <div>
        <label className={styles.label}>Website</label>
        <input
          type="url"
          value={website}
          onChange={e => setWebsite(e.target.value)}
          className={styles.input}
        />
      </div>

      <button type="submit" className={styles.button}>
        {submitLabel}
      </button>
    </form>
  )
}
