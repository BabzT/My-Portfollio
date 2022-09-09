<template>
    <div class="skillsdiv">
        <div class="text-center">
            <h1 class="text-2xl font-bold">LANGUAGE</h1>
            <p class="mt-2 text-lg font-medium flex items-center">
                <i class='fab fa-js text-yellow-400 icon'></i>JavaScript
            </p>
        </div>
        <div class="techdiv">
            <h1 class="text-2xl font-bold">TECHNOLOGIES</h1>
            <div class="tech_elememts">
                <p><i class='fab fa-html5 text-orange-400 icon'></i>HTML</p>
                <p><i class='fab fa-css3-alt text-blue-400 icon'></i>CSS</p>
                <p>
                    tailwindcss
                </p>
                <p><i class='fab fa-sass text-rose-700 icon'></i>SASS</p>
                <p><i class='fab fa-vuejs text-green-500 icon'></i>Vuejs</p>
                <p><i class='fab fa-atlassian text-green-500 icon'></i>Nuxtjs</p>
                <p><i class='fab fa-npm text-red-600 icon'></i>NPM</p>
                <p><i class='fab fa-git-square icon'></i>Git</p>
            </div>
        </div>
        <div class="techdiv">
            <h1 class="text-2xl font-bold">TOOLS</h1>
            <div class="tech_elememts">
                <p>
                    <img class="w-6 mr-2" src="@/assets/vscode.svg" alt="">
                    Visual Studio Code
                </p>
                <p><i class='fab fa-figma text-orange-600 icon'></i>Figma</p>
                <p><i class='fab fa-github icon'></i>GitHub</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'SkillsComp'
    }
</script>
