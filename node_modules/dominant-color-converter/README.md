# dominant-color-converter


Users can make their own color list.
Dominant colors are extracted by their images.
Compare those colors one by one from their own color list.
The most nearest color is picked and applied on the backgroundColor.

## Install


You usually do not have to install util yourself. If your code runs in Node.js, util is built in. If your code runs in the browser, bundlers like browserify or webpack also include the util module.

But if none of those apply, with npm do:

>      
> npm install dominant-color-converter

## Usage


```typescript
 import Converter from 'dominant-color-converter'
 const converter = new Converter(['#000000','#abcdef','#ffffff'])
 const convertedColor = converter.convert('https://example.com/photo.png')
 /* 
 convertedColor = {
    muted: '#abcdef',
    vibrant: '#000000',
    ...
 }
 */
```

## Notes


This library was made using [node-vibrant](https://github.com/Vibrant-Colors/node-vibrant.git).
