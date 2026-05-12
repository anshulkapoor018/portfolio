"use client"
import { useState, useEffect, useRef } from "react"
import { useTheme } from "next-themes"
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid"

type ViewTransitionDocument = Document & {
	startViewTransition?: (updateCallback: () => void) => {
		ready: Promise<void>;
	};
};

const DarkModeBtn = () => {
	const [mounted, setMounted] = useState(false)
	const buttonRef = useRef<HTMLButtonElement>(null)
	const { systemTheme, theme, setTheme } = useTheme()

	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) {
		return null
	}

	const currentTheme = theme === "system" ? systemTheme : theme
	const isDark = currentTheme === "dark"
	const nextTheme = isDark ? "light" : "dark"

	const toggleTheme = () => {
		const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
		const viewTransitionDocument = document as ViewTransitionDocument
		const buttonBounds = buttonRef.current?.getBoundingClientRect()

		if (!buttonBounds || prefersReducedMotion || !viewTransitionDocument.startViewTransition) {
			setTheme(nextTheme)
			return
		}

		const x = buttonBounds.left + buttonBounds.width / 2
		const y = buttonBounds.top + buttonBounds.height / 2
		const endRadius = Math.hypot(
			Math.max(x, window.innerWidth - x),
			Math.max(y, window.innerHeight - y),
		)

		const transition = viewTransitionDocument.startViewTransition(() => {
			setTheme(nextTheme)
		})

		transition.ready.then(() => {
			document.documentElement.animate(
				{
					clipPath: [
						`circle(0px at ${x}px ${y}px)`,
						`circle(${endRadius}px at ${x}px ${y}px)`,
					],
				},
				{
					duration: 650,
					easing: "cubic-bezier(0.22, 1, 0.36, 1)",
					pseudoElement: "::view-transition-new(root)",
				},
			)
		})
	}

	return (
		<button
			ref={buttonRef}
			type="button"
			className="portfolio-theme-toggle"
			aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
			aria-pressed={isDark}
			onClick={toggleTheme}
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
