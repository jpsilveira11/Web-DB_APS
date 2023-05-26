interface PlanInfos {
  name: string;
  value: number;
  description: string;
  benefits: string[];
}

export default interface PropsPlans {
  planInfos: PlanInfos;
}
