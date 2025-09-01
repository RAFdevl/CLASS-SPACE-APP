// src/components/Gallery.jsx
export default function Gallery() {
  return (
    <div>
      <h1 className="text-2xl">🖼️ Galeri</h1>
      <div className="grid grid-cols-2 gap-2 mt-2">
        <img src="/logo.png" alt="sample" className="rounded" />
        <img src="/logo.png" alt="sample" className="rounded" />
      </div>
    </div>
  );
}
