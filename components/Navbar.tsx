import {
  navigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from '@/components/ui/navigation-menu'
import Link from 'next/link'
import Image from 'next/image'
import { ModeToggle } from './ui/toggle-mode'

const Navbar = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList className='w-screen  flex justify-between px-8 py-2 border-b border-violet-700'>
        <NavigationMenuItem>
          <div className='flex items-center'>
            <Image
              src='/invoices-icon.png'
              alt='Vercel Logo'
              className='dark:invert'
              width={40}
              height={20}
              priority
            />
            <h1 className='ml-2 font-bold text-xl'>Generator Faktur</h1>
          </div>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link
            href='/docs'
            legacyBehavior
            passHref
          >
            <NavigationMenuLink className='group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50'>
              Documentation
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <ModeToggle />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default Navbar
