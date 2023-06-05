import { BlurImage, Image } from './BlurImage';
import { supabase } from './utils/supabase';

export const revalidate = 60;

export default async function Home() {
  const { data } = await supabase.from('images').select('*');

  const images = data as Image[];

  return (
    <main className="flex min-h-screen p-24">
      <div className="grid grid-cols-3 gap-10 w-full">
        {images?.map((image) => (
          <BlurImage image={image} key={image.imageSrc} />
        ))}
      </div>
    </main>
  );
}
