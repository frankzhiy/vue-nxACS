import { defineComponent, ref, onMounted, onBeforeUnmount } from 'vue';

export default {
    computed: {
        containerHeight() {
            const headerHeight = 50; // 根据实际情况调整头部高度
            const footerHeight = 50; // 根据实际情况调整底部高度
            const extraHeight = 100; // 根据实际情况调整额外高度，例如边距或填充

            const availableHeight = window.innerHeight - headerHeight - footerHeight - extraHeight;
            return `${availableHeight}px`;
        },

        containerHeightMin() {
            const headerHeight = 50; // 根据实际情况调整头部高度
            const footerHeight = 50; // 根据实际情况调整底部高度
            const extraHeight = 100; // 根据实际情况调整额外高度，例如边距或填充

            const availableHeight = window.innerHeight - headerHeight - footerHeight - extraHeight;
            return `${availableHeight * 0.7}px`; // 将可用高度的 80% 作为容器高度
        },
    },

    setup() {
        // 在 setup 函数中监听窗口大小变化，实现自适应高度
        const updateScrollbarHeight = () => {
            const availableHeight = window.innerHeight - headerHeight - footerHeight - extraHeight;
            containerHeight.value = `${availableHeight}px`;
            containerHeightMin.value = `${availableHeight * 0.7}px`;
        };

        const containerHeight = ref('0px');
        const containerHeightMin = ref('0px');
        const headerHeight = 50; // 根据实际情况调整头部高度
        const footerHeight = 50; // 根据实际情况调整底部高度
        const extraHeight = 100; // 根据实际情况调整额外高度，例如边距或填充

        onMounted(() => {
            updateScrollbarHeight();
            window.addEventListener('resize', updateScrollbarHeight);
        });

        onBeforeUnmount(() => {
            window.removeEventListener('resize', updateScrollbarHeight);
        });

        return {
            containerHeight,
            containerHeightMin,
        };
    },
};


