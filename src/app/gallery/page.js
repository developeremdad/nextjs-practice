import Image from "next/image";
import image from "../../assets/image.png";

const GalleryPage = () => {
  return (
    <div>
      <div className="p-2 border mb-4">
        <h1 className="text-center">This is next image using URL</h1>
        <Image
          src="https://images.unsplash.com/photo-1493612276216-ee3925520721"
          width={200}
          height={500}
          className="mx-auto"
          alt="image"
        />
      </div>
      <div className="p-2 border">
        <h1 className="text-center">This is next js image using Local URL</h1>
        <Image
          src={image}
          width={200}
          height={500}
          className="mx-auto"
          alt="image"
        />
      </div>
    </div>
  );
};

export default GalleryPage;
