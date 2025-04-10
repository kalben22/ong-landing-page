interface SectionHeadingProps {
  badge?: string
  badgeColor?: "mustard" | "peacock" | "laurel"
  title: string
  description?: string
  centered?: boolean
  id?: string
}

export function SectionHeading({
  badge,
  badgeColor = "mustard",
  title,
  description,
  centered = false,
  id,
}: SectionHeadingProps) {
  const badgeColorStyles = {
    mustard: "bg-mustard/20 text-mustard",
    peacock: "bg-peacock/20 text-peacock",
    laurel: "bg-laurel/30 text-peacock",
  }

  return (
    <div className={`space-y-2 ${centered ? "text-center" : ""}`}>
      {badge && (
        <div
          className={`inline-block rounded-full ${badgeColorStyles[badgeColor]} px-3 py-1 text-xs sm:text-sm font-medium`}
        >
          {badge}
        </div>
      )}
      <h2 id={id} className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter text-peacock">
        {title}
      </h2>
      {description && (
        <p className={`${centered ? "mx-auto max-w-[700px]" : ""} text-sm sm:text-base md:text-lg text-peacock/80`}>
          {description}
        </p>
      )}
    </div>
  )
}
