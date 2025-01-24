import { Paragraph } from "@/components/Text/Paragraph";
import { Title } from "@/components/Text/Title";
import { AircraftCollection } from "@/types/AircraftCollection";

interface AircraftCardProps {
    aircraft: AircraftCollection,
    css?: string
}

export function AircraftCard({ aircraft, css }: AircraftCardProps) {
    return (
        <div className={`md:flex w-[80%] items-center m-auto pb-4 ${css}`}>
            <img
                src={aircraft.photos.find((photo: string) => photo.includes("main")) || aircraft.photos[0]}
                alt={aircraft.name}
                className="max-h-[200px] w-auto"
            />
            <div>
                {aircraft.name &&
                    <Title css="text-2xl">
                        {aircraft.name}
                    </Title>
                }
                <Paragraph>
                    {aircraft.description}
                </Paragraph>
                {aircraft.history &&
                    <Paragraph>
                        <b>History Of Our {aircraft.name}:</b> {aircraft.history}
                    </Paragraph>
                }
            </div>
        </div>
    )
}