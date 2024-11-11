import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"


const AppCard = ({ title, n1, n2 }) => {
    return (
        <Card class="aspect-video rounded-xl bg-muted/50">
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <h2 className="text-2xl">{n1}</h2>
            </CardHeader>
            <CardContent>
                <p>Power Consumption</p>
            </CardContent>
            <CardFooter>
                <p>{n2}</p>
            </CardFooter>
        </Card>

    )
}

export default AppCard