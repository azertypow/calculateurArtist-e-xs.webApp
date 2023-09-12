<template>
    <div class="v-files-resources app-view">
        <div class="v-home-view__nav-box">
            <app-nav
                :with-description='true'
            ></app-nav>
        </div>

        <h2 class="app-with-gutter">Resources</h2>

        <div class="v-files-resources__section">
            <div
                class="app-g app-g--justify-center"
            >
                <a
                    class="app-button"
                    href="/calculateurArtist-e-xs.webApp/tableau_remuneration_v3.pdf"
                    download="tableau_remuneration.pdf"
                >
                    <icon-download/>
                    <div
                        class="app-button__desc"
                    >GRILLE DE RÉMUNÉRATION<br>DES ARTISTES</div>
                </a>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent} from "vue"
import AppNav from "../components/AppNav.vue";
import IconDownload from "../components/IconDownload.vue";

export default defineComponent({
    components: {IconDownload, AppNav},
    props: {
        name: String,
        msg: {type: String, required: true}
    },

})</script>

<style lang="scss">
h2 {
    text-align: center;
    border-top: solid 1px var(--app-color-border);
    padding-top: 2rem;
}

.v-files-resources__section {
    box-sizing: border-box;
    border-top: solid 1px var(--app-color-border);
    padding: 2rem 1rem 3rem;
}
</style>
