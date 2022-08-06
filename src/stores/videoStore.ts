import { defineStore } from "pinia";

export interface Video {
    /** ID */
    id: number
    /** 标题 */
    title: string
    /** 视频类型 */
    type?: string
    /** 视频长度(微秒) */
    length: number
    /** 上传用户ID */
    uploadUserId?: number
    /** 视频封面URL*/
    coverUrl: string
    /** 视频URL */
    url: string
}

export type VideoModel = {
    id: number
    title: string
    coverUrl: string
    length?: number
    play?: number
    url: string
}

type VideoNullable = Video | undefined

const mapToVO = (model: VideoModel) => <Video>{
    id: model.id,
    title: model.title,
    coverUrl: model.coverUrl,
    length: model.length,
    url: model.url
}

export const useVideoStore = defineStore('videoStore', {
    state: () => {
        return {
            totalCnt: 6,
            currentPage: 1,
            searchText: '',
            dataList: <Video[]>[],
            videoInfo: <VideoNullable>undefined
        }
    },
    getters: {
        totalInPage: (state) => state.dataList.length,
        lineNum() { return (cntPerRow: number) => Math.ceil(this.totalInPage / cntPerRow) },
        getById() { return (id: number) => this.dataList.filter(video => video.id == id)[0] }
    },
    actions: {
        async fetchById(id: number) {

            var video = this.getById(id);
            if (!video) {
                var rawResponse = await fetch(`/api/VIDEO-STORE/video/${id}`)
                var response: Response<VideoModel> = await rawResponse.json()
                video = mapToVO(response.body)
            }
            this.videoInfo = video;
        },
        async fetchPage(page?: number, searchText?: string) {
            var url = `/api/VIDEO-STORE/video/query/page?current=${page ? page : 1}`;
            if (searchText && searchText.trim()) {
                url += `&search=${encodeURIComponent(searchText.trim())}`
            }
            var rawResponse = await fetch(url, { redirect: 'manual' })
            var response: Response<Pageable<VideoModel>> = await rawResponse.json()
            this.dataList = response.body.data.map(videoModel => mapToVO(videoModel))
            this.totalCnt = response.body.total
        }
    }
})

export interface Response<T> {
    body: T
    code: number
    msg: string
}

export interface Pageable<T> {
    total: number
    current: number
    data: T[]
}