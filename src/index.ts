import themeCss from './assets/css/style.css';
import { base, other } from './config';
import {
    createStyle,
    colorItemsToRootStyle,
    storeConfig,
    findStyleElement,
    upStoreConfig,
} from './utils/tool';
import { yuQueWornOutShoes } from './utils/yuQuewornOutShoes';

// 网站视觉的主色
const baseColors: colorItem[] = base.map(([name, value]: string[]) => [
    name!,
    storeConfig(name!, value),
]);
// 语雀原网的辅色，影响不是很大
const otherColors: colorItem[] = other.map(([name, value]: string[]) => [
    name!,
    storeConfig(name!, value),
]);

const fragment = document.createDocumentFragment();
const [...styleElements] = [
    colorItemsToRootStyle(baseColors),
    colorItemsToRootStyle(otherColors),
    createStyle(themeCss),
];
styleElements.forEach((element) => fragment.appendChild(element));
document.documentElement?.appendChild(fragment);

/**
 * 监听用户在弹窗中的设置
 */
chrome.runtime.onMessage.addListener(({ action, data }: postConfig) => {
    if (action === 'config_change') {
        // 修改了配置
        const [name, value] = data;
        const style = findStyleElement(name);
        style.innerHTML = ` :root { --${name}: ${value} }`;
        upStoreConfig(name, value);
    }
});

// 🤮🤮🤮yue
Promise.resolve().then(yuQueWornOutShoes);
