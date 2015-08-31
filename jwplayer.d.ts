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
           /**
         * The title for your media item
         */
        title?: string;
           /**
         * A description for the media item. This will appear under your title.
         */
        description?: string;
        /**
         * A unique identifier used for JW Player analytics or personal tracking
         */
        mediaid?: string;

        /**
         * A poster image that appears when the player is idle
         */
        image?: string;
        /**
         * The file that will be played by JW Player
         */
        file?: string;
        /**
         * A block used for configuring multiple media sources.
         */
        sources?: Array<Source>;
        /**
         * Used for configuring VTT files for thumbnails and/or captions
         */
        tracks?: Array<Track>;
    }

    /**
     * A media file may have multiple backup sources to attempt playback from
     */
    interface Source {
           /**
         * The file that will load within the source
         */
        file: string;
           /**
         * The label for this source
         */
        label?: string;
           /**
         * Include and set to true to set as the default source
         */
        default?: boolean;
           /**
         * Used to set the file type. Useful if you are including a dynamic file with no extension
         */
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
            /**
         * The label that appears in the player interface during selection
         */
        label?: string;
            /**
         * Include this and set it to true in order to make this a default track
         */
        default?: boolean;
    }

    interface EventHandler {
        (...args: any[]):any;
    }

    interface LogoConfig {
            /**
         * Your logo's image file
         */
        file: string;
            /**
         * Setting to true will hide logo with control bar. false will display the logo at all times
         */
        hide?: boolean;
            /**
         * Clicking the logo will direct users to this URL
         */
        link?: string;
            /**
         * The logo's vertical and horizontal distance from the video border (In pixels)
         */
        margin?: number;
            /**
         * Which corner the logo will appear in. (bottom-left, bottom-right, top-left, top-right)
         */
        position?: string;
    }

    interface SetupConfig {
        playlist: Array<MediaItem>;
        /**
         * Used for responsive players. Must be in X:Y format.
         */
        aspectratio?: any;
        /**
         * If true, will autostart player on page load
         */
        autostart?: boolean;
        /**
         * Hides all controls. Requires an API method of starting.
         */
        controls?: boolean;
        /**
         * The file configured to play on the player. Can also be configured in a playlist/source block
         */
        file? : string;
        /**
         * The height (in pixels) at which the player will render.
         */
        height?: number;
        /**
         * The poster image which will appear when the player is idle
         */
        image?: string;
        /**
         * If true, the player will begin in a muted state
         */
        mute?: boolean;
        /**
         * Set to Flash if you would like the player to render in Flash. This defaults to HTML5 otherwise.
         */
        primary?: string;
        /**
         * If true, the player will repeat its playlist
         */
        repeat?: boolean;
        /**
         * The width (in pixels) at which the player will render. If using a % for responsive design, be sure to use aspectratio.
         */
        width?: number;
        /**
         * Defaults to true. Set to false to disable HLS on Android.
         */
        androidhls?: boolean;
        /**
         * Used for overriding HLS qualities
         */
        hlslabels?: any;
        /**
         * Defaults to true. Set false to hide the visual playlist.
         */
        visualplaylist?: boolean;
        /**
         * Defaults to true. Set to false to hide your video's title.
         */
        displaytitle?: boolean;
        /**
         * Defaults to true. Set to false to hide your video's description.
         */
        displaydescription?: any;
         /**
         * The URL to an alternate location for our Flash provider (Defaults to our CDN)
         */
        flashplayer?: string;
         /**
         * Changes video appearance based on player size. Can be uniform, fill, exactfit, none. (Defaults to uniform)
         */
        stretching?: string;
        /**
         * Set to false to disable JW Player's quality/caption cookies
         */
        cookies?: boolean;
        /**
         * Customizes player appearance via skins, active, inactive, and background configs. 
         */
        skin?: any;
          /**
         * Used to configure player caption appearance
         */
        captions?: {};
          /**
         * Used to configure a logo appearance and behavior
         */
        logo?: LogoConfig;
          /**
         * Include this block to enable JW Player's sharing plugin
         */
        sharing?: {};
         /**
         * Include this block to enable JW Player's GA plugin
         */
        ga?: any;
         /**
         * Include this block to enable JW Player's related plugin
         */
        related?: {};
        /**
         * Customizes player's right click text
         */
        abouttext?: string;
        /**
         * Customizes player's right click link
         */
        aboutlink?: string;
        /**
         * Used for configuring advertising features and plugins
         */
        advertising?: any;
        /**
         * Used for configuring DRM features for DASH playback
         */
        drm?: any;
    }


    interface PlayerInstance {
/**
         * Used to create a player on a page. Must specify an existing div ID to render
         */
        setup(config:SetupConfig): PlayerInstance;
        /**
         * Loads a playlist into a player. Can be an XML file or JSON.
         */
        load(playlist: Array<MediaItem>): PlayerInstance;
        /**
         * Removes a player on a page
         */
        remove():void;
/**
         * Returns the provider that is being used by the player
         */
        getProvider(): string;
        /**
         * Returns the ID of the div where the player is rendering
         */
        getContainer(): HTMLElement;
        /**
         * Returns the currently loaded playlist in JSON
         */
        getPlaylist(): Array<MediaItem>;
        /**
         * Returns the index of the current playlist item
         */
        getPlaylistIndex(): number;
        /**
         * Returns, in seconds, the current location of the media file
         */
        getPosition(): number;
        /**
         * Returns, in seconds, the length of the current media file
         */
        getDuration(): number;
        /**
         * Returns as a percentage the amount of the media file currently loaded in the player
         */
        getBuffer(): number;
        /**
         * Returns the player's current state. Can be idle, buffering, playing, or paused
         */
        getState(): string;
        /**
         * Returns the player's volume percentage from 0-100 
         */
        getVolume(): number;
        /**
         * Returns true if the player is currently muted 
         */
        getMute(): boolean;
        /**
         * Returns true if the player is currently in fullscreen
         */
        getFullscreen(): boolean;
        /**
         * Returns the height of the player in pixels
         */
        getHeight(): number;
        /**
         * Returns the width of the player in pixels
         */
        getWidth(): number;
        /**
         * Returns information (JSON) about the current playlist item
         */
        getPlaylistItem(idx:number): MediaItem;
        /**
         * API listener triggered every time an event happens
         */
        on(event:string, callback:EventHandler): PlayerInstance;
        /**
         * API listener triggered the first time an event happens
         */
        once(event:string, callback:EventHandler): PlayerInstance;
        /**
         * Turns off a specified 'on' API listener
         */
        off(event:string, callback:EventHandler): PlayerInstance;
        
        /**
         * Triggered when a new playlist item is loaded into the player
         */
        playlistItem(index: number): PlayerInstance;
        /**
         * Triggered when a player enters a 'playing' state
         */
        play(mode?: boolean): PlayerInstance;
        /**
         * Triggered when a player enters a 'paused' state
         */
        pause(mode?: boolean): PlayerInstance;
        /**
         * Triggered when a player is 'seeked'
         */
        seek(seconds: number): PlayerInstance;
        /**
         * Triggered when a player enters an 'idle' state
         */
        stop(): PlayerInstance;
        
        /**
         * Resizes the player based on the included width and height pixel values
         */
        resize(width:number, height:number): PlayerInstance;
        /**
         * Sets the player's mute to be true or false
         */
        setMute(mute: boolean): PlayerInstance;
        /**
         * Sets the player's volume as a percentage from 0-100
         */
        setVolume(seconds: number): PlayerInstance;
    }
}

declare var jwplayer:JWPlayer.GlobalApi;

