import { base, other } from '../config';
import { storeConfig } from '../utils/tool';
import { onUpConfig } from '../utils/onUpConfig';
import bgImg from './background.webp';
const resetEm = () => {
    const em = 100;
    const targetWidth = 500;
    const innerWidth = window.innerWidth;
    const prop = innerWidth / targetWidth;
    const currentEm = Math.min(300, Math.max(em, em * prop));
    console.log(prop);
    document.documentElement.style.fontSize = currentEm + 'px';
};

window.addEventListener('resize', void resetEm() || resetEm);
document.querySelector('body')!.style.backgroundImage = `url(${bgImg})`;

const createColorItem = (item: colorItem) => {
    const label = document.createElement('label');
    const [name, value] = [item[0], storeConfig(item[0], item[1])];
    label.className = 'color';
    label.innerHTML = `
        <span style="background-color: ${value}"></span>
        <input name="${name}" value="${value}" data-value="${item[1]}" type="color" placeholder="${value}" />
    `;
    const span = label.querySelector('span')!;
    const input = label.querySelector('input')!;
    input.addEventListener('change', () => {
        span.style.backgroundColor = input.value;
        onUpConfig(name, input.value);
    });
    return label;
};
const createColorList = (title: string, list: colorItem[]) => {
    const section = document.createElement('section');
    section.className = 'item flex flex-center colors';
    section.innerHTML = `
        <strong class="title">${title}</strong>
        <section class="list flex grow">
        </section>
    `;
    const listElement = section.querySelector('.list')!;
    list.map((item) => listElement.appendChild(createColorItem(item)));
    return section;
};

const settingElement = document.querySelector('.settings')!;
settingElement.appendChild(createColorList('B A S E', base));
settingElement.appendChild(createColorList('OTHER', other));

// 点击重置所有颜色
const resetColorBtn = document.querySelector('#reset-color')!;
resetColorBtn.addEventListener('click', () => {
    const inputs = [
        ...document.querySelectorAll('.color input'),
    ] as HTMLInputElement[];
    inputs.forEach((input) => {
        input.value = input.dataset['value'] as string;
        input.dispatchEvent(new Event('change'));
    });
});
