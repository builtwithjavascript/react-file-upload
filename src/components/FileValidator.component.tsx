// @ts-ignore
import * as React from 'react'
import { FileValidatorRowComponent } from './FileValidatorRow.component'
import type { IFileInfo, IFileValidatorItem } from '@builtwithjavascript/file-input-validator'

type IProps = {
  id: string
  model: IFileInfo
  showOnlyErrors?: boolean
  roundedCorners?: boolean
  validatorItems: IFileValidatorItem[]
}

export function FileValidatorComponent({ model, validatorItems, showOnlyErrors, roundedCorners }: IProps) {
  let domEl = null
  if (model.displayName.length > 0) {
    domEl = (
      <div className="file-validator">
        {model.message && (
          <div className={`file-validator-row ${model.isValid ? 'success' : 'error'}`}>
            <span className="property-name">{model.isValid ? 'File:' : 'Error:'}</span>
            <span className="property-value" title={model.isValid ? model.displayName : model.message}>
              {model.isValid ? model.displayName : model.message}
            </span>
          </div>
        )}

        {!model.message && (
          <div className="file-validator-inner">
            {validatorItems
              .filter((x) => !showOnlyErrors || x.hasError)
              .map((item, index) => {
                return (
                  <FileValidatorRowComponent
                    key={`file-validator-row-${index}`}
                    index={index}
                    totItemsCount={(validatorItems || []).length}
                    roundedCorners={roundedCorners}
                    model={item}
                  />
                )
              })}
          </div>
        )}
      </div>
    )
  }

  return <>{domEl}</>
}
