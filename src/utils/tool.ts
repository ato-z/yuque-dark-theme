export const createStyle = (cssString: string): HTMLStyleElement => {
    const style = document.createElement('style');
    style.innerHTML = cssString;
    return style;
};

export const upStoreConfig = (key: string, value: string) => {
    const currentKey = `__yuque_theme_${key}`;
    window.localStorage.setItem(currentKey, value);
};

export const storeConfig = (key: string, defaultValue?: string): string => {
    const currentKey = `__yuque_theme_${key}`;
    return window.localStorage.getItem(currentKey) ?? (defaultValue as string);
};

export const colorItemsToRootStyle = (list: colorItem[]): HTMLStyleElement => {
    const vars = list.map(([name, value]) => {
        return `--${name}: ${value};`;
    });
    const css = `
    :root {${vars.join(' ')}}
    `;
    return createStyle(css);
};

export const findStyleElement = (name: string) => {
    const style = document.querySelector(`style[${name}]`);
    if (style !== null) return style;
    const newStyle = document.createElement('style');
    const attrName = document.createAttribute(name);
    newStyle.setAttributeNode(attrName);
    document.documentElement.appendChild(newStyle);
    return newStyle;
};
