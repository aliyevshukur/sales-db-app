import React, { useState } from "react";
import { splitAtFirstUppercase } from "../../../../lib/Utils/splitAtFirstUppercase";
import "./MaterialCard.scss";
import MaterialCarousel from "./MaterialCarousel/MaterialCarousel";

function MaterialCard() {
  const materials = [
    "carbon",
    "brushedMetal",
    "matteBlack",
    "silicone",
    "glossyPlastic",
    "metalMesh",
  ];
  const [materialName, setMaterialName] = useState<string>(materials[0]);

  function updateMaterialName(currentIndex: number) {
    const rawName = materials[currentIndex];
    const name = splitAtFirstUppercase(rawName);
    setMaterialName(name);
  }

  return (
    <div className='materialCard'>
      <div className='materialCard-label'>Pick material</div>
      <MaterialCarousel
        updateMaterialName={updateMaterialName}
        materials={materials}
      />
      <div className='materialCard-name'>{materialName}</div>
    </div>
  );
}

export default MaterialCard;
