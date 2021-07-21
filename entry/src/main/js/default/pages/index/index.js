//ES6
import router from '@system.router';
import tools from '../../common/utils/tools.js';
export default {
    data:{
        title:'hello world',
        fruits:[
           '葡萄',
           '草莓'
        ],
        isShow:false,
        txt:"首页"
    },
    handleClick(title){
        router.push({
            uri:'pages/details/details'
        })
        this.title = 'hello world !!!'
        this.title = title
        this.isShow = !this.isShow
    },
    onReady(){
        console.log(this.$app.$def.x)
        console.log(this.$app.$def.y)
        const num = tools.add(10,10)
        console.log(num)
        setTimeout(()=>{
            this.txt = "world"
        },3000)
    }
}