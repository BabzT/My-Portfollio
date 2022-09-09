<template>
    <div class="portfolio">
        <a href="#">
            <div class="work">
                <img src="@/assets/e-commerce.png" alt="">
                <p class="click">Click to view my e-commerce website.</p>
            </div>
        </a>
        <a href="#">
            <div class="work">
                <img src="@/assets/hoobank.png" alt="">
                <p class="click">Visit Hoobank with a tap.</p>
            </div>
        </a>
        <a href="#">
            <div class="work">
                <img src="@/assets/movieapp.png" alt="">
                <p class="click">Click to stream movies.</p>
            </div>
        </a>
        <a href="#">
            <div class="work">
                <img src="@/assets/iphone.png" alt="">
                <p class="click">Click to view an iPhone I built.</p>
            </div>
        </a>
        <a href="#">
            <div class="work">
                <img src="@/assets/ecommerce2.png" alt="">
                <p class="click">Click Me.</p>
            </div>
        </a>

        <div v-if="otherProjects" class="other_work">
            <a href="#">
                <div class="work">
                    <img src="@/assets/cowrywise.png" alt="">
                    <p class="click">Tap to view Cowrywise Landing page clone.</p>
                </div>
            </a>
            <a href="#">
                <div class="work">
                    <img src="@/assets/foodchannel.png" alt="">
                    <p class="click">Visit my food channel.</p>
                </div>
            </a>
            <a href="#">
                <div class="work">
                    <img src="@/assets/piggyvest.png" alt="">
                    <p class="click">Tap to view PiggyVest Landing page clone.</p>
                </div>
            </a>
            <a href="#">
                <div class="work">
                    <img src="@/assets/quiz.png" alt="">
                    <p class="click">Click to take Quiz.</p>
                </div>
            </a>
            <a href="#">
                <div class="work">
                    <img src="@/assets/gigprix.png" alt="">
                    <p class="click">Click Me</p>
                </div>
            </a>
        </div>

        <div class="load_more" @click="loadMoreProjects">
            <button v-if="otherProjects">View less</button>
            <button v-else>Load More Projects</button>
            
        </div>
    </div>
</template>

<script>
    export default {
        name:'PortfolioComp',
        data(){
            return{
                otherProjects:false
            }
        },
        methods:{
            loadMoreProjects(){
                this.otherProjects = !this.otherProjects;
            }
        }
    }
</script>
