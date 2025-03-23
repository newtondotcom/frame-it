import { Card, CardContent } from "@/components/ui/card"

const mockups = [
  {
    title: "Mockup 1",
    iframe: "/mockup/1",
  },
  {
    title: "Mockup 2",
    iframe: "/mockup/1",
  },
  {
    title: "Mockup 3",
    iframe: "/mockup/1",
  },
]

export default function Mockups() {
  return (
    <div className="flex flex-col gap-8">
      <h1>Mockups</h1>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {mockups.map((mockup, index) => (
          <Card key={index}>
            <CardContent>
              <iframe src={mockup.iframe} className="w-full h-64 sm:h-80 lg:h-96" />
              <h3>{mockup.title}</h3>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

