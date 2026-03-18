import { useCountUp } from '../hooks/useCountUp';

interface Props {
  value: number;
  suffix?: string;
  prefix?: string;
  className?: string;
  duration?: number;
  /** Format with thousands separator (e.g. 9000 → 9.000) */
  format?: boolean;
}

export const CountUp = ({ value, suffix = '', prefix = '', className, duration, format = false }: Props) => {
  const { value: current, ref } = useCountUp(value, duration);

  const display = format
    ? current.toLocaleString('pt-BR')
    : current.toString();

  return (
    <span ref={ref as React.RefObject<HTMLSpanElement>} className={className}>
      {prefix}{display}{suffix}
    </span>
  );
};
