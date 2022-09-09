<template>
    <div class="landingpage">
        <h1 class="greeting">{{greeting}}</h1>
        <div class="userdiv">
            <div class="profilepic_circle">
                <img class="w-full h-full object-cover rounded-full" src="@/assets/babz.jpg" alt="">
            </div>
            <h1 class="text-3xl font-bold mt-7">Babatunde Akinwobi</h1>
            <p class="text-2xl">Software Engineer</p>
            <div class="social">
                <a href="#"><i class='fab fa-github'></i></a>
                <a href="#"><i class='fab fa-twitter'></i></a>
                <a href="#"><i class='fab fa-linkedin'></i></a>
                <a href="#"><i class='fab fa-whatsapp'></i></a>
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
            <a class="download" href="#">Download CV 
                <span class="material-symbols-outlined ml-1">file_download</span>
            </a>
            <a class="contact" href="#">Contact Me</a>
        </div>

        <div class="tabbtns">
            <button :class="{active : portfolio}" @click="gotoPortfolio" class="portfoliobtn">Portfolio</button>
            <button :class="{active : skills}" @click="gotoSkills" class="skillsbtn">Skills</button>
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
                portfolio:true,
                skills:false,
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
                console.log(this.time)
            },
            gotoPortfolio(){
                this.activeTab = 'PortfolioComp';
                this.portfolio = true;
                this.skills = false;
            },
            gotoSkills(){
                this.activeTab = 'SkillsComp';
                this.skills = true;
                this.portfolio = false;
            }
        }
    }
</script>
