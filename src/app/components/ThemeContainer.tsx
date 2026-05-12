
import DarkModeBtn from "./DarkModeBtn"
import CommandPalette from "./CommandPalette"

const ThemeContainer = () => {
	return (
		<header className="portfolio-section py-5 px-5 flex items-center justify-end">
			<div className="flex items-center gap-2">
				<CommandPalette />
				<DarkModeBtn />
			</div>
		</header>
	)
}
export default ThemeContainer
