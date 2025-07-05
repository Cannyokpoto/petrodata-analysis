import { getContext } from "@/Context/Context";
import { FiShare } from "react-icons/fi";





function ProductSelector({ selectedProduct, onChange, data }) {

  const { sharePetroData } = getContext();
    
    const productOptions = ["PMS", "AGO", "DPK", "LPG"];
    
  return (
    <div className="flex items-center justify-between px-2 h-40px text-13px w-100">
        <div className="flex gap-1 pt-1">Retail price analysis (NGN) <FiShare className="cursor-pointer text-17px text-textGray hover:text-deepGreen" onClick={()=> sharePetroData(data)} /></div>
        
        
      <div className="flex gap-3 h-100">
        {productOptions.map((product) => (
          <button
            key={product}
            onClick={() => onChange({ target: { value: product } })}
            className={`transition h-100 ${
              selectedProduct === product
                ? "border-t-2 border-deepGreen text-deepGreen"
                : "text-textGray"
            }`}
          >
            {product}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ProductSelector;
