import { TextM, TitleL } from '../../core/theme/typography'
import {
  OrderDeliverInformationsContainer,
  SucceedOrderContainer,
} from './styles'
import deliveringImage from '../../assets/success-order.png'
import InfoTile from '../home/components/info-tile'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'

export default function SucceedOrderPage() {
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
                Entrega em{' '}
                <strong>
                  Rua João Daniel Martinelli, 102 Farrapos - Porto Alegre, RS
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
                <strong>Previsão 20 - 30 min</strong>
              </TextM>
            }
          />
          <InfoTile
            icon={<CurrencyDollar />}
            text={
              <TextM>
                Payment method
                <br />
                <strong>Debit Card</strong>
              </TextM>
            }
          />
        </OrderDeliverInformationsContainer>
        <img src={deliveringImage} alt="" />
      </div>
    </SucceedOrderContainer>
  )
}
