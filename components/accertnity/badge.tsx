export default function AccertnityBadge({ label }: { label: string }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full bg-amber-900/10 px-3 py-1 text-xs font-medium text-amber-300">
      <span className="h-2 w-2 rounded-full bg-amber-400 block" />
      {label}
    </div>
  )
}
