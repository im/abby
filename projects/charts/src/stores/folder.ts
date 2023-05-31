import { defineStore } from 'pinia'
import { FolderObject } from '@/typings/folder'
import Db from '@/utils/db'

import { FOLDER_STORE_NAME } from '@/constants/db'

const ChartDb = Db()

export const useFolderStore = defineStore('Folder', {
    state: () => {
        return {
            list: []
        }
    },
    actions: {
        async update () {
            const results:any = await (await ChartDb).getAllFromIndex(FOLDER_STORE_NAME, 'id')
            this.list = (results || []).sort((a:FolderObject,b: FolderObject) => b.updatedTime - a.updatedTime)
        },
        async get (key: string) {
            return await (await ChartDb).get(FOLDER_STORE_NAME, key)
        },
        async set (data: any) {
            const tx = (await ChartDb).transaction(FOLDER_STORE_NAME, 'readwrite')
            if (data.id) {
                const index = tx.store.index('id')
                for await (const cursor of index.iterate(data.id)) {
                    const o = Object.assign(cursor.value, data)
                    cursor.update(o)
                }
                await tx.done
                return data.id
            } else {
                const id = await tx.store.add(data)
                this.update()
                await tx.done
                return id
            }

        },
        async del (key:number) {
            const id = await (await ChartDb).delete(FOLDER_STORE_NAME, key)
            this.update()
        }
    },
})