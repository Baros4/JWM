var vm = new Vue({
    el:"#verses",
    data:{
        title:"",
        verse:"",
        reading:"",
        versesList:[]
    },
    methods:{
        add: function () {
            var obj = {
                title: this.title,
                verse: this.verse,
                reading: this.reading
            }
            this.versesList.push(obj)
            this.title =""
            this.verse=""
            this.reading=""
        }
    }
})
