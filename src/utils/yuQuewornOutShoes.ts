import { findStyleElement } from './tool';

/**
 * 语雀兼容代码 => 🚱 he tui
 */
export const yuQueWornOutShoes = () => {
    // MAC 平台会使用行内样式: 匹配到行内样式并清除
    const inlineStyleDom: HTMLElement | null = document.querySelector(
        '.main-wrapper div[style]',
    );
    if (inlineStyleDom !== null) {
        const randomId =
            'yuque-theme-' + Math.random().toString(16).replaceAll('.', '');
        inlineStyleDom.id = randomId;
        inlineStyleDom.style.background = '';
        const style = findStyleElement(randomId);
        style.innerHTML = `
            #${randomId} { background: var(--yq-bg-primary) !important }
            #${randomId} > div > div { background: var(--tool-secondary) !important}
        `;
    }
};
