// iOS Safari-safe full-screen video — uses min-width/min-height + translate instead of object-fit
export default function VideoBackground({ src }: { src: string }) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <video
        src={src}
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          minWidth: '100%',
          minHeight: '100%',
          width: 'auto',
          height: 'auto',
        }}
      />
    </div>
  )
}
