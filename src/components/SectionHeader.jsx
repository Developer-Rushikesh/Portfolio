export function SectionHeader({ title, subtitle, align = 'left' }) {
  const alignment =
    align === 'center'
      ? 'text-center mx-auto'
      : align === 'right'
      ? 'text-right ml-auto'
      : 'text-left'

  return (
    <div className={`max-w-2xl ${alignment}`}>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-2 text-slate-400 text-sm sm:text-base leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  )
}
