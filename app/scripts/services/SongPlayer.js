(function() {
    function SongPlayer(Fixtures) {
        var SongPlayer = {};
        
        var currentAlbum = Fixtures.getAlbum();

//        @desc Buzz object audio file
//        @type {Object}
        
        var currentBuzzObject = null;
               
        var setSong = function(song) {
            if (currentBuzzObject) {
                currentBuzzObject.stop();
                stopSong(songPlayer.currentSong);
            }
            
            currentBuzzObject = new buzz.sound(song.audioUrl, {
                formats: ['mp3'],
                preload: true
            });
            
            SongPlayer.currentSong = song;
        };
        
        var playSong = function(song) {
            currentBuzzObject.play();
            song.playing = true;
        };
        
        var stopSong = function(song) {
            currentBuzzObject.stop();
            song.playing = null;
        }
        
        var getSongIndex = function(song) {
            return currentAlbum.songs.indexOf(song);
        };
        
        SongPlayer.currentSong = null;
        
        SongPlayer.play = function(song) {
            song = song || SongPlayer.currentSong;
            if (currentSong !== song) {
                setSong(song);
                currentBuzzObject.play();
                song.playing = true;
                
            } else if (currentSong === song) {
                if (currentBuzzObject.isPaused()) {
                    currentBuzzObject.play();
                }
            }
        };
        
        SongPlayer.pause = function(song) {
            song = song || SongPlayer.currentSong;
            currentBuzzObject.pause();
            song.playing = false;
        };
        
        SongPlayer.previous = function() {
            var currentSongIndex = getSongIndex(SongPlayer.currentSong);
            currentSongIndex--;
            
            if (currentSongIndex < 0 ) {
                stopSong(SongPlayer.currentSong); 
            }else {
                var song = currentAlbum.songs[currentSongIndex];
                setSong(song);
                playSong(song);
            }
        };
        
        songPlayer.next = function() {
            var currentSongIndex = getSongIndex(SongPlayer.currentSong);
            currentSongIndex++;
            
            if(currentSongIndex > currentAlbum.songs.length) {
                stopSong(SongPlayer.currentSong);
            }else {
                var song = currentAlbum.songs[currentSongIndex];
                setSong(song);
                playSong(song);
            }
        };
        
        return SongPlayer;
    }
    
    angular
        .module('blocJams')
        .factory('SongPlayer',['Fixtures', SongPlayer]);
})();