import Link from 'next/link'

interface ButtonProps {
  href?: string
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  className?: string
  type?: 'button' | 'submit'
  disabled?: boolean
}

const variants = {
  primary: 'bg-primary-500 text-white hover:bg-primary-600 shadow-lg shadow-primary-500/25',
  secondary: 'bg-dark text-white hover:bg-dark-light',
  outline: 'border-2 border-primary-500 text-primary-500 hover:bg-primary-50',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
}

export function Button({
  href,
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  type = 'button',
  disabled = false,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 ${variants[variant]} ${sizes[size]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} className={classes} disabled={disabled}>
      {children}
    </button>
  )
}
