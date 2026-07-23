import { useEffect, useRef, useState } from 'react'

// Animates a number from 0 to `end` once the element is in view.
export default function useCounter(end, duration = 1800) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const startTime = performance.now()

          const step = (now) => {
            const progress = Math.min((now - startTime) / duration, 1)
            // ease-out cubic for a natural deceleration
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.floor(eased * end))
            if (progress < 1) requestAnimationFrame(step)
            else setCount(end)
          }
          requestAnimationFrame(step)
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [end, duration])

  return [count, ref]
}
