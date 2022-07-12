class PlayerOption {
    width = "800px"
    height = "450px"
    color = "orange"

    /** 静音 */
    muted = false

    /** 网页全屏 */
    webFullScreen = false

    /** 自动播放 */
    autoPlay = false

    currentTime = 0

    /** 循环播 放*/
    loop = false

    /** 关灯模式 */
    mirror = false

    /** 关灯模式 */
    ligthOff = false

    /** 默认音量大小 */
    volume = 0.3

    /** 是否显示控制器 */
    control = true

    /** 视频名称 */
    title = ""

    /** 视频类型 */
    type = "video/mp4"

    /** 视频源 */
    src = ""

    /** 封面 */
    poster = ""

    controlBtns = [
        "audioTrack",
        "quality",
        "speedRate",
        "volume",
        "setting",
        "pip",
        "pageFullScreen",
        "fullScreen",
    ]
}

export default PlayerOption