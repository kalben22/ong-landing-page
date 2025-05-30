import type React from "react"
import { cn } from "@/lib/utils"

interface FormTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string
  error?: string
}

export function FormTextarea({ label, error, className, id, ...props }: FormTextareaProps) {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="text-sm font-medium text-peacock">
        {label} {props.required && <span className="text-red-500">*</span>}
      </label>
      <textarea
        id={id}
        className={cn(
          "flex min-h-[120px] w-full rounded-md border bg-moonlight px-3 py-2 text-sm text-peacock focus:outline-none focus:ring-1",
          error
            ? "border-red-500 focus:border-red-500 focus:ring-red-500"
            : "border-laurel/30 focus:border-mustard focus:ring-mustard",
          className,
        )}
        aria-invalid={error ? "true" : "false"}
        aria-describedby={error ? `${id}-error` : undefined}
        {...props}
      />
      {error && (
        <p id={`${id}-error`} className="text-xs text-red-500 mt-1">
          {error}
        </p>
      )}
    </div>
  )
}
