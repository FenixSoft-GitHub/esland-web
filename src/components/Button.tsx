import styles from "@/components/styles/Button.module.css"

interface Props {
  children?: preact.ComponentChildren
  onClick?: (e: MouseEvent) => any
  id?: string
  className?: string
  target?: string
  url: string
}


export default function Button({ children, onClick, url, target, className, ...rest }:Props) {
  return (
  <a
    href={url}
    target={`${target ?? '_blank'}`}
    rel="noopener noreferrer"
    onClick={onClick}
    class={`
      lg:text-2xl
      md:px-5
      md:text-xl
      text-xs
      w-fit
      font-medium
      no-underline
      px-2
      py-3
      border-2
      border-solid
      border-white/50
      rounded-full
      uppercase
      ${styles.button}
      ${className ?? ''}`
    }
    {...rest}
>
  {children}
</a>

  )
}
