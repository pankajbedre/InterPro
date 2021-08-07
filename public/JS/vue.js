
var app = new Vue({
    el: '#app',
    data() {
        return{
            posts:[]
        }
    },
    mounted: function () { //method1 will execute at pageload
        this.addData()
    },
    methods:{
        expand(id){
            $(".pt"+id).toggleClass("post-title-exp")
            $(".pb"+id).toggleClass("post-body-exp")
            $(".pex"+id).toggleClass("post-expand-exp")
        },
        addData(){
            $.getJSON( "https://jsonplaceholder.typicode.com/posts", function (posts) {
                app.posts = posts
            } )
        }
    }

})