import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { addUser } from "@/services/userService"
import { useRouter } from "next/router"
import Link from "next/link"

const schema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  email: z.string().email("Email inválido"),
  phone: z.string().min(8, "Telefone é obrigatório"),
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
    <div style={{ padding: "1rem", maxWidth: "500px", margin: "0 auto" }}>
      <h1>Add New User</h1>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div>
          <label>Name:</label>
          <input {...register("name")} />
          {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
        </div>

        <div>
          <label>Email:</label>
          <input {...register("email")} />
          {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
        </div>

        <div>
          <label>Telefone:</label>
          <input {...register("phone")} />
          {errors.phone && <p style={{ color: "red" }}>{errors.phone.message}</p>}
        </div>

        <div>
          <label>Website (opcional):</label>
          <input {...register("website")} />
        </div>

        <br />
        <button type="submit">Save</button>
        <br /><br />
        <Link href="/">⬅ To go back</Link>
      </form>
    </div>
  )
}
