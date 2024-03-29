
import DarkModeBtn from "./DarkModeBtn"

const ThemeContainer = () => {
	return (
		<header className="py-5 px-5 flex items-center justify-end bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-400">
			<div>
				<DarkModeBtn />
			</div>
		</header>
	)
}
export default ThemeContainer
