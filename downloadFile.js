const FileDownload = require('react-native-file-download')
const URL = '/path/to/remote/file'
const DEST = RNFS.DocumentDirectoryPath
const fileName = 'zip.zip'
const headers = {
  'Accept-Language': 'en-US'
}

FileDownload.download(URL, DEST, fileName, headers)
  .then((response) => {
    console.log(`downloaded! file saved to: ${response}`)
  })
  .catch((error) => {
    console.log(error)
  })