export default function InputSection({
  title,
  titleClassName,
  subtite,
  helpTextJsx,
  helpLink,
  children,
}) {
  return (
    <div className="mb-8">
        <label htmlFor="current_val">
          <div className="text-gray-500 text-xs">
            {subtite}
          </div>
          <div className={`text-lg mb-2 ${titleClassName || ''}`}>
            {title}
          </div>
        </label>

        {children}

        { !helpLink ? helpTextJsx : (
          <a
            className="block text-xs link w-max"
            href={helpLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            {helpTextJsx}
          </a>
        )}
      </div>
  );
}
