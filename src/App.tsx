import QRCodeComponent from "./components/QRCodeComponent"
import QRCodeHeading from "./components/QRCodeHeading"
import QRCodeImage from "./components/QRCodeImage"
import QRCodeParagraph from "./components/QRCodeParagraph"

function App () {
  return (
    <>
      <QRCodeComponent>
        <div className="flex flex-direction-xs-column gap-xs-300">
          <QRCodeImage />

          <div className="flex flex-direction-xs-column gap-xs-200 pl-xs-200 pr-xs-200 pb-xs-500">
            <QRCodeHeading />
            <QRCodeParagraph />
          </div>
        </div>
      </QRCodeComponent>
    </>
  )
}

export default App