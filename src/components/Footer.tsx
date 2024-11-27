import { footer } from "../store/GlobalValues"

const Footer = () => {
  return (
    <div className="font-serif text-center">
        <p className="text-2xl uppercase">{footer.primaryText}</p>
          <p className="text-xl ">{footer.sillyPhrase}</p>
    </div>
  )
}

export default Footer