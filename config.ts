import token from './public.pem';

export const window = {
    width: 900,
    height: 550,
    frame: false,
    resizable: false,
    maximizable: false,
    fullscreenable: false,
    title: 'CubeMc Launcher',
};

export const api = {
    ws: 'ws://84.252.159.218:24454/ws',
    web: 'http://84.252.159.218:24454',
    extraToken: token,
};

export const appPath = '.aurora-launcher';
