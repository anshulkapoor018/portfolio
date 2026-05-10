"use client"
import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid"

const DarkModeBtn = () => {
	const [mounted, setMounted] = useState(false)
	const { systemTheme, theme, setTheme } = useTheme()

	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) {
		return null
	}

	const currentTheme = theme === "system" ? systemTheme : theme
	const isDark = currentTheme === "dark"

	return (
		<button
			type="button"
			className="portfolio-theme-toggle"
			aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
			aria-pressed={isDark}
			onClick={() => {
				setTheme(isDark ? "light" : "dark")
			}}
		>
			{isDark ? (
				<SunIcon className="h-6 w-6 text-yellow-400" aria-hidden="true" />
			) : (
				<MoonIcon className="h-6 w-6 text-slate-700" aria-hidden="true" />
			)}
		</button>
	)
}
export default DarkModeBtn
