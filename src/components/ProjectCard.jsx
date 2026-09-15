import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

function ProjectCard({ title, status, description, url }) {
    return (
        <Card className="h-full">
            <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>{title}</CardTitle>
                <Badge variant={status === "Live" ? "default" : "secondary"}>{status}</Badge>
            </CardHeader>
            <CardContent className="flex-1">
                <p className="text-gray-700">{description}</p>
            </CardContent>
            <CardFooter>
                <Button render={<a href={url} target="_blank" rel="noreferrer" />}>
                    View project
                </Button>
            </CardFooter>
        </Card>
    );
}

export default ProjectCard;
