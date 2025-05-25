export function Button({ children, className }) {
  return <button className={`px-4 py-2 bg-white text-black rounded ${className}`}>{children}</button>;
}
