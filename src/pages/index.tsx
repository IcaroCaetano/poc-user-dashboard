import { GetServerSideProps } from "next"

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: "/HomePage",
      permanent: false, // use true se quiser que o navegador memorize
    },
  }
}

export default function RedirectToHomePage() {
  return null
}
