import Image from "next/image";

const Download = () => {
  return (
    <div className="mt-3 relative z-100">
      <h5 className="text-fh-block relative z-10 ">Download App:</h5>
      <div className="flex space-x-4 mt-4 relative z-10">
        <Image
          width={130}
          height={40}
          src="/assets/apple.png"
          alt="App Store"
          className=""
        />
        <Image
          width={130}
          height={40}
          src="/assets/google.png"
          alt="Google Play"
          className=""
        />
      </div>
      <div className=" hidden md:block ">
        <Image
          src={"/assets/pata.png"}
          width={60}
          height={10}
          className="absolute top-2 left-[-30px] z-[-00]"
        />
      </div>
    </div>
  );
};

export default Download;
