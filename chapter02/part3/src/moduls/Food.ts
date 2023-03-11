class Food {
    Element: HTMLElement;
    constructor() {
        this.Element = document.getElementById('food')!;
    }
    get x() {
        return this.Element.offsetLeft;
    }
    get y() {
        return this.Element.offsetTop
    }
    //修改食物的位置
    change() {
        let left = Math.round(Math.random() * 29) * 10;
        let top = Math.round(Math.random() * 29) * 10
        this.Element.style.left = left + 'px';
        this.Element.style.top = top + 'px';
    }
}

export default Food;