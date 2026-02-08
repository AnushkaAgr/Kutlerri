// components/hero/HeroHeading.tsx

type Props = {
  title: string;
};

export function HeroHeading({ title }: Props) {
  return (
    <h1
      className="
        text-white
        font-avant
        font-bold
        tracking-[-1px]
        leading-[108.905%]
        text-[28px]
        sm:text-[34px]
        md:text-[42px]
        lg:text-[58px]
      "
      style={{ fontVariantNumeric: "slashed-zero" }}
    >
      {title}
    </h1>
  );
}
