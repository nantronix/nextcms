import Logo from '@/components/common/Logo'

export default function Footer() {
  return (
    <footer className="bg-blue-900 bg-opacity-80 from-blue-900 to-primary-700" id="footer">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Top area: Blocks */}
        <div className="grid gap-8 border-t border-blue-900 border-opacity-0 py-8 sm:grid-cols-12 md:py-12">
          {/* 1st block */}
          <div className="sm:col-span-12 lg:col-span-3">
            <div className="mb-2">
              <Logo />
            </div>
          </div>

          {/* 2nd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2"></div>

          {/* 3rd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2"></div>

          {/* 4th block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2"></div>
        </div>

        {/* Bottom area */}
        <div className="border-t border-white border-opacity-20 py-4 md:flex md:items-center md:justify-between md:py-8">
          {/* Copyrights note */}
          <div className="mr-4 text-sm text-white">
            &copy; 无锡无畏互助科技有限公司. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
