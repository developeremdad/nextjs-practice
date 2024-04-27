import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Home",
  description: "this is home page description",
};
const HomePage = async () => {
  const res = await fetch("http://localhost:5000/shoes", {
    next: {
      revalidate: 5, // Standard time 30 seconds
    },
  });
  const shoes = await res.json();

  return (
    <div>
      <h1>This is home page component</h1>
      <div className="grid grid-cols-3 gap-6 p-4">
        {shoes?.slice(0, 3)?.map((shoe) => (
          <div key={shoe?.id} className="card bg-base-100 shadow-xl">
            <figure>
              <Image
                src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                width={400}
                height={100}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Shoes!
                <div className="badge badge-secondary">{shoe?.price}</div>
              </h2>
              <p>{shoe?.description}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-outline btn-info btn-sm">
                  Buy Now
                </button>
                <button className="btn btn-outline btn-success btn-sm">
                  Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center my-4">
        <Link href="/product">
          <button className="btn btn-outline btn-info btn-sm">See More </button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
