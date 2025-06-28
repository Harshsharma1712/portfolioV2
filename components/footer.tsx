"use client"

import Link from "next/link"
import type React from "react"
import { Github, Linkedin, Mail, Twitter, Folder, Home } from "lucide-react"
import { cn } from "@/lib/utils"
import { Dock, DockIcon } from "@/components/magicui/dock"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { buttonVariants } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export type IconProps = React.HTMLAttributes<SVGElement>

const Icons = {
  github: (props: IconProps) => <Github {...props} />,
  linkedin: (props: IconProps) => <Linkedin {...props} />,
  twitter: (props: IconProps) => <Twitter {...props} />,
  mail: (props: IconProps) => <Mail {...props} />,
  folder: (props: IconProps) => <Folder {...props} />,
  home: (props: IconProps) => <Home {...props} />,
}

const DATA = {
  name: "Harsh Sharma",
  navbar: [{ href: "/projects", icon: Icons.folder, label: "Projects" }],
  homeNav: [{ href: "/", icon: Icons.home, label: "Home" }],
  contact: {
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/harshsharma1712",
        icon: Icons.github,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/harshsharma0017",
        icon: Icons.linkedin,
      },
      Twitter: {
        name: "Twitter",
        url: "https://x.com/sharmahs017",
        icon: Icons.twitter,
      },
      Email: {
        name: "Send Email",
        url: "mailto:harshsharma17122005@gmail.com",
        icon: Icons.mail,
      },
    },
  },
}

export default function Footer() {
  return (
    <footer className="fixed bottom-4 left-0 right-0 z-50 flex justify-center">
      <TooltipProvider>
        <Dock direction="middle" className="bg-black/20 backdrop-blur-xl border-gray-700">
          {DATA.navbar.map((item) => (
            <DockIcon key={item.label}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={item.href}
                    aria-label={item.label}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-12 rounded-full bg-gray-800/50 hover:bg-purple-500/20 transition-colors border-0",
                    )}
                  >
                    <item.icon className="size-5 text-white" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="top" className="bg-black/80 text-white border-gray-700">
                  <p>{item.label}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}
          <Separator orientation="vertical" className="h-full bg-gray-600" />
          {Object.entries(DATA.contact.social).map(([name, social]) => (
            <DockIcon key={name}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-12 rounded-full bg-gray-800/50 hover:bg-purple-500/20 transition-colors border-0",
                    )}
                  >
                    <social.icon className="size-5 text-white" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="top" className="bg-black/80 text-white border-gray-700">
                  <p>{social.name}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}
          <Separator orientation="vertical" className="h-full bg-gray-600" />
          {DATA.homeNav.map((item) => (
            <DockIcon key={item.label}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={item.href}
                    aria-label={item.label}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-12 rounded-full bg-gray-800/50 hover:bg-purple-500/20 transition-colors border-0",
                    )}
                  >
                    <item.icon className="size-5 text-white" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="top" className="bg-black/80 text-white border-gray-700">
                  <p>{item.label}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}
        </Dock>
      </TooltipProvider>
    </footer>
  )
}
