import Card from "./Card"

function CardsLine() {
    return (
        <div className="flex flex-wrap overflow-hidden p-6">
          <Card />
          <Card />
          <Card />
        </div>
    )
}

export default CardsLine
