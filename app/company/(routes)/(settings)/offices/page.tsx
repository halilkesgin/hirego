import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Trash } from "lucide-react"

const SettingsOfficesPage = () => {
    return (
        <Card className="w-full">
            <CardHeader>
                <div className="flex justify-between items-center gap-x-2">
                    <CardTitle className="font-semibold">
                        Offices
                    </CardTitle>
                    <Button variant="outline">
                        Add Office
                    </Button>
                </div>
            </CardHeader>
            <CardContent>
                <div className="grid md:grid-cols-3 space-x-4">
                    <Card>
                        <CardHeader>
                            <div className="flex justify-between gap-x-2">
                                <Badge>Default</Badge>
                                <Badge>1 job</Badge>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-col gap-y-1">
                                <p className="font-semibold text-muted-foreground">Izmir</p>
                                <p className="text-sm text-muted-foreground/70">35500 Izmir, Turkey</p>
                                <div className="flex justify-between mt-4">
                                    <Button variant="outline" className="w-4/5">
                                        Edit office
                                    </Button>
                                    <Button variant="destructive" size="icon">
                                        <Trash className="h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

            </CardContent>
        </Card>
    )
}

export default SettingsOfficesPage