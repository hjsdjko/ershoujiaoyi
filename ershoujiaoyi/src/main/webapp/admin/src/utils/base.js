const base = {
    get() {
        return {
            url : "http://localhost:8080/ershoujiaoyi/",
            name: "ershoujiaoyi",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ershoujiaoyi/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "二手物品交易平台"
        } 
    }
}
export default base
