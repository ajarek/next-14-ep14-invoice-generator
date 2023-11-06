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


const Navbar = () => {
  return (
    <NavigationMenu >
      <NavigationMenuList className='w-screen  flex justify-between px-8 py-2 border-b border-violet-700'>
        <NavigationMenuItem>
          <div className='flex'>
            <a
              className='pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0'
              href='https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
              target='_blank'
              rel='noopener noreferrer'
            >
              By{' '}
              <Image
                src='/vercel.svg'
                alt='Vercel Logo'
                className='dark:invert'
                width={100}
                height={24}
                priority
              />
            </a>
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
        
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default Navbar