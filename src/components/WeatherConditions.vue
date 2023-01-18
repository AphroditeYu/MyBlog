<template>
   <div>
       <div id="he-plugin-standard"></div>
   </div>
</template>

<script>
    export default {
        name: "WeatherConditions",
        created() {
            window.WIDGET = {
                "CONFIG": {
                    "layout": "1",
                    "width": "600",
                    "height": "150",
                    "background": "1",
                    "dataColor": "FFFFFF",
                    "borderRadius": "15",
                    "key": ""
                }
            }
            let script = document.createElement('script');
            script.type = 'text/javascript'
            script.src="https://widget.qweather.net/standard/static/js/he-standard-common.js?v=2.0"
            document.getElementsByTagName('head')[0].appendChild(script);
        }
    }
</script>

<style scoped>

</style>