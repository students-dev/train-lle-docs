import { AlertTriangle, Info, CheckCircle } from 'lucide-react'

interface CalloutProps {
  type?: 'warning' | 'info' | 'success'
  children: React.ReactNode
}

export default function Callout({ type = 'info', children }: CalloutProps) {
  const icons = {
    warning: <AlertTriangle className="h-5 w-5 text-yellow-500" />,
    info: <Info className="h-5 w-5 text-blue-500" />,
    success: <CheckCircle className="h-5 w-5 text-green-500" />,
  }

  const styles = {
    warning: 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800',
    info: 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800',
    success: 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800',
  }

  return (
    <div className={`border-l-4 p-4 my-4 ${styles[type]}`}>
      <div className="flex">
        <div className="flex-shrink-0">
          {icons[type]}
        </div>
        <div className="ml-3">
          {children}
        </div>
      </div>
    </div>
  )
}