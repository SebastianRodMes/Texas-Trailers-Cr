interface SectionTitleProps {
  title: string;
  subtitle?: string;
  dark?: boolean;
}

const SectionTitle = ({ title, subtitle, dark = false }: SectionTitleProps) => (
  <div className="text-center mb-12 px-4">
    <h2 className={`text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4 ${dark ? 'text-white' : 'text-zinc-900'}`}>
      {title}
    </h2>
    <div className="flex justify-center mb-4">
      <div className="h-1 w-24 bg-[#c41e3a]"></div>
    </div>
    {subtitle && (
      <p className={`text-lg max-w-2xl mx-auto font-light ${dark ? 'text-zinc-400' : 'text-zinc-600'}`}>
        {subtitle}
      </p>
    )}
  </div>
);

export default SectionTitle;