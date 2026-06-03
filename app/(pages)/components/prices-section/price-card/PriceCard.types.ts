export interface PriceCardProps {
  id: string;
  title: string;
  description: string;
  price: number;
  benefits: string[];
  highlighted: boolean;
  badge: string | null;
}
