import Link from "next/link"
import { FC } from "react"

const Page: FC = () => {
  return (
    <ul>
      <li>
        <Link href="/local-llm/">MacでローカルLLMをはじめる</Link>
      </li>
    </ul>
  )
}

export default Page
