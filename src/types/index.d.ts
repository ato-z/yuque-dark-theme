declare module '*.css';
declare module '*.webp';
declare const chrome = any;
declare type colorItem = [string, string];

declare type postConfig = {
    action: 'config_change';
    data: [string, string];
};
