import Snake from './Snake'
import Food from './Food'
import ScorePanel from './ScorePanel'
//游戏控制器 控制其他的所有类
class GameControl {
    //蛇
    snake: Snake
    //食物
    food: Food
    //记分牌
    scorePanel: ScorePanel
    //创建一个属性存储蛇移动的方向（也是按键按的方向）
    direction: string = '';
    // 创建一个属性用来记录游戏是否结束
    isLive = true;
    constructor() {
        this.snake = new Snake();
        this.food = new Food();
        this.scorePanel = new ScorePanel(10,2)
        this.init()
    }
    //游戏的初始化方法 调用后游戏即开始
    init() {
        //绑定键盘按下的事件
        document.addEventListener('keydown', this.keydownHandler.bind(this))
        this.run()
    }

    keydownHandler(event: KeyboardEvent) {
        this.direction = event.key
        
        console.log("event", event);
    }
    run() {
        console.log("run", this.direction);
        let X = this.snake.X;
        let Y = this.snake.Y
    
        switch (this.direction) {
            case 'ArrowUp':
            case 'Up':
                Y -= 10;
                break;
            case 'ArrowDown':
            case 'Down':
                Y += 10;
                break;
            case 'ArrowLeft':
            case 'Left':
                X -= 10;
                break;
            case 'ArrowRight':
            case 'Right':
                X += 10;
                break;
        }
        this.checkEat(X,Y)
        // 修改蛇的x和y的值
        try{
            this.snake.X = X;
            this.snake.Y = Y
        }catch(e){
            console.log("E",e)
            alert(e+ 'GAME OVER!')
            this.isLive =false
        }
      this.isLive && setTimeout(this.run.bind(this),300-(this.scorePanel.level-1)*30);
    }
    // 定义一个方法 用来检查蛇是否吃到食物
    checkEat(x:number,y:number){
        if(this.food.x===x && this.food.y ===y){
            console.log("吃到食物了")
            this.food.change();
            this.scorePanel.addScore()
            this.snake.addBody()
        }
    }
}

export default GameControl;