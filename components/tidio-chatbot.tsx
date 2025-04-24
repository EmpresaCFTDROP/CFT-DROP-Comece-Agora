"use client"

import { useEffect } from "react"

export default function TidioChatbot() {
  useEffect(() => {
    // Tidio script com seu código específico
    const script = document.createElement("script")
    script.src = "//code.tidio.co/hcb4iqisxpo8etghga2olwe79byjyss1.js"
    script.async = true
    document.body.appendChild(script)

    return () => {
      // Cleanup on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  return null
}
