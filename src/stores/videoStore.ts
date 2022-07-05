import { defineStore } from "pinia";

interface Video {
    /** 标题 */
    title: string
    /** 上传时间 */
    uploadTime: Date
    /** 上传用户ID */
    uploadUserId?: number
    /** 视频封面URL*/
    coverUrl: string
    /** 视频URL */
    url: string
}

export const useVideoStore = defineStore('videoStore', {
    state: () => {
        return {
            totalCnt: 50,
            currentPage: 1,
            searchText: '',
            dataList: <Video[]>[]
        }
    },
    getters: {
        totalInPage: (state) => state.dataList.length,
        lineNum() { return (cntPerRow: number) => Math.ceil(this.totalInPage / cntPerRow) }
    },
    actions: {
        async fetch() {
            this.dataList = [
                {
                    title: 'video1',
                    uploadTime: new Date(),
                    coverUrl: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
                    url: 'http://location'
                },
                {
                    title: 'video2',
                    uploadTime: new Date(),
                    coverUrl: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
                    url: 'http://location'
                },
                {
                    title: 'video3',
                    uploadTime: new Date(),
                    coverUrl: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
                    url: 'http://location'
                },
                {
                    title: 'video4',
                    uploadTime: new Date(),
                    coverUrl: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
                    url: 'http://location'
                },
                {
                    title: 'video5',
                    uploadTime: new Date(),
                    coverUrl: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
                    url: 'http://location'
                },
                {
                    title: 'video6',
                    uploadTime: new Date(),
                    coverUrl: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
                    url: 'http://location'
                }
            ]
        }
    }
})