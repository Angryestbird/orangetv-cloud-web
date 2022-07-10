import { defineStore } from "pinia";

export interface Playback {
    title: string,
    playbackAmount: number,
}

export const useStaticsStore = defineStore('staticsStore', {
    state: () => {
        return { playbackRank: <Playback[]>[] }
    },
    actions: {
        async fetch() {
            setTimeout(() => this.playbackRank = [
                { title: "变形金刚1", playbackAmount: 50 },
                { title: "变形金刚2", playbackAmount: 40 },
                { title: "变形金刚3", playbackAmount: 30 },
                { title: "变形金刚4", playbackAmount: 20 },
                { title: "变形金刚5", playbackAmount: 10 }
            ], 3000)
        }
    }
})