<template  @load="tracking">
   
</template>

<script>
export default {
   mounted() {
           this.tracking();
        },
    methods:{
        tracking(){
            const accept = localStorage.getItem('accepted');
            if(accept == 1){
                const dark = localStorage.getItem('dark');
                let headDark = document.querySelector('#head');
                let themeToggler = document.querySelector('.theme-toggler');
                if(dark == 1){
                    themeToggler.classList.toggle('activeToggle')
                    document.body.classList.add('activeDark');
                    headDark.classList.add('ac');
                }else{
                    document.body.classList.remove('activeDark');
                    headDark.classList.remove('ac');
                }



                 const theme = localStorage.getItem('theme');

                switch (theme) {
                    case "1":
                        document.querySelector(':root').style.setProperty('--first-color', 'rgb(62, 111, 244)');
                        break;
                    case "2":
                        document.querySelector(':root').style.setProperty('--first-color', 'rgb(0, 68, 253)');
                        break;
                    case "3":
                        document.querySelector(':root').style.setProperty('--first-color', 'rgb(39, 174, 96)');
                        break;
                    case "4":
                        document.querySelector(':root').style.setProperty('--first-color', 'rgb(0, 238, 99)');
                        break;

                    case "5":
                        document.querySelector(':root').style.setProperty('--first-color', 'rgb(15, 185, 177)');
                        break;
                    case "6":
                        document.querySelector(':root').style.setProperty('--first-color', 'rgb(0, 255, 242)');
                        break;
                    case "7":
                        document.querySelector(':root').style.setProperty('--first-color', 'rgb(206, 178, 68)');
                        break;
                    case "8":
                        document.querySelector(':root').style.setProperty('--first-color', 'rgb(255, 204, 0))');
                        break;
                    case "9":
                        document.querySelector(':root').style.setProperty('--first-color', 'rgb(172, 53, 76)');
                        break;
                    case "10":
                        document.querySelector(':root').style.setProperty('--first-color', 'rgb(255, 0, 51)');
                        break;
                    case "11":
                        document.querySelector(':root').style.setProperty('--first-color', 'rgb(232, 67, 147)');
                        break;
                    case "12":
                        document.querySelector(':root').style.setProperty('--first-color', 'rgb(186, 238, 0)');
                        break;

                    case "13":
                        document.querySelector(':root').style.setProperty('--first-color', 'rgb(145, 75, 108)');
                        break;
                    case "14":
                        document.querySelector(':root').style.setProperty('--first-color', 'rgb(252, 7, 239)');
                        break;
                    default:
                        break;
                }
            }else if(accept == null){
                 
                 localStorage.setItem("dark", "0");
            }


           
        }
    }
}
</script>

<style>

</style>