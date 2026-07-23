// Ambient floating gradient blobs used behind hero/section backgrounds.
// Purely decorative — aria-hidden so screen readers skip it.
export default function FloatingShapes({ className = '' }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden -z-10 ${className}`} aria-hidden="true">
      <div className="absolute -top-24 -left-24 w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-brand-blue/30 blur-3xl animate-float-slow" />
      <div className="absolute top-1/3 -right-20 w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-brand-purple/30 blur-3xl animate-float" />
      <div className="absolute bottom-0 left-1/4 w-56 h-56 sm:w-72 sm:h-72 rounded-full bg-brand-pink/20 blur-3xl animate-float-slow" />
    </div>
  )
}
