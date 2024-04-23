// @ts-ignore
import React from 'react'
import { IFileValidatorItem } from '@builtwithjavascript/file-input-validator'

type IProps = {
  index: number
  totItemsCount: number
  roundedCorners?: boolean
  model: IFileValidatorItem
}

export function FileValidatorRowComponent({ model, index, totItemsCount, roundedCorners }: IProps) {
  const cssClass = () => {
    const { hasError } = model
    const isFirst = index === 0
    const isLast = index === totItemsCount - 1
    const result = ['file-validator-row']

    if (roundedCorners) {
      if (isFirst) {
        result.push('first')
      }
      if (isLast) {
        result.push('last')
      }

      if (!isLast && totItemsCount > 1) {
        result.push('border-bottom')
      }
    }

    // item success/error class
    result.push(hasError ? 'error' : 'success')

    return result.join(' ').trim()
  }

  return (
    <div className={cssClass()} title={model.value}>
      {/* TODO icon <icon class="h-4 w-4 flex-none" aria-hidden="true" :title="validationIcon" /> */}
      <span className="property-name">{model.name}</span>
      <span className="property-value">{model.displayValue}</span>
    </div>
  )
}
