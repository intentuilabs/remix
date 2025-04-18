import { IconArrowUpRight, IconBrandGithub, IconBrandIntentui, IconChevronLgDown } from "@intentui/icons"
import { ThemeSwitcher } from "~/components/theme-switcher"
import { buttonStyles } from "~/components/ui/button"
import { Link } from "~/components/ui/link"
import { Menu } from "~/components/ui/menu"
import { Navbar } from "~/components/ui/navbar"
import { Separator } from "~/components/ui/separator"

const navigations = [
	{
		name: "Home",
		url: "/",
	},
	{
		name: "About",
		url: "/about",
	},
	{
		name: "Contact",
		url: "/contact",
	},
]

export function AppNavbar() {
	return (
		<Navbar>
			<Navbar.Nav>
				<Navbar.Logo href="/">
					<IconBrandIntentui />
				</Navbar.Logo>
				<Navbar.Section>
					{navigations.map((item) => (
						<Navbar.Item key={item.url} href={item.url}>
							{item.name}
						</Navbar.Item>
					))}
					<Menu>
						<Navbar.Item>
							Resources <IconChevronLgDown />
						</Navbar.Item>
						<Menu.Content>
							<Menu.Item target="_blank" href="https://getjustd.com/blocks">
								Blocks
								<IconArrowUpRight className="ml-auto" />
							</Menu.Item>
							<Menu.Item target="_blank" href="https://getjustd.com">
								Components
								<IconArrowUpRight className="ml-auto" />
							</Menu.Item>
							<Menu.Item target="_blank" href="https://getjustd.com/icons">
								Icons
								<IconArrowUpRight className="ml-auto" />
							</Menu.Item>
							<Menu.Item target="_blank" href="https://getjustd.com/themes">
								Themes
								<IconArrowUpRight className="ml-auto" />
							</Menu.Item>
						</Menu.Content>
					</Menu>
				</Navbar.Section>
				<Navbar.Section className="ml-auto hidden gap-x-1 lg:flex">
					<ThemeSwitcher />
					<Link
						className={buttonStyles({ intent: "outline", size: "square-petite" })}
						href="https://github.com/justdlabs/remix"
						target="_blank"
						aria-label="Go to Github Repo"
					>
						<IconBrandGithub />
					</Link>
					<Link
						className={buttonStyles({ intent: "outline", size: "square-petite" })}
						href="https://getjustd.com"
						target="_blank"
						aria-label="Go to Justd"
					>
						<IconBrandIntentui />
					</Link>
				</Navbar.Section>
			</Navbar.Nav>

			<Navbar.Compact>
				<Navbar.Flex>
					<Navbar.Trigger className="-ml-2" />
					<Separator orientation="vertical" className="h-6" />
					<Navbar.Logo href="/">
						<IconBrandIntentui />
					</Navbar.Logo>
				</Navbar.Flex>
				<Navbar.Flex className="gap-x-1">
					<ThemeSwitcher />
					<Link
						className={buttonStyles({ intent: "outline", size: "square-petite" })}
						href="https://github.com/justdlabs/remix"
						target="_blank"
						aria-label="Go to Github Repo"
					>
						<IconBrandGithub />
					</Link>
					<Link
						className={buttonStyles({ intent: "outline", size: "square-petite" })}
						href="https://getjustd.com"
						target="_blank"
						aria-label="Go to Justd"
					>
						<IconBrandIntentui />
					</Link>
				</Navbar.Flex>
			</Navbar.Compact>
		</Navbar>
	)
}
