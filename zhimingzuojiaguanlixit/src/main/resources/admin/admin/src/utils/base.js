const base = {
    get() {
        return {
            url : "http://localhost:8080/zhimingzuojiaguanlixit/",
            name: "zhimingzuojiaguanlixit",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/zhimingzuojiaguanlixit/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "知名作家管理系统"
        } 
    }
}
export default base
