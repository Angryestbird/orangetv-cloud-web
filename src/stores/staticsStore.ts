import { defineStore } from "pinia";
import { VideoModel } from "./videoStore";
import { Response } from "./videoStore";

export interface PlayTopItem {
    title: string,
    play?: number,
}

export const useStaticsStore = defineStore('staticsStore', {
    state: () => {
        return { playTop: <PlayTopItem[]>[] }
    },
    actions: {
        async fetch() {
            var rawResponse = await fetch(`/api/VIDEO-STORE/video/play/top/10`)
            var response: Response<VideoModel[]> = await rawResponse.json()
            this.playTop = response.body.map(model => mapToVO(model))
        }
    }
})

const mapToVO = (model: VideoModel) => ({
    title: model.title,
    play: model.play
}) 
