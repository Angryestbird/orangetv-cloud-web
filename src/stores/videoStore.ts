import { defineStore } from "pinia";

export interface Video {
    /** ID */
    id: number
    /** 标题 */
    title: string
    /** 视频类型 */
    type?: string
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
            totalCnt: 6,
            currentPage: 1,
            searchText: '',
            dataList: <Video[]>[],
            videoInfo: <Video | null>null
        }
    },
    getters: {
        totalInPage: (state) => state.dataList.length,
        lineNum() { return (cntPerRow: number) => Math.ceil(this.totalInPage / cntPerRow) },
        getById() { return (id: number) => this.dataList.filter(video => video.id == id)[0] }
    },
    actions: {
        async fetchById(id: number) {

            var video = await this.getById(id) || {
                id: 1,
                title: 'video1',
                type: 'm3u8',
                uploadTime: new Date(),
                coverUrl: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
                url: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8'
            }
            this.videoInfo = video;
        },
        async fetch() {
            this.dataList = [
                {
                    id: 1,
                    title: 'video1',
                    type: 'm3u8',
                    uploadTime: new Date(),
                    coverUrl: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
                    url: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8'
                },
                {
                    id: 2,
                    title: 'video2',
                    uploadTime: new Date(),
                    coverUrl: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
                    url: 'https://cdn.jsdelivr.net/gh/xdlumia/files/video-play/IronMan.mp4'
                },
                {
                    id: 3,
                    title: 'video3',
                    type: 'm3u8',
                    uploadTime: new Date(),
                    coverUrl: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
                    url: 'https://logos-channel.scaleengine.net/logos-channel/live/biblescreen-ad-free/playlist.m3u8'
                },
                {
                    id: 4,
                    title: 'video4',
                    type: 'm3u8',
                    uploadTime: new Date(),
                    coverUrl: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
                    url: 'https://logos-channel.scaleengine.net/logos-channel/live/biblescreen-ad-free/playlist.m3u8'
                },
                {
                    id: 5,
                    title: 'video5',
                    uploadTime: new Date(),
                    coverUrl: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
                    url: 'https://cdn.jsdelivr.net/gh/xdlumia/files/video-play/IronMan.mp4'
                },
                {
                    id: 6,
                    title: 'video6',
                    uploadTime: new Date(),
                    coverUrl: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
                    url: 'https://cdn.jsdelivr.net/gh/xdlumia/files/video-play/IronMan.mp4'
                }
            ]
        }
    }
})