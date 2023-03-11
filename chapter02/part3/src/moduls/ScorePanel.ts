// 定义表示记分牌的类
class scorePanel {
    //score 和level 用来记录分享和等级
    score = 0;
    level = 1;

    scoreEle: HTMLElement;
    levelEle: HTMLElement;
    //设置限制变量的等级
    maxLevel: number;
    //设置变量表示多少分时升级
    upScore: number;
    constructor(maxLevel: number = 10, upScore: number = 10) {
        this.scoreEle = document.querySelector('#score')!
        this.levelEle = document.querySelector('#level')!
        this.maxLevel = maxLevel
        this.upScore = upScore
    }
    //添加一个加分的方法
    addScore() {
        this.scoreEle.innerHTML = ++this.score + ''
        //判断分数是多少
        if (this.score % this.upScore === 0) {
            this.leveUp()
        }
    }

    //提升等级的方法
    leveUp() {
        if (this.level < this.maxLevel) {
            this.levelEle.innerHTML = ++this.level + ''
        }
    }
}

export default scorePanel;
// let scorePannel = new scorePanel(100,3);
// for(let i=0;i<200;i++){
//     scorePannel.addScore()
// }