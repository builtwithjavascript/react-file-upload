# @builtwithjavascript/react-file-upload
A React file upload component with validation (unstyled).

[![npm version](https://badge.fury.io/js/@builtwithjavascript%2Freact-file-upload.svg)](https://badge.fury.io/js/@builtwithjavascript%2Freact-file-upload)

## Screenshot

<img src="readme-files/react-screenshot.png" alt="React Screenshot" style="width:300px;"/>

## NOTE
This component is not styled. You will have to provide the necessary css classes for the various elements:
- The main component has class `file-upload-component`
- The input component has class `file-input-label`
- The file validator component has class `file-validator` and inner class `file-validator-inner`
- Each file validator child row component has class `file-validator-row` (in addition, they can have class `first`, `last`, `success`, `error`) 

If you use Tailwind CSS, use the `@builtwithjavascript/react-file-upload-tailwind` package, which can be found here: 
https://www.npmjs.com/package/@builtwithjavascript/react-file-upload-tailwind




## Run-time Dependencies
- React

## Install
```
npm i -D @builtwithjavascript/react-file-upload
```

## Consume
```
import { FileUploadComponent } from '@builtwithjavascript/react-file-upload' 
import type { 
  IFileInfo,
  IFileValidatorOptions
} from '@builtwithjavascript/react-file-upload' 

const fileValidatorOptions: IFileValidatorOptions = {
  allowedTypes: ['csv', 'xls'],
  maxSize: 50, // in MB
  maxNameLength: 60, // max name length in chars
  nameTruncateMaxLength: 35, // will truncate the display of the name
  propertiesToValidate: ['name', 'type', 'size']
}

const onUploadClick = async (fileInfo: IFileInfo) => {
  // do what you need to do with fileInfo.file
  // i.e. create form data and post it to an API endpoint
  const file = new FormData()
  file.append('file', fileInfo.file as Blob)

  const response = await someApiClient.post({
    file: file
  })

  ...
}

...

<FileUploadComponent id="my-file-upload" 
  uploadLabel="Import file"
  validatorOptions={fileValidatorOptions}
  showOnlyErrors={true}
  roundedCorners={true}
  onUploadClick={onUploadClick}
/>
```

NOTE: if you pass `showOnlyErrors` true, that only the validator items that fail will be displayed.

