import { Instagram, Twitter, Globe, ChevronDown } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function Header() {
  return (
    <header className="bg-primary text-white">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            日本アンコリーノ協会
          </Link>
          <div className="hidden md:flex items-center space-x-6">
            <Link href="#about" className="hover:text-sakura transition-colors">
              アンコリーノとは
            </Link>
            <Link href="#activities" className="hover:text-sakura transition-colors">
              活動内容
            </Link>
            <Link href="#shops" className="hover:text-sakura transition-colors">
              認定店リスト
            </Link>
            <Link href="#contact" className="hover:text-sakura transition-colors">
              お問い合わせ
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="hover:text-sakura transition-colors flex items-center gap-2"
                >
                  <Globe className="h-5 w-5" />
                  <span>Language</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-white">
                <DropdownMenuItem className="flex items-center gap-2">
                  <span className="text-primary">🇯🇵</span>
                  <span className="text-primary">日本語</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center gap-2">
                  <span className="text-primary">🇺🇸</span>
                  <span className="text-primary">English</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link href="https://twitter.com" className="hover:text-sakura transition-colors">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link href="https://instagram.com" className="hover:text-sakura transition-colors">
              <Instagram className="h-5 w-5" />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}