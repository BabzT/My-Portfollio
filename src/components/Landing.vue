<template>
    <div class="landingpage">
        <h1 class="greeting">{{greeting}}</h1>
        <div class="userdiv">
            <div class="profilepic_circle">
                <img class="w-full h-full object-cover rounded-full" src="@/assets/babz.jpg" alt="">
            </div>
            <div class="userinfo">
                <h1 class="text-3xl font-bold mt-7">Babatunde Akinwobi</h1>
                <p class="text-2xl">Software Engineer</p>
                <p class="text-sm">(Frontend Web Developer)</p>
                <div class="social">
                    <a href="https://github.com/BabzT"><i class='fab fa-github'></i></a>
                    <a href="https://twitter.com/BabzTech?t=CEGTG20tavLWBk2OofKTg&s=09"><i class='fab fa-twitter'></i></a>
                    <a href="https://www.linkedin.com/in/babatunde-hezekiah-9976b5195"><i class='fab fa-linkedin'></i></a>
                    <a href="mailto:babatundehezekiah7@gmail.com"><i class="fas fa-envelope"></i></a>
                </div>
            </div>
        </div>

        <div class="profilefacts">
            <div class="experience">
                <h1>1+</h1>
                <p>Years of work experience</p>
            </div>

            <div class="experience">
                <h1>1</h1>
                <p>Completed project</p>
            </div>

            <div class="experience">
                <h1>10+</h1>
                <p>Personal Side Projects</p>
            </div>
        </div>

        <div class="profilebtns">
            <a class="download" href="/babatunde.pdf" download>Download CV 
                <span class="material-symbols-outlined ml-1">file_download</span>
            </a>
            <a class="contact" href="tel:+2348146825042">Contact Me</a>
        </div>

        <div class="tabbtns">
            <div class="activebg">

            </div>
            <button @click="gotoPortfolio" class="portfoliobtn">Portfolio</button>
            <button @click="gotoSkills" class="skillsbtn">Skills</button>
        </div>
        <component :is="activeTab"/>
    </div>
</template>

<script>
import PortfolioComp from '@/components/Portfolio.vue'
import SkillsComp from '@/components/Skills.vue'
    export default {
        name:'LandingPage',
        components:{
            PortfolioComp,
            SkillsComp
        },
        data(){
            return{
                activeTab:'PortfolioComp',
                time: new Date().getHours(),
                greeting:''
            }
        },
        mounted(){
            this.getGreeting();
        },
        methods:{
            getGreeting(){
                if(this.time < 12){
                    this.greeting = 'Good Morning'
                } else if(this.time < 18){
                    this.greeting = 'Good Day'
                } else{
                    this.greeting = 'Good Evening'
                }
            },
            gotoPortfolio(){
                this.activeTab = 'PortfolioComp';
                document.querySelector('.activebg').classList.add('left')
                document.querySelector('.activebg').classList.remove('right')
            },
            gotoSkills(){
                this.activeTab = 'SkillsComp';
                document.querySelector('.activebg').classList.remove('left')
                document.querySelector('.activebg').classList.add('right')
            }
        }
    }
</script>
