// eslint-disable-next-line react/prop-types
const Kardochka = ({ img, text1, text2, bg, color }) => {
  return (
    <div 
      className={`py-6 rounded-2xl dark:bg-slate-400`} 
      style={{ backgroundColor: bg }}
    >
      <img src={img} alt="" className="m-auto rounded-t-lg" />
      <div className="pt-4 pb-8 px-4">
        <h2 
          className="text-xl font-bold" 
          style={{ color: color }}
        >
          {text1}
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-300">{text2}</p>
      </div>
    </div>
  );
}

export default Kardochka;
