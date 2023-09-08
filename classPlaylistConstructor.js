class Playlist {
    constructor() {
        this.songs = [];
        this.currentSongIndex = 0;
    }

    add(song) {
        this.songs.push(song);
    }

    play() {
        const currentSong = this.songs[this.currentSongIndex];

        if (currentSong) {
            currentSong.play();
        }
    }

    stop() {
        const currentSong = this.songs[this.currentSongIndex];

        if (currentSong) {
            currentSong.stop();
        }
    }

    next() {
        this.stop();
        this.currentSongIndex = (this.currentSongIndex + 1) % this.songs.length;
        this.play();
    }
}

class Song {
    constructor(title, artist) {
        this.title = title;
        this.artist = artist;
        this.isPlaying = false;
    }

    play() {
        this.isPlaying = true;
    }

    stop() {
        this.isPlaying = false;
    }
}

const playlist = new Playlist();
const heyJude = new Song("Hey Jude", "The Beatles");
const jaded = new Song("Jaded", "Aerosmith");
playlist.add(heyJude);
playlist.add(jaded);
playlist.play(); // Hey Jude started to play
playlist.next(); // Hey Jude stopped, Jaded started
playlist.next(); // Jaded stopped, Hey Jude started
playlist.stop(); // Hey Jude stopped
playlist.play(); // Hey Jude started
