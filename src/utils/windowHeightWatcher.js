// src/utils/windowHeightWatcher.js
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';

export function useWindowHeightWatcher() {
    const windowHeight = ref(window.innerHeight);

    const windowHeight70 = computed(() => {
        return windowHeight.value * 0.7;
    });

    const updateWindowHeight = () => {
        windowHeight.value = window.innerHeight;
    };

    onMounted(() => {
        window.addEventListener('resize', updateWindowHeight);
    });

    onBeforeUnmount(() => {
        window.removeEventListener('resize', updateWindowHeight);
    });

    return {
        windowHeight,
        windowHeight70,
    };
}
