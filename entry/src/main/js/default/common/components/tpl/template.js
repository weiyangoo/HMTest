export default {
//    props:['text','copyRight']
    data:{
        changeTxt:''
    },
    props:{
        text:{
            default:"header"
        },
        copyRight:{
            defalut:"none"
        }
    },
    onInit(){
        this.$watch('text',(newValue)=>{
           this.changeTxt = newValue + '!!!'
        })
    }
}