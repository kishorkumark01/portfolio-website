// Tiny helper to conditionally join class names without extra dependencies.
export function cn(...classes) {
  return classes.filter(Boolean).join(' ')
}
