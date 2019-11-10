import glob from 'glob'
import path from 'path'

const rootDir = path.dirname(__dirname)

export const _ = {
    filesInsideFolder: (folder: string, withExtension = false) => {
        const ignoredFiles = ['index.js', '_*']
        return glob
            .sync(`${rootDir}/**/${folder}/*.js`, {
                ignore: ignoredFiles.map(file => `**/${file}`)
            })
            .map(file => {
                const fileNameWithExtension = file.substring(file.lastIndexOf('/') + 1)
                const fileName = fileNameWithExtension.substring(0, fileNameWithExtension.length - 3)
                return withExtension ? fileNameWithExtension : fileName
            })
    },

    isEmptyObject: (object: object) => {
        return Object.entries(object).length === 0 && object.constructor === Object
    },

    propName: (prop: any, value: any) => {
        for (var i in prop) {
            if (prop[i] == value) {
                return i
            }
        }
        return 'undefined'
    },

    clone: (obj: any) => {
        return Object.assign(Object.create(Object.getPrototypeOf(obj)), obj)
    },

    isEmpty: (obj: any) => !(obj.length && obj.length > 0)
}
