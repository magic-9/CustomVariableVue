new Vue({
    el: "#app",
    data: function() {
        return {
            color: "red"
        };
    },
    methods: {
        updateColor(e) {
            this.color = e.target.getAttribute("data-color");
        }
    },
})