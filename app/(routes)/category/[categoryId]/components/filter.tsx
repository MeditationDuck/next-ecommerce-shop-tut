"use client"

import { Color, Size } from "@/types"
import { useRouter, useSearchParams } from "next/navigation"
import React from "react"
import qs from "query-string"

interface FilterProps {
  data: (Size | Color)[]
  name: string
  valueKey: string
}

const Filter: React.FC<FilterProps> = ({
  data,
  name,
  valueKey,
}) => {
  const searchParams = useSearchParams()
  const router = useRouter()
  const selectedValue = searchParams.get(valueKey)

  const onClick = (id: string) => {
    const current = 
  }

  return (
    <div>
      Filter
    </div>
  )
}
 
export default Filter; 