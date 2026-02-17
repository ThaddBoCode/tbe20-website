interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

export function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <div
      className={`bg-white rounded-2xl border border-gray-100 p-6 lg:p-8 ${
        hover ? 'hover:shadow-lg hover:border-gray-200 transition-all duration-300' : ''
      } ${className}`}
    >
      {children}
    </div>
  )
}
