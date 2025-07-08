import { User } from "@/types/User"
import {
  UseFormRegister,
  FieldErrors,
  UseFormHandleSubmit,
  SubmitHandler,
} from "react-hook-form"
import { FormEvent } from "react"

export interface UserFormProps<TFormValues = any> {
  initialUser?: Partial<User>
  onSubmit: (data: TFormValues) => void
  submitLabel?: string

  register?: UseFormRegister<TFormValues>
  errors?: FieldErrors<TFormValues>
  handleSubmit?: UseFormHandleSubmit<TFormValues>
}

export function UserForm<TFormValues = any>({
  initialUser,
  onSubmit,
  submitLabel = "Save",
  register,
  errors,
  handleSubmit,
}: UserFormProps<TFormValues>) {
  const internalSubmit = handleSubmit
    ? handleSubmit(onSubmit as SubmitHandler<TFormValues>)
    : (e: FormEvent) => {
        e.preventDefault()
        onSubmit({} as TFormValues)
      }

  return (
    <form onSubmit={internalSubmit} noValidate>
      <div>
        <label>Name</label>
        <input
          type="text"
          defaultValue={(initialUser as any)?.name}
          {...(register ? register("name") : {})}
          required={!register}
        />
        {errors?.name && <p>{(errors.name as any)?.message}</p>}
      </div>

      <div>
        <label>Email</label>
        <input
          type="email"
          defaultValue={(initialUser as any)?.email}
          {...(register ? register("email") : {})}
          required={!register}
        />
        {errors?.email && <p>{(errors.email as any)?.message}</p>}
      </div>

      <div>
        <label>Phone</label>
        <input
          type="tel"
          defaultValue={(initialUser as any)?.phone}
          {...(register ? register("phone") : {})}
          required={!register}
        />
        {errors?.phone && <p>{(errors.phone as any)?.message}</p>}
      </div>

      <div>
        <label>Website (optional)</label>
        <input
          type="url"
          defaultValue={(initialUser as any)?.website}
          {...(register ? register("website") : {})}
        />
      </div>

      <button type="submit">{submitLabel}</button>
    </form>
  )
}
