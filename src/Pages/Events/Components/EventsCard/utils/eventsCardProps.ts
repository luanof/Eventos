import { Status } from "../../../../../types/event";

export interface EventsCardProps {
  id: number;
  src: string;
  day: number;
  month: string;
  time: string;
  detalhes: string;
  endereco: string;
  status? :Status
}
