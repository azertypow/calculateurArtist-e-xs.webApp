<template>
    <div class="v-files-resources app-view">
        <div class="v-home-view__nav-box">
            <app-nav
                :with-description='true'
            ></app-nav>
        </div>

        <div class="v-files-resources__section">
            <div
                class="v-files-resources__section__item"
            >
                <a
                    class="app-button app-button__variante"
                    href="/calculateurArtist-e-xs.webApp/tableau_remuneration_v3.pdf"
                    download="tableau_remuneration.pdf"
                >
                    <icon-download
                        :small-size="true"
                    />
                    <div
                        class="app-button__desc"
                    >GRILLE DE RÉMUNÉRATION DES ARTISTES</div>
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
    padding-top: 1rem;
    font-size: 1.5rem;
    line-height: 1.75rem;
}

.v-files-resources__section {
    box-sizing: border-box;
    border-top: solid 1px var(--app-color-border);
}

.v-files-resources__section__item {
    border-bottom: solid 1px var(--app-color-border);
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
