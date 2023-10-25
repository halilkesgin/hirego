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
            <h4 className="text-3xl font-bold">
                {title}
            </h4>
            <h6 className="text-md text-muted-foreground/60 font-semibold">
                {subtitle}
            </h6>
        </div>
    )
}

export default Heading