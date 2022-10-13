import {
  PriceHighlight,
  TransactionTable,
  TranscationContainer,
} from './styles'

export default function TransactionSection() {
  return (
    <TranscationContainer>
      <TransactionTable>
        <tbody>
          <tr>
            <td width="50%">System Development</td>
            <td>
              <PriceHighlight variant="outcome">R$ 12,000.00</PriceHighlight>
            </td>
            <td>Category</td>
            <td>04/13/2022</td>
          </tr>
          <tr>
            <td width="50%">System Development</td>
            <td>
              <PriceHighlight variant="outcome">R$ 12,000.00</PriceHighlight>
            </td>
            <td>Category</td>
            <td>04/13/2022</td>
          </tr>
          <tr>
            <td width="50%">System Development</td>
            <td>
              <PriceHighlight variant="outcome">R$ 12,000.00</PriceHighlight>
            </td>
            <td>Category</td>
            <td>04/13/2022</td>
          </tr>
        </tbody>
      </TransactionTable>
    </TranscationContainer>
  )
}
