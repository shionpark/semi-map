import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-amber-100">
      <h1>Semi Map</h1>
      <Link href={'/map'}>지도</Link>
    </div>
  );
}
