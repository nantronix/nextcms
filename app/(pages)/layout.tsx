import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
import global from '@/data/global/index.json' assert { type: 'json' }

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header data={global.header} />
      <main className="grow">{children}</main>
      <Footer />
    </>
  )
}
