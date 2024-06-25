import React, { useState } from "react";
import SongItem from "./SongItem";

function TrackList({ songs, setCurrentSong }) {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredSongs = songs.filter(
    (song) =>
      song.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      song.artist.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="track-list">
      <input
        type="text"
        placeholder="Search songs..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredSongs.map((song) => (
          <SongItem key={song.id} song={song} setCurrentSong={setCurrentSong} />
        ))}
      </ul>
    </div>
  );
}

export default TrackList;