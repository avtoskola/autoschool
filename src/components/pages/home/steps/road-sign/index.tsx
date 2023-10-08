interface Props {
    step: number
}

export default function RoadSign(props: Props) {
  return (
    <div className="border-2 rotate-45 border-black rounded-lg w-52 h-52 bg-white p-3 max-md:w-32 max-md:h-32 max-sm:h-20 max-sm:w-20">
      <div className="bg-yellow h-full  border-2 border-black relative">
        <div className="absolute -rotate-45 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <p className="text-6xl text-center font-semibold max-md:text-3xlarge max-sm:text-large max-sm:leading-[1em]">
            {props.step}
          </p>
          <p className="text-medium max-sm:text-small max-sm:leading-[1em]">Крок</p>
        </div>
      </div>
    </div>
  );
}
