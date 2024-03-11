import Link from 'next/link'
import logo from '@/public/logo.png'
import Image from 'next/image'

export default function Logo() {
  return (
    <Link href="/" className="block" aria-label="无畏">
      <Image src={logo} alt="无畏" height={58} width={160} />
    </Link>
  )
}
