import { Footer, Header, Main, Title } from "@/components/elements/layout"
import "./reset.css"

export const metadata = {
  title: "Study docs for FFFFF Cafe",
  description: "FFFFF Cafeの勉強会用ドキュメントです。",
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ja">
      <body>
        <Header>
          <Title>Study docs for FFFFF Cafe</Title>
        </Header>
        <Main>{children}</Main>
        <Footer>
          <p>&copy; FFFFF Cafe</p>
        </Footer>
      </body>
    </html>
  )
}
export default RootLayout
