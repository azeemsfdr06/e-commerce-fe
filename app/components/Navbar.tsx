import Link from 'next/link'
import { Search, ShoppingBagIcon, ShoppingCart, User } from 'lucide-react'


export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow-sm">
      <div className="flex items-center space-x-8">
        <Link href="/" className="text-2xl font-bold">
          <ShoppingBagIcon/>
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="text-gray-700 hover:text-gray-900">HOME</Link>
          <Link href="/categories" className="text-gray-700 hover:text-gray-900">CATEGORIES</Link>
          <Link href="/blog" className="text-gray-700 hover:text-gray-900">BLOG</Link>
          <Link href="/contact" className="text-gray-700 hover:text-gray-900">CONTACT</Link>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <button aria-label="Search" className="text-gray-700 hover:text-gray-900">
          <Search size={20} />
        </button>
        <button aria-label="Shopping cart" className="text-gray-700 hover:text-gray-900">
          <ShoppingCart size={20} />
        </button>
        <button aria-label="User account" className="text-gray-700 hover:text-gray-900">
          <User size={20} />
        </button>
      </div>
    </nav>
  )
}