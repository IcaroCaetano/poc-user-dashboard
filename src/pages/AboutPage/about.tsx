import { aboutPageStyles } from "@/pages/AboutPage/AboutPage.styles"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className={aboutPageStyles.container}>
      <h1 className={aboutPageStyles.title}>About this Project</h1>

      <p className={aboutPageStyles.paragraph}>
        This is a simple user dashboard built with <strong>Next.js</strong>, <strong>React</strong> and <strong>TypeScript</strong>.
        It demonstrates routing, data handling, pagination, and styling using <strong>Tailwind CSS</strong>.
      </p>

      <p className={aboutPageStyles.paragraph}>
        All user data is mocked and stored in memory. No backend is used.
        It also supports automatic dark mode using <code>prefers-color-scheme</code>.
      </p>

      <p className={aboutPageStyles.lastParagraph}>
        This project was created as a proof of concept (PoC) to practice full-stack fundamentals in the frontend.
      </p>

      <Link href="/" className={aboutPageStyles.backLink}>
        ⬅ Back to Home
      </Link>
    </div>
  )
}
