import type React from "react"
declare module "framer-motion" {
  export function useInView(
    ref: React.RefObject<Element>,
    options?: {
      once?: boolean
      amount?: number | "some" | "all"
      margin?: string
      root?: React.RefObject<Element>
    },
  ): boolean

  export const motion: {
    [key: string]: any
  }
}

