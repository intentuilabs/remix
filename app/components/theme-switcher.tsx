import { IconMoon, IconSun } from "@intentui/icons"
import { Theme, useTheme } from "remix-themes"
import { Button } from "~/components/ui/button"

export function ThemeSwitcher() {
	const [theme, setTheme] = useTheme()
	const switchTheme = () => {
		if (theme === "dark") {
			setTheme(Theme.LIGHT)
		} else {
			setTheme(Theme.DARK)
		}
	}

	return (
		<Button intent="outline" size="square-petite" aria-label="Switch theme" onPress={switchTheme}>
			{Theme.LIGHT === theme ? <IconSun /> : <IconMoon />}
		</Button>
	)
}
