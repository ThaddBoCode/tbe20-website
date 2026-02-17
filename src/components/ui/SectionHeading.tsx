interface SectionHeadingProps {
  label?: string
  title: string
  description?: string
  centered?: boolean
}

export function SectionHeading({
  label,
  title,
  description,
  centered = true,
}: SectionHeadingProps) {
  return (
    <div className={`max-w-3xl ${centered ? 'mx-auto text-center' : ''} mb-12 lg:mb-16`}>
      {label && (
        <p className="text-sm font-semibold text-primary-500 uppercase tracking-wider mb-2">
          {label}
        </p>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">{title}</h2>
      {description && (
        <p className="mt-4 text-lg text-gray-600">{description}</p>
      )}
    </div>
  )
}
