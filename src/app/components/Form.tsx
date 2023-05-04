"use client"

interface FormProps {
  value: number,
  changeAmount: (valor: string) => (void);
}

export default function Form({ value, changeAmount }: FormProps) {

  return (
    <input type="text" placeholder="100" maxLength={12} pattern="^[0-9]+" value={value} onChange={(e) => changeAmount(e.target.value)
    } />
  )
}
