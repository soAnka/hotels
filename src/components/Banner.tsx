interface BannerProps {
  description: string;
  title: string;
}
const Banner = ({ title, description }: BannerProps) => {
  return (
    <div
      className={`"m-0 text-black" h-[35rem] w-full bg-[url("../images/main_banner.jpg")] bg-cover bg-center bg-no-repeat text-left`}
    >
      <div className={` m-0 h-full w-full`}>
        <div className="flex h-full w-full flex-col justify-center  p-8 pl-16 lg:w-3/5 2xl:w-2/5">
          <h4 className="p-4 text-6xl">{title}</h4>
          <p className="w-3/4 p-4 text-base font-thin text-gray-600">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
