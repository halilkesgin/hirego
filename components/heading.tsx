interface HeadingProps {
    title: string
    subtitle?: string 
}

const Heading = ({
    title,
    subtitle
}: HeadingProps) => {
    return (
        <div>
            <h4 className="text-4xl font-bold">
                {title}
            </h4>
            <h6 className="text-sm text-muted-foreground/50 font-medium">
                {subtitle}
            </h6>
        </div>
    )
}

export default Heading