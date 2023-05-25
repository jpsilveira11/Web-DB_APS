import "./index.css";

import PropsPlans from "../../types/PropsPlans";

export default function PriceCard({ planInfos }: PropsPlans) {
  return (
    <div className="plan-price-card" key={planInfos.name}>
      <p className="plan-name">{planInfos.name}</p>

      <div className="price-value-wrapper">
        <p className="price-indicator">R$</p>
        <p className="price-value">{planInfos.value}</p>
        <span className="price-period">/mês</span>
      </div>

      <div className="plan-description">{planInfos.description}</div>

      <div className="plan-beneficits">
        {planInfos.benefits.map((benefit) => (
          <p>✓ {benefit} </p>
        ))}
      </div>

      <div className="plan-button-wrapper">
        <button>Escolha o plano</button>
      </div>
    </div>
  );
}
