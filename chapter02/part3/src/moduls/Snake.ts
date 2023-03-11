class Snake {
    //表示蛇头
    head: HTMLElement;
    bodies: HTMLCollection;
    element: HTMLElement;
    constructor() {
        this.element = document.querySelector('#snake') as HTMLElement;
        this.head = document.querySelector("#snake>div") as HTMLElement;
        this.bodies = this.element.getElementsByTagName('div');
    }
    // 获取蛇头的坐标
    get X() {
        return this.head.offsetLeft;
    }
    get Y() {
        return this.head.offsetTop;
    }

    // 设置蛇头的坐标
    set X(value) {
        if (this.X == value) { return; }
        if (value < 0 || value > 290) {
            throw new Error("撞墙了")
        }

        if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft ===value){
            console.log("掉头");
            //如果发生了掉头 让蛇向反方向继续移动
            if(value > this.X){
                //如果新值value 大于旧值x则说明蛇在向右走，此时发生掉头，应该使蛇继续向左走
                value = this.X-10;
            }else{
                value = this.X+10;
            }
        }

        this.moveBody()
        this.head.style.left = value + 'px'
        this.checkHeadBody()
    }

    set Y(value) {
        if (this.Y == value) { return; }
        if (value < 0 || value > 290) {
            throw new Error("撞墙了")
        }
        if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop ===value){
            console.log("掉头");
            if(value > this.Y){
                value = this.Y-10;
            }else{
                value = this.Y+10;
            }
        }
        this.moveBody()
        this.head.style.top = value + 'px'
        this.checkHeadBody()
    }

    // 增添蛇的身体方法
    addBody() {
        //向element中添加一个div
        this.element.insertAdjacentHTML("beforeend", "<div></div>")
    }
    // 移动蛇的身体方法
    moveBody() {
        // 遍历所有的蛇身体
        for (let i = this.bodies.length - 1; i > 0; i--) {
            let x = (this.bodies[i - 1] as HTMLElement).offsetLeft;
            let y = (this.bodies[i - 1] as HTMLElement).offsetTop;

            //将值设置到当前身体上
            (this.bodies[i] as HTMLElement).style.left = x + 'px';
            (this.bodies[i] as HTMLElement).style.top = y + 'px';
        }
    }
    checkHeadBody(){
        for(let i=1;i<this.bodies.length;i++){
            let bd =this.bodies[i] as HTMLElement;
            if(this.X===bd.offsetLeft && this.Y ===bd.offsetTop){
                throw new Error("撞着自己了")
            }
        }
    }
}
export default Snake;