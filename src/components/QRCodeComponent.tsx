import { ReactNode } from "react"

interface ChildrenProps {
  children: ReactNode
}

function QRCodeComponent ({children}: ChildrenProps) {
  return (
    <div className="qr-code-component m-xs-300 p-xs-200 bg-neutral-xs-white border-radius-200">
      {children}
    </div>
  )
}

export default QRCodeComponent