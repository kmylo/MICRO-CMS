import { ReactNode } from "react";

export interface CardProps{
  children: ReactNode
}
const Card = ({ children }: CardProps) => {
  return <div className="card bg-base-100 shadow-xl p-6 my-3">{children}</div>;
};
export default Card;
