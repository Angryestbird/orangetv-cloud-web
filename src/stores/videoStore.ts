import { defineStore } from "pinia";

interface Video {
    /** ID */
    id: number
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
        lineNum() { return (cntPerRow: number) => Math.ceil(this.totalInPage / cntPerRow) },
        getById() { return (id: number) => this.dataList.filter(video=>video.id == id)}
    },
    actions: {
        async fetch() {
            this.dataList = [
                {
                    id: 1,
                    title: 'video1',
                    uploadTime: new Date(),
                    coverUrl: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
                    url: 'http://location'
                },
                {
                    id: 2,
                    title: 'video2',
                    uploadTime: new Date(),
                    coverUrl: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
                    url: 'http://location'
                },
                {
                    id: 3,
                    title: 'video3',
                    uploadTime: new Date(),
                    coverUrl: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
                    url: 'http://location'
                },
                {
                    id: 4,
                    title: 'video4',
                    uploadTime: new Date(),
                    coverUrl: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
                    url: 'http://location'
                },
                {
                    id: 5,
                    title: 'video5',
                    uploadTime: new Date(),
                    coverUrl: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
                    url: 'http://location'
                },
                {
                    id: 6,
                    title: 'video6',
                    uploadTime: new Date(),
                    coverUrl: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
                    url: 'http://location'
                }
            ]
        }
    }
})