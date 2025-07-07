import React from 'react';
import Plyr from 'plyr-react';
import 'plyr-react/plyr.css';

export default function Anime() {
  const source = {
    type: 'video',
    sources: [
      {
        src: 'https://archive.org/download/kenja-no-mago-eps11/kenja-no-mago-eps11.mp4',
        type: 'video/mp4',
        size: 720,
      },
    ],
    tracks: [
      {
        kind: 'subtitles',
        label: 'English',
        src: '/subs/kenja-en.vtt',
        srcLang: 'en',
        default: true,
      },
      {
        kind: 'subtitles',
        label: 'Indonesia',
        src: '/subs/kenja-id.vtt',
        srcLang: 'id',
      },
    ],
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <h2>Kenja no Mago Episode 11</h2>
      <Plyr source={source} />
    </div>
  );
}
