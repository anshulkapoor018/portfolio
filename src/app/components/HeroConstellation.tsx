"use client"

import { useEffect, useRef } from "react"

type Point = {
	x: number
	y: number
	vx: number
	vy: number
	radius: number
}

const POINT_COUNT = 36
const CONNECT_DISTANCE = 150

const hexToRgb = (hex: string, fallback: [number, number, number]) => {
	const normalized = hex.replace("#", "").trim()

	if (normalized.length !== 6) {
		return fallback
	}

	const value = Number.parseInt(normalized, 16)

	if (Number.isNaN(value)) {
		return fallback
	}

	return [
		(value >> 16) & 255,
		(value >> 8) & 255,
		value & 255,
	] as [number, number, number]
}

const rgba = ([red, green, blue]: [number, number, number], alpha: number) => (
	`rgba(${red}, ${green}, ${blue}, ${alpha})`
)

const createPoints = (width: number, height: number): Point[] => (
	Array.from({ length: POINT_COUNT }, (_, index) => {
		const column = index % 9
		const row = Math.floor(index / 9)
		const jitterX = ((index * 37) % 43) - 21
		const jitterY = ((index * 29) % 37) - 18

		return {
			x: ((column + 0.5) / 9) * width + jitterX,
			y: ((row + 0.6) / 4) * height + jitterY,
			vx: (((index * 17) % 9) - 4) * 0.045,
			vy: (((index * 23) % 9) - 4) * 0.045,
			radius: index % 5 === 0 ? 1.8 : 1.2,
		}
	})
)

const HeroConstellation = () => {
	const canvasRef = useRef<HTMLCanvasElement>(null)

	useEffect(() => {
		const canvas = canvasRef.current
		const parent = canvas?.parentElement

		if (!canvas || !parent) {
			return
		}

		const context = canvas.getContext("2d")

		if (!context) {
			return
		}

		const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)")
		let animationFrame = 0
		let points: Point[] = []
		let width = 0
		let height = 0
		let lastTimestamp = 0

		const readColor = (name: string) => (
			getComputedStyle(document.documentElement).getPropertyValue(name).trim()
		)

		const resize = () => {
			const bounds = parent.getBoundingClientRect()
			const pixelRatio = window.devicePixelRatio || 1

			width = Math.max(1, bounds.width)
			height = Math.max(1, bounds.height)
			canvas.width = Math.floor(width * pixelRatio)
			canvas.height = Math.floor(height * pixelRatio)
			canvas.style.width = `${width}px`
			canvas.style.height = `${height}px`
			context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0)
			points = createPoints(width, height)
		}

		const draw = (timestamp = 0) => {
			const isDark = document.documentElement.classList.contains("dark")
			const accent = hexToRgb(readColor("--portfolio-accent"), [240, 74, 19])
			const text = hexToRgb(readColor("--portfolio-text"), [17, 24, 39])
			const lineAlpha = isDark ? 0.22 : 0.12
			const pointAlpha = isDark ? 0.5 : 0.28
			const accentAlpha = isDark ? 0.35 : 0.22
			const delta = Math.min(32, timestamp - lastTimestamp || 16)

			lastTimestamp = timestamp
			context.clearRect(0, 0, width, height)

			for (let i = 0; i < points.length; i += 1) {
				const point = points[i]

				if (!prefersReducedMotion.matches) {
					point.x += point.vx * delta
					point.y += point.vy * delta

					if (point.x < 0 || point.x > width) point.vx *= -1
					if (point.y < 0 || point.y > height) point.vy *= -1
				}

				for (let j = i + 1; j < points.length; j += 1) {
					const other = points[j]
					const distance = Math.hypot(point.x - other.x, point.y - other.y)

					if (distance < CONNECT_DISTANCE) {
						const alpha = (1 - distance / CONNECT_DISTANCE) * lineAlpha
						context.strokeStyle = rgba(text, alpha)
						context.beginPath()
						context.moveTo(point.x, point.y)
						context.lineTo(other.x, other.y)
						context.stroke()
					}
				}
			}

			context.globalAlpha = 1
			points.forEach((point, index) => {
				context.fillStyle = rgba(index % 7 === 0 ? accent : text, index % 7 === 0 ? accentAlpha : pointAlpha)
				context.beginPath()
				context.arc(point.x, point.y, point.radius, 0, Math.PI * 2)
				context.fill()
			})
			context.globalAlpha = 1

			if (!prefersReducedMotion.matches) {
				animationFrame = window.requestAnimationFrame(draw)
			}
		}

		const observer = new ResizeObserver(() => {
			resize()
			draw()
		})

		observer.observe(parent)
		resize()
		draw()

		return () => {
			window.cancelAnimationFrame(animationFrame)
			observer.disconnect()
		}
	}, [])

	return (
		<canvas
			ref={canvasRef}
			className="portfolio-constellation"
			aria-hidden="true"
		/>
	)
}

export default HeroConstellation
