import React from "react";

function FreeShippingBar() {
  return (
    <div className="page-width">
      <div className="grid grid-cols-1 md:grid-cols-3 md:divide-x border-divider border my-3">
        <div className="p-2 border-divider">
          <h2>Personnalisation</h2>
          <p>Demandez une brodure personnalisée.</p>
        </div>
        <div className="p-2 border-divider">
          <h2>Made in France</h2>
          <p>Des produits issue de laine 100% française.</p>
        </div>
        <div className="p-2 border-divider">
          <h2>Livraison en région Parisienne</h2>
          <p>Une livraison à domicile rapide.</p>
        </div>
      </div>
    </div>
  );
}

export default FreeShippingBar;

export const layout = {
  areaId: "content",
  sortOrder: 2,
};
