// Type definitions for JW Player v7.0.0
// Project: http://github.com/jwplayer/jwplayer/
// Definitions by: JW Player <http://github.com/jwplayer/>

declare module JWPlayer {

    /**
     * The global jwplayer object can be used to setup a new player,
     * or grab an existing one from the page. In either case it always returns a
     * playerInstance.
     *
     * When grabbing a player, you may either use a string denoting the id of the DOM
     * element it is on, or the index of the player in terms of initialization order, or pass
     * no arguments to grab the first player off of the page.
     */
    interface GlobalApi {
        (id: string): PlayerInstance;
        (index: number): PlayerInstance;
        (): PlayerInstance;

        /**
         * This value is the current version of the player in Semantic Versioning
         */
        version:string;

        api: {
            /**
             * Use this to register a plugin
             */
            registerPlugin: (...args:any[]) => void;
        }
    }
    /**
     * A media item to play. These
     */
    interface MediaItem {
        title?: string;
        description?: string;
        mediaid?: string;

        /**
         * A poster image
         */
        image?: string;
        file?: string;
        sources?: Array<Source>;
        tracks?: Array<Track>;
    }

    /**
     * A media file may have multiple backup sources to attempt playback from
     */
    interface Source {
        file: string;
        label?: string;
        default?: boolean;
        type?: string;
    }

    /**
     * A track adds metadata to a video
     */
    interface Track {
        /**
         * The url from which to load the track from
         */
        file: string;
        /**
         * This has three acceptable values: captions, chapters or thumbnails
         */
        kind?: string;
        label?: string;
        default?: boolean;
    }

    interface EventHandler {
        (...args: any[]):any;
    }

    interface LogoConfig {
        file: string;
        hide?: boolean;
        link?: string;
        margin?: number;
        position?: string;
    }

    interface SetupConfig {
        playlist: Array<MediaItem>;
        aspectratio?: any;
        autostart?: boolean;
        controls?: boolean;
        file? : string;
        height?: number;
        image?: string;
        mute?: boolean;
        primary?: string;
        repeat?: boolean;
        width?: number;
        androidhls?: boolean;
        hlslabels?: any;
        visualplaylist?: boolean;
        displaytitle?: boolean;
        displaydescription?: any;
        flashplayer?: string;
        stretching?: string;
        cookies?: boolean;
        skin?: any;
        captions?: {};
        logo?: LogoConfig;
        sharing?: {};
        ga?: any;
        related?: {};

        abouttext?: string;
        aboutlink?: string;
        advertising?: any;
        drm?: any;
    }


    interface PlayerInstance {

        setup(config:SetupConfig): PlayerInstance;
        load(playlist: Array<MediaItem>): PlayerInstance;
        remove():void;

        getProvider(): string;
        getContainer(): HTMLElement;
        getPlaylist(): Array<MediaItem>;
        getPlaylistIndex(): number;
        getPosition(): number;
        getDuration(): number;
        getBuffer(): number;
        getState(): string;
        getVolume(): number;
        getMute(): boolean;
        getFullscreen(): boolean;
        getHeight(): number;
        getWidth(): number;
        getPlaylistItem(idx:number): MediaItem;

        on(event:string, callback:EventHandler): PlayerInstance;
        once(event:string, callback:EventHandler): PlayerInstance;
        off(event:string, callback:EventHandler): PlayerInstance;

        playlistItem(index: number): PlayerInstance;
        play(mode?: boolean): PlayerInstance;
        pause(mode?: boolean): PlayerInstance;
        seek(seconds: number): PlayerInstance;
        stop(): PlayerInstance;

        resize(width:number, height:number): PlayerInstance;
        setMute(mute: boolean): PlayerInstance;
        setVolume(seconds: number): PlayerInstance;
    }
}

declare var jwplayer:JWPlayer.GlobalApi;

