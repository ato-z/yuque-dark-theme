import { upStoreConfig } from './tool';

/**
 * 当用户发送修改行为时触发
 */
export const onUpConfig = async (name: string, value: string) => {
    const tabs =
        (await chrome.tabs.query({
            url: ['https://*.yuque.com/*', 'https://*.yuque.com/*'],
        })) ?? [];
    const tabIds = tabs.map((tab: any) => tab.id as number);
    upStoreConfig(name, value);
    const postData: postConfig = {
        action: 'config_change',
        data: [name, value],
    };
    try {
        tabIds.forEach((tabId: number) =>
            chrome.tabs.sendMessage(tabId, postData),
        );
    } catch {}
};
