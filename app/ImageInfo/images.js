class PixivImageDatas {
    data = {
        "urls": {
            "thumb_mini": "",
            "small": "",
            "regular": "",
            "original": ""
        },
        "width": 0,
        "height": 0
    }
    ask_image_link = false
    get image_link() {
        return this.data;
    }
    get result() {
        return this.data;
    }
}

export default PixivImageDatas;
