"use client"

interface FormProps {
  value: number,
  changeAmount: (valor: number) => (void);
}

export default function Form({ value, changeAmount }: FormProps) {

  return (
    <input type="number" placeholder="100" value={value} onChange={(e) => changeAmount(Number(e.target.value))
    } />
  )
}
