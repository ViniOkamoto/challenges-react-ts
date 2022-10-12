import { TextM, TitleL } from '../../core/theme/typography'
import {
  OrderDeliverInformationsContainer,
  SucceedOrderContainer,
} from './styles'
import deliveringImage from '../../assets/success-order.png'
import InfoTile from '../home/components/info-tile'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useLocation } from 'react-router-dom'
import { CompleteOrder } from '../../models/order'

interface LocationType {
  state: CompleteOrder
}
export default function SucceedOrderPage() {
  const { state } = useLocation() as unknown as LocationType

  return (
    <SucceedOrderContainer>
      <TitleL>Uhu! Order confirmed</TitleL>
      <TextM>
        Now all you have to do is wait for the coffee to come to you soon
      </TextM>
      <div>
        <OrderDeliverInformationsContainer>
          <InfoTile
            color="purple-default"
            icon={<MapPin weight="fill" />}
            text={
              <TextM>
                Delivery address{' '}
                <strong>
                  {`${state.address} - ${state.number}${
                    state.complement && ` - ${state.complement}`
                  }, ${state.city}, ${state.province}, ${state.postalCode} `}
                </strong>
              </TextM>
            }
          />
          <InfoTile
            color="yellow-default"
            icon={<Timer weight="fill" />}
            text={
              <TextM>
                Estimated delivery time
                <br />
                <strong>Between 20 - 30 min</strong>
              </TextM>
            }
          />
          <InfoTile
            icon={<CurrencyDollar />}
            text={
              <TextM>
                Payment method
                <br />
                <strong>{state.paymentMethod.type}</strong>
              </TextM>
            }
          />
        </OrderDeliverInformationsContainer>
        <img src={deliveringImage} alt="" />
      </div>
    </SucceedOrderContainer>
  )
}
