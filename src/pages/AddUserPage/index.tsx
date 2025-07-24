import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { addUser } from "@/services/userService"
import { useRouter } from "next/router"
import Link from "next/link"
import { addUserPageStyles } from "@/pages/AddUserPage/AddUserPage.styles"

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(8, "Phone is required"),
  website: z.string().optional(),
})

type FormData = z.infer<typeof schema>

export default function AddUserPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const router = useRouter()

  const onSubmit = (data: FormData) => {
    addUser(data)
    router.push("/")
  }

  return (
    <div className={addUserPageStyles.container}>
      <h1 className={addUserPageStyles.title}>Add New User</h1>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className={addUserPageStyles.formGroup}>
          <label className={addUserPageStyles.label}>Name:</label>
          <input className={addUserPageStyles.input} {...register("name")} />
          {errors.name && (
            <p className={addUserPageStyles.errorMessage}>{errors.name.message}</p>
          )}
        </div>

        <div className={addUserPageStyles.formGroup}>
          <label className={addUserPageStyles.label}>Email:</label>
          <input className={addUserPageStyles.input} {...register("email")} />
          {errors.email && (
            <p className={addUserPageStyles.errorMessage}>{errors.email.message}</p>
          )}
        </div>

        <div className={addUserPageStyles.formGroup}>
          <label className={addUserPageStyles.label}>Phone:</label>
          <input className={addUserPageStyles.input} {...register("phone")} />
          {errors.phone && (
            <p className={addUserPageStyles.errorMessage}>{errors.phone.message}</p>
          )}
        </div>

        <div className={addUserPageStyles.formGroup}>
          <label className={addUserPageStyles.label}>Website (optional):</label>
          <input className={addUserPageStyles.input} {...register("website")} />
        </div>

        <button type="submit" className={addUserPageStyles.submitButton}>
          Save
        </button>
      </form>

      <Link href="/" className={addUserPageStyles.backLink}>
        ⬅ To go back
      </Link>
    </div>
  )
}
